# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) server that provides image generation capabilities. MCP is a protocol that allows AI assistants to interact with external tools and services.

## Architecture

This MCP server is implemented as a Netlify Function with the following components:

- **MCP Server Implementation** (`netlify/functions/mcp.mjs`): Handles HTTP-based MCP protocol communication
- **Image Generation Tool**: Uses Google Imagen 3.0 for text-to-image generation
- **API Key Management**: Secure API key handling via HTTP headers
- **Error Handling**: Comprehensive error messages for common failure scenarios

## Project Structure

```
mcp-image-generator/
├── netlify/
│   └── functions/
│       └── mcp.mjs          # Main MCP server function
├── public/
│   └── index.html           # Landing page with documentation
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies and scripts
└── README.md                # User documentation
```

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Run locally with Netlify CLI
npm run deploy       # Deploy to Netlify
```

## Key Considerations

- MCP server uses HTTP transport (not stdio) for Netlify Functions compatibility
- API keys are passed via `x-google-api-key` header for security
- Images are returned as base64-encoded data URIs
- Supports aspect ratio control (1:1, 16:9, 9:16, 4:3, 3:4)
- Provides detailed error messages for API key issues, quota limits, and safety filters

## Installation Command

Users can install this MCP server with:
```bash
claude mcp add image-generator https://image-generator-mcp.netlify.app/mcp
```
