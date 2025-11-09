import {Client} from "@modelcontextprotocol/sdk/client/index.js";
import {StdioClientTransport} from "@modelcontextprotocol/sdk/client/stdio.js";
import fs from "fs";

async function testImageGeneration() {
  // Get token from command line or environment
  const token = process.argv[2] || process.env.HF_TOKEN;

  if (!token) {
    console.error("Error: HuggingFace token required!");
    console.error("Usage: node test-client.mjs YOUR_HF_TOKEN");
    console.error("Or set HF_TOKEN environment variable");
    console.error("\nGet a free token from: https://huggingface.co/settings/tokens");
    process.exit(1);
  }

  console.log("Starting MCP server...");

  // Create MCP client
  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    }
  );

  // Connect to the server
  const transport = new StdioClientTransport({
    command: "node",
    args: ["bin/cli.js", "--api-key", token],
  });

  await client.connect(transport);
  console.log("Connected to MCP server\n");

  try {
    // List available tools
    console.log("Listing available tools...");
    const toolsList = await client.listTools();
    console.log("Available tools:", JSON.stringify(toolsList.tools, null, 2));
    console.log("");

    // Generate an image
    const prompt = "A cute robot cat playing with a ball of yarn in a cozy living room";
    const model = "stabilityai/stable-diffusion-xl-base-1.0";
    console.log(`Generating image with prompt: "${prompt}"`);
    console.log(`Using model: ${model}`);
    console.log("Please wait, this may take a moment...\n");

    const result = await client.callTool({
      name: "generate_image",
      arguments: {
        prompt: prompt,
        model: model
      }
    });

    console.log("Image generation result:");
    console.log(JSON.stringify(result, null, 2));

    // Check if we got image data
    if (result.content && result.content.length > 0) {
      const imageContent = result.content.find(c => c.type === "resource");
      if (imageContent && imageContent.resource) {
        console.log("\n✅ Success! Image generated successfully!");
        console.log("Image URI:", imageContent.resource.uri.substring(0, 100) + "...");
        console.log("MIME Type:", imageContent.resource.mimeType);
        console.log("Description:", imageContent.resource.text);

        // Save the image to a file
        const base64Data = imageContent.resource.uri.split(",")[1];
        const buffer = Buffer.from(base64Data, "base64");
        fs.writeFileSync("generated-image.png", buffer);
        console.log("\n💾 Image saved to: generated-image.png");
      }
    }

  } catch (error) {
    console.error("Error during test:", error.message);
    console.error("Full error:", error);
  } finally {
    await client.close();
    console.log("\nTest complete!");
    process.exit(0);
  }
}

testImageGeneration().catch(console.error);
