# Image Generator MCP Server

A Model Context Protocol (MCP) server that generates images from text prompts using Google Imagen.

## Features

- 🎨 Generate images from text descriptions
- 🚀 Easy one-line installation
- 🔑 Secure API key configuration
- ⚡ Hosted on Netlify for reliability
- 🛡️ Detailed error messages
- 🎯 Support for aspect ratios and negative prompts

## Installation

Install the MCP server with a single command:

```bash
claude mcp add image-generator https://image-generator-mcp.netlify.app/mcp
```

## Configuration

### Get Your Google API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Configure it in your MCP settings

The server expects your API key to be passed via the `x-google-api-key` header.

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
- **negativePrompt** (optional): Specify what to avoid in the image
- **aspectRatio** (optional): Choose from 1:1, 16:9, 9:16, 4:3, or 3:4

## Error Handling

The server provides clear error messages for:

- ❌ Invalid API key
- ⚠️ API quota exceeded
- 🛡️ Safety filter violations
- 🔧 General generation errors

## Technology Stack

- **MCP SDK**: [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/sdk)
- **Image Generation**: Google Imagen 3.0
- **Hosting**: Netlify Functions
- **Runtime**: Node.js

## Local Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Netlify
npm run deploy
```

## API Documentation

### Endpoint

```
POST https://image-generator-mcp.netlify.app/mcp
```

### Headers

```
Content-Type: application/json
x-google-api-key: YOUR_GOOGLE_API_KEY
```

### Request Body

```json
{
  "method": "tools/call",
  "params": {
    "name": "generate_image",
    "arguments": {
      "prompt": "A beautiful sunset over mountains",
      "aspectRatio": "16:9"
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
