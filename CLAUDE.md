# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) server that provides image generation capabilities. MCP is a protocol that allows AI assistants to interact with external tools and services.

## Architecture

This project will implement an MCP server with the following components:

- **MCP Server Implementation**: Handles protocol communication and tool registration
- **Image Generation Tools**: Provides various image generation and manipulation capabilities
- **Tool Handlers**: Process requests and return generated images or image data

## Development Commands

(To be added as the project develops)

## Key Considerations

- MCP servers communicate via JSON-RPC over stdio
- Tools must be properly registered and conform to the MCP tool specification
- Image data should be handled efficiently (base64 encoding for transmission, proper MIME types)
- Error handling should provide clear feedback when image generation fails
