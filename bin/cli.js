#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { HfInference } from '@huggingface/inference';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { randomBytes } from 'crypto';

// Parse command-line arguments
const args = process.argv.slice(2);
let apiKey = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--api-key' && i + 1 < args.length) {
    apiKey = args[i + 1];
    break;
  }
}

// Check for API key in environment variable if not provided via CLI
if (!apiKey) {
  apiKey = process.env.HF_TOKEN || process.env.HUGGING_FACE_TOKEN;
}

if (!apiKey) {
  console.error('Error: HuggingFace API token is required.');
  console.error('Provide it via --api-key flag or HF_TOKEN environment variable.');
  console.error('\nUsage:');
  console.error('  npx mcp-hf-images --api-key YOUR_HF_TOKEN');
  console.error('  HF_TOKEN=YOUR_HF_TOKEN npx mcp-hf-images');
  console.error('\nGet your token from: https://huggingface.co/settings/tokens');
  process.exit(1);
}

// Initialize HuggingFace Inference
const hf = new HfInference(apiKey);

// Create MCP server
const server = new Server(
  {
    name: 'image-generator-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register the image generation tool
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'generate_image',
        description: 'Generate an image from a text prompt using HuggingFace models (Stable Diffusion, FLUX, etc.)',
        inputSchema: {
          type: 'object',
          properties: {
            prompt: {
              type: 'string',
              description: 'The text description of the image to generate',
            },
            model: {
              type: 'string',
              description: 'Model to use for generation',
              enum: [
                'black-forest-labs/FLUX.1-dev',
                'stabilityai/stable-diffusion-xl-base-1.0',
                'stabilityai/stable-diffusion-2-1',
                'runwayml/stable-diffusion-v1-5',
                'ayrisdev/mobile-ui-design',
                'Shakker-Labs/FLUX.1-dev-LoRA-Logo-Design',
                'artificialguybr/LogoRedmond-LogoLoraForSDXL-V2',
                'iamkaikai/amazing-logos-v2',
                'nicky007/stable-diffusion-logo-fine-tuned'
              ],
              default: 'stabilityai/stable-diffusion-xl-base-1.0',
            },
            negativePrompt: {
              type: 'string',
              description: 'Optional: What to avoid in the generated image',
            },
          },
          required: ['prompt'],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== 'generate_image') {
    throw new Error(`Unknown tool: ${request.params.name}`);
  }

  const {
    prompt,
    model = 'stabilityai/stable-diffusion-xl-base-1.0',
    negativePrompt
  } = request.params.arguments;

  if (!prompt) {
    throw new Error('Prompt is required');
  }

  try {
    // Generate image using HuggingFace Inference API
    const imageBlob = await hf.textToImage({
      model: model,
      inputs: prompt,
      parameters: {
        ...(negativePrompt && { negative_prompt: negativePrompt }),
      }
    });

    // Convert blob to buffer
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = imageBlob.type || 'image/png';

    // Determine file extension from mime type
    const extension = mimeType.includes('png') ? 'png' : 'jpg';

    // Create temp directory for images if it doesn't exist
    const tempDir = join(tmpdir(), 'mcp-images');
    await mkdir(tempDir, { recursive: true });

    // Generate unique filename
    const filename = `generated-${randomBytes(8).toString('hex')}.${extension}`;
    const filePath = join(tempDir, filename);

    // Save image to disk
    await writeFile(filePath, buffer);

    return {
      content: [
        {
          type: 'text',
          text: `Successfully generated image using ${model}\nPrompt: "${prompt}"\n\nImage saved to: ${filePath}\n\nYou can view this image by reading the file path above.`,
        },
        {
          type: 'resource',
          resource: {
            uri: `file://${filePath}`,
            mimeType: mimeType,
            text: `Generated image for prompt: ${prompt}`,
          },
        },
      ],
    };
  } catch (error) {
    // Provide detailed error messages to users
    let errorMessage = 'Failed to generate image: ';

    if (error.message.includes('401') || error.message.includes('Invalid token')) {
      errorMessage += 'Invalid HuggingFace token. Please check your API token configuration.';
    } else if (error.message.includes('429') || error.message.includes('rate limit')) {
      errorMessage += 'Rate limit exceeded. Please wait a moment and try again, or upgrade your HuggingFace account.';
    } else if (error.message.includes('quota') || error.message.includes('credits')) {
      errorMessage += 'Free tier quota exceeded. Please wait for your quota to reset or upgrade to PRO.';
    } else if (error.message.includes('model') && error.message.includes('not found')) {
      errorMessage += `Model "${model}" not found or not accessible. Try a different model.`;
    } else {
      errorMessage += error.message;
    }

    throw new Error(errorMessage);
  }
});

// Start the server with stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Image Generator MCP server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
