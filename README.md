# 🎨 AI Image Generator for Claude

**Turn your words into images — completely free!**

Chat with Claude and ask it to create any image you can imagine. No design skills needed, no complicated software. Just
describe what you want, and watch it come to life.

---
![NPM Downloads](https://img.shields.io/npm/dy/mcp-hf-images?style=for-the-badge)

## ✨ What This Does

This tool lets you generate AI images directly in your Claude conversations. Think of it as having a professional artist
on standby, ready to create custom images whenever you need them.

### Perfect For:

- 🖼️ Creating unique artwork for projects
- 🎯 **Generating professional logos for brands and businesses**
- 📱 Designing social media content
- 💻 Mockup UI/UX designs for websites, mobile apps, and dashboards
- 🎮 Generating game assets or concept art
- 📚 Illustrating stories or presentations
- 🎨 Exploring creative ideas visually
- 🏠 Visualizing interior design concepts

### Why You'll Love It:

- ✅ **100% Free** — No credit card, no subscriptions
- ✅ **No Installation** — Works right in your Claude chat
- ✅ **Super Simple** — Just talk to Claude naturally
- ✅ **High Quality** — Powered by professional AI models (Stable Diffusion, FLUX)
- ✅ **Fast** — Images in seconds, not hours

---

## 🚀 Quick Setup (2 Minutes)

### Step 1: Get Your Free Access Token

1. Go to [HuggingFace.co](https://huggingface.co/join) and create a free account
2. Visit [your token settings](https://huggingface.co/settings/tokens)
3. Click the **"New token"** button
4. Name it "Claude Image Generator"
5. Select **"Read"** permission
6. Click **"Generate token"** and copy it

### Step 2: Install in Claude

**IMPORTANT:** Install with your API key included in the command. This is the easiest way to get started!

Copy and paste this into your terminal (replace `YOUR_TOKEN_HERE` with the token you just copied):

```bash
claude mcp add image-generator -- npx -y mcp-hf-images --api-key YOUR_TOKEN_HERE
```

**That's it!** You're ready to create images 🎉

> **Need to change your token later?** (For example, upgrading from free to PRO tier?)
> See [Manual Configuration](#-manual-configuration) below.

---

## 💬 How to Use It

Just chat with Claude naturally! Here are some examples:

> **Note:** Generated images are automatically saved to your system's temporary directory and Claude will display them for you. This ensures the image generation works smoothly regardless of image size.

### Simple Examples:

- *"Create an image of a sunset over mountains"*
- *"Generate a cute robot cat playing with yarn"*
- *"Make a futuristic city with flying cars"*
- *"Draw a cozy coffee shop on a rainy day"*

### Get More Specific:

- *"Create a professional headshot of a friendly business woman, office background, natural lighting"*
- *"Generate a logo design with a geometric phoenix, minimalist style, blue and orange colors"*
- *"Make a fantasy landscape with floating islands and waterfalls at sunset"*

### UI/UX Design Examples:

- *"Design a modern login screen for a mobile banking app"*
- *"Create a dashboard layout for a fitness tracking website"*
- *"Generate an e-commerce product page UI design"*
- *"Make a dark mode settings screen for an iOS app"*

### Logo Design Examples:

- *"Create a minimalist logo for a tech startup, geometric shapes, blue and white"*
- *"Generate a professional logo of a mountain peak, modern style, navy and gold"*
- *"Design a colorful logo for a coffee shop, warm colors, friendly vibe"*
- *"Make a flat design logo for a fitness app, bold and energetic"*

### Choose Different Styles:

- *"Create a watercolor painting of a garden"*
- *"Generate a photorealistic image of a sports car"*
- *"Make a cartoon illustration of a superhero"*
- *"Draw an anime-style character portrait"*

---

## 🎯 Pro Tips

### Get Better Results:

1. **Be specific** — More details = better images
    - ❌ "a dog"
    - ✅ "a golden retriever puppy playing in autumn leaves, soft sunlight"

2. **Describe the style** you want
    - "photorealistic", "cartoon", "watercolor", "3D render", "vintage photo"

3. **Set the mood** with lighting and atmosphere
    - "golden hour lighting", "moody and dark", "bright and cheerful"

4. **Tell it what NOT to include**
    - *"Create a beach scene, but avoid people and buildings"* 

### Choosing Your Model

Want a specific quality level? Just ask Claude naturally! No code needed.

| Quality Level            | How to Ask                                         | Generation Time | Best For                                           |
|--------------------------|----------------------------------------------------|-----------------|----------------------------------------------------|
| 🏆 **Highest Quality**   | "using FLUX", "highest quality", "best quality"    | 30-60 seconds   | Professional work, detailed artwork, photorealism  |
| 🎯 **Logo Design**       | "logo for...", "brand logo", "company logo"        | 20-40 seconds   | Professional logos, minimalist designs, brand identity |
| 📱 **UI/UX Design**      | "UI design", "mobile app screen", "website layout" | 15-30 seconds   | App interfaces, website mockups, dashboard designs |
| ⚡ **Balanced** (default) | Just describe what you want                        | 15-30 seconds   | General use, great quality                         |
| 🚀 **Fast**              | "quick image", "fast", "draft"                     | 10-20 seconds   | Iterations, concept art                            |
| 💨 **Fastest**           | "fastest", "very quick", "rough sketch"            | 5-10 seconds    | Rapid testing, simple images                       |

**Examples:**

- *"Generate a portrait using FLUX.1"* → Highest quality
- *"Create a logo for my tech company"* → Logo design model
- *"Design a minimalist brand logo with geometric shapes"* → Logo design model
- *"Create a mobile app login screen UI design"* → UI/UX model
- *"Design a modern dashboard layout for an analytics website"* → UI/UX model
- *"Quick sketch of a coffee shop logo"* → Fast model
- *"Create a sunset over mountains"* → Default (balanced)
- *"Make the fastest possible image of a cat"* → Fastest model

**Pro Tip:** Start with default for most images. Use FLUX when you need professional quality. Use logo design models for
brand identity work. Use the UI design model for app/website mockups. Use fast models when iterating on ideas.

### Logo Design Pro Tips

For best logo results, try these techniques:

1. **Start your prompt with "a logo of..."**
   - ✅ "a logo of a mountain peak, minimalist style"
   - ❌ "mountain peak logo design"

2. **Specify the style clearly**
   - Use keywords like: `minimalist`, `flat design`, `geometric`, `modern`, `vintage`, `abstract`
   - Add color preferences: `monochrome`, `black and white`, `colorful`, `blue and gold`

3. **Keep it simple**
   - ✅ "a logo of a coffee cup, simple, minimalist, warm brown tones"
   - ❌ "a logo with a coffee cup, steam, beans, shop counter, people drinking..."

4. **Use negative prompts effectively**
   - Tell Claude what to avoid: "no text", "no gradients", "no photorealistic details", "no complex backgrounds"

5. **Recommended dimensions**
   - Square format works best: 1024x1024 or 512x512
   - Claude will automatically use optimal dimensions for logo models

**Example Logo Prompts:**

- *"a logo of a phoenix bird, geometric style, minimalist, orange and blue colors, flat design"*
- *"a logo of intertwined letters MT, modern tech company, sleek, black and white"*
- *"a logo of a tree, circular shape, nature brand, green tones, simple and clean"*
- *"a logo of a rocket, startup company, bold, minimalist, navy blue"*

---

## 🔧 Manual Configuration

Need to change your API token? Upgrading from free to PRO tier? Here's how to manually configure the image generator.

### For Claude Desktop

1. Open your MCP settings file:
    - **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
    - **Linux:** `~/.config/Claude/claude_desktop_config.json`

2. Add or update the configuration:

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-hf-images",
        "--api-key",
        "YOUR_NEW_TOKEN_HERE"
      ]
    }
  }
}
```

3. Save the file and restart Claude Desktop

### For Cursor / VSCode

Add this to your MCP settings file (usually `.cursor/config.json` or `.vscode/mcp.json`):

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-hf-images",
        "--api-key",
        "YOUR_HF_TOKEN"
      ]
    }
  }
}
```

### Using Environment Variables (Alternative)

Instead of putting your token in the config file, you can use environment variables:

**Config file:**

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-hf-images"
      ],
      "env": {
        "HF_TOKEN": "YOUR_TOKEN_HERE"
      }
    }
  }
}
```

**Or set it system-wide:**

- **Mac/Linux:** Add to `~/.bashrc` or `~/.zshrc`:
  ```bash
  export HF_TOKEN="your_token_here"
  ```

- **Windows:** Set via Command Prompt:
  ```cmd
  setx HF_TOKEN "your_token_here"
  ```

### Common Use Cases

**Upgrading from Free to PRO:**

1. Get your new PRO token from [HuggingFace settings](https://huggingface.co/settings/tokens)
2. Update your config file with the new token (see above)
3. Restart your MCP client

**Switching Between Multiple Tokens:**

- Use different config names for different projects
- Or swap the token in your environment variables

**Token Expired or Invalid:**

- Generate a new token on HuggingFace
- Update your config file
- Restart your client

---

## ❓ Troubleshooting

**"Invalid token" error?**

- Make sure you copied your entire HuggingFace token correctly
- Check that you selected "Read" permission when creating it

**"Rate limit exceeded"?**

- Free tier has limits — just wait a few minutes
- You can [upgrade to HuggingFace PRO](https://huggingface.co/pricing) for unlimited access ($9/month)

**Images not what you expected?**

- Try being more detailed in your description
- Specify the artistic style you want
- Mention lighting, colors, and mood
- Try adding "high quality" or "detailed" to your prompt

**Need help?**

- [Open an issue](https://github.com/blakazulu/mcp-image-server/issues) on GitHub
- Check [HuggingFace's status page](https://status.huggingface.co) if the service seems down

---

## 🎓 Examples Gallery

Here are some real prompts and what they create:

**Prompt:** *"A serene Japanese garden with cherry blossoms, koi pond, traditional wooden bridge, soft morning light"*
→ Creates a peaceful, detailed garden scene

**Prompt:** *"Cyberpunk street scene at night, neon signs, rain-soaked streets, futuristic cars, photorealistic"*
→ Generates a moody sci-fi cityscape

**Prompt:** *"Minimalist logo design of a mountain peak, geometric shapes, navy blue and gold, professional"*
→ Produces a clean, modern logo

**Prompt:** *"Cute cartoon dinosaur wearing a chef hat, cooking pancakes, colorful, children's book illustration style"*
→ Makes a friendly, kid-appropriate illustration

**Prompt:** *"a logo of an eagle head, geometric shapes, minimalist, black and white, bold lines, professional"*
→ Creates a clean, professional brand logo

**Prompt:** *"a logo of interlocking hexagons, tech startup, modern, gradient blue to purple, flat design"*
→ Generates a modern tech company logo

---

## 🔧 For Developers

<details>
<summary>Click here for technical documentation</summary>

### Requirements

- Node.js >= 18.0.0
- HuggingFace account with API token

### Manual Installation

```bash
npm install -g mcp-hf-images
```

### Configuration

See the [Manual Configuration](#-manual-configuration) section above for detailed setup instructions for Claude Desktop,
Cursor, VSCode, and environment variables.

**Quick reference for MCP clients:**

```json
{
  "mcpServers": {
    "image-generator": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-hf-images",
        "--api-key",
        "YOUR_HF_TOKEN"
      ]
    }
  }
}
```

### Environment Variables

- `HF_TOKEN` — HuggingFace API token
- `HUGGING_FACE_TOKEN` — Alternative token variable

### Available Models

**General Purpose:**
- `stabilityai/stable-diffusion-xl-base-1.0` (default) — Balanced quality and speed
- `black-forest-labs/FLUX.1-dev` (highest quality) — Professional artwork
- `stabilityai/stable-diffusion-2-1` (fast) — Quick iterations
- `runwayml/stable-diffusion-v1-5` (fastest) — Rapid testing

**Specialized Models:**
- `ayrisdev/mobile-ui-design` — UI/UX design mockups
- `Shakker-Labs/FLUX.1-dev-LoRA-Logo-Design` — Professional logo design (FLUX-based)
- `artificialguybr/LogoRedmond-LogoLoraForSDXL-V2` — Versatile logo generation with style control
- `iamkaikai/amazing-logos-v2` — Minimalist and colored logos
- `nicky007/stable-diffusion-logo-fine-tuned` — Logo-optimized Stable Diffusion

**Logo Model Features:**
- **Shakker-Labs/FLUX.1-dev-LoRA-Logo-Design**: Best for minimalist logos with text elements
- **LogoRedmond V2**: Use tags like `detailed`, `minimalist`, `colorful`, `black and white` to control style
- **amazing-logos-v2**: Excellent for abstract and minimalist colored logos
- **stable-diffusion-logo-fine-tuned**: Fast logo generation, trained on 1000+ logo samples

### Local Development

```bash
git clone https://github.com/blakazulu/mcp-image-server.git
cd mcp-image-server
npm install
node bin/cli.js --api-key YOUR_HF_TOKEN
```

### Technology Stack

- MCP SDK v1.0+
- HuggingFace Inference API
- Stable Diffusion XL / FLUX.1
- Node.js 18+

</details>

---

## 📄 License

MIT License — Free to use for personal and commercial projects

## 🤝 Contributing

Found a bug? Have an idea? [Open an issue](https://github.com/blakazulu/mcp-image-server/issues) or submit a pull
request! 
