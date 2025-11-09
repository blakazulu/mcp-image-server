# Image Generator MCP Server

A Model Context Protocol (MCP) server that generates images from text prompts using HuggingFace models (Stable Diffusion, FLUX, and more).

## Features

- 🎨 Generate images from text descriptions
- 🚀 Simple one-line installation via npx
- 🆓 **FREE tier available** with HuggingFace
- 🔑 Easy API token configuration
- 🛡️ Detailed error messages
- 🎯 Multiple models: Stable Diffusion XL, FLUX.1, and more
- ⚡ Support for negative prompts

## Installation

### Quick Start

Install the MCP server with a single command:

```bash
claude mcp add image-generator -- npx -y mcp-image-generator --api-key YOUR_HF_TOKEN
```

Replace `YOUR_HF_TOKEN` with your HuggingFace token.

### Get Your HuggingFace Token (FREE!)

1. Visit [HuggingFace Token Settings](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "MCP Image Generator")
4. Select "Read" access
5. Click "Generate token"
6. Copy your token and use it in the installation command above

### Manual Configuration

If you prefer to configure later or use environment variables:

```bash
claude mcp add image-generator -- npx -y mcp-image-generator
```

Then set the `HF_TOKEN` environment variable in your MCP configuration.

## Usage

Once installed, you can use natural language prompts in Claude to generate images:

### Example Prompts

- "Generate an image of a sunset over mountains"
- "Create an image of a futuristic city with flying cars"
- "Make an image of a cute robot playing with a cat in a garden"
- "Generate a portrait of a wise old wizard with a long beard"

### Advanced Options

The `generate_image` tool supports:

- **prompt** (required): The text description of your desired image
- **model** (optional): Choose from:
  - `stabilityai/stable-diffusion-xl-base-1.0` (default, best quality)
  - `black-forest-labs/FLUX.1-dev` (state-of-the-art)
  - `stabilityai/stable-diffusion-2-1`
  - `runwayml/stable-diffusion-v1-5`
- **negativePrompt** (optional): Specify what to avoid in the image

### Example with Model Selection

"Generate an image of a sunset over mountains using FLUX.1"

## Available Models

| Model | Description | Best For |
|-------|-------------|----------|
| **Stable Diffusion XL** | High-quality, reliable | General purpose (default) |
| **FLUX.1-dev** | State-of-the-art quality | Best results, slower |
| **Stable Diffusion 2.1** | Fast, good quality | Quick generations |
| **Stable Diffusion 1.5** | Fastest, lighter | Speed over quality |

## Error Handling

The server provides clear error messages for:

- ❌ Invalid HuggingFace token
- ⚠️ Rate limit exceeded
- 💳 Free tier quota exceeded
- 🔧 Model not found or accessible
- 🛡️ General generation errors

## Technology Stack

- **MCP SDK**: [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/sdk)
- **Image Generation**: HuggingFace Inference API
- **Models**: Stable Diffusion XL, FLUX.1, and more
- **Transport**: stdio (standard input/output)
- **Runtime**: Node.js 18+

## Requirements

- Node.js >= 18.0.0
- HuggingFace account (FREE!) with API token

## Local Development

```bash
# Clone the repository
git clone https://github.com/blakazulu/mcp-image-server.git
cd mcp-image-server

# Install dependencies
npm install

# Run the server locally
node bin/cli.js --api-key YOUR_HF_TOKEN
```

## Configuration Options

The server accepts the following configuration:

- `--api-key YOUR_TOKEN`: Provide your HuggingFace token via command line
- `HF_TOKEN` environment variable: Alternative way to set your token
- `HUGGING_FACE_TOKEN` environment variable: Also supported

### Example MCP Configuration

For other MCP clients (Cursor, VSCode, etc.), you can configure manually:

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": ["-y", "mcp-image-generator", "--api-key", "YOUR_HF_TOKEN"]
    }
  }
}
```

### With Environment Variable

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": ["-y", "mcp-image-generator"],
      "env": {
        "HF_TOKEN": "YOUR_HF_TOKEN"
      }
    }
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/blakazulu/mcp-image-server). 
