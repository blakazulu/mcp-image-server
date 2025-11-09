# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) server that provides image generation capabilities using HuggingFace models. MCP is a protocol that allows AI assistants to interact with external tools and services.

## Architecture

This MCP server is implemented as an npm package with stdio transport:

- **CLI Entry Point** (`bin/cli.js`): Command-line interface that starts the MCP server
- **MCP Server Implementation**: Uses stdio transport for client communication
- **Image Generation Tool**: Uses HuggingFace Inference API (Stable Diffusion, FLUX.1, etc.)
- **API Token Management**: Accepts token via `--api-key` flag or `HF_TOKEN` env variable
- **Error Handling**: Comprehensive error messages for common failure scenarios
- **Free Tier**: HuggingFace provides free tier access for image generation

## Project Structure

```
mcp-image-generator/
├── bin/
│   └── cli.js               # CLI entry point with stdio transport
├── netlify/
│   └── functions/
│       └── mcp.mjs          # Optional HTTP endpoint (Netlify)
├── public/
│   └── index.html           # Landing page with documentation
├── package.json             # npm package configuration
└── README.md                # User documentation
```

## Development Commands

```bash
npm install                              # Install dependencies
node bin/cli.js --api-key YOUR_API_KEY  # Run locally
```

## Key Considerations

- Primary deployment: npm package via npx for easy installation
- Uses stdio transport for standard MCP communication
- HuggingFace tokens passed via command-line `--api-key` flag or environment variable
- Images are returned as base64-encoded data URIs
- Supports multiple models: Stable Diffusion XL, FLUX.1, SD 2.1, SD 1.5
- Supports negative prompts for better control
- Provides detailed error messages for token issues, rate limits, and quota
- **FREE tier available** with HuggingFace account
- Netlify deployment available as alternative HTTP endpoint

## Installation Command

Users can install this MCP server with:
```bash
claude mcp add image-generator -- npx -y mcp-hf-images --api-key YOUR_HF_TOKEN
```

Get a free token from: https://huggingface.co/settings/tokens
