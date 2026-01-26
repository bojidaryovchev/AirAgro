# MCP Configuration Setup

## 📋 To Enable MCPs in VS Code (GitHub Copilot)

### Option 1: VS Code Settings
1. Open VS Code Settings (JSON)
2. Add this configuration:

```json
{
  "github.copilot.chat.codeGeneration.useInstructionFiles": true,
  "mcp.servers": {
    // Copy contents from mcp.json here
  }
}
```

### Option 2: User MCP Config File
Copy `mcp.json` to:
- **macOS/Linux:** `~/.config/mcp/mcp.json`
- **Windows:** `%APPDATA%\mcp\mcp.json`

## 🔑 Required API Keys

Create a `.env.local` file with your keys:

```bash
# Vercel
VERCEL_TOKEN=your_vercel_token_here

# Semgrep
SEMGREP_APP_TOKEN=your_semgrep_token

# Linear
LINEAR_API_KEY=your_linear_api_key

# Exa Search
EXA_API_KEY=your_exa_api_key

# Snyk
SNYK_TOKEN=your_snyk_token

# Render
RENDER_API_KEY=your_render_api_key

# Cloudflare
CLOUDFLARE_API_TOKEN=your_cloudflare_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

## 🚀 Quick Install All MCPs

Run this to pre-install all MCP packages:

```bash
# Install all at once
npx -y @executeautomation/playwright-mcp-server &
npx -y @vercel/mcp-server &
npx -y @semgrep/mcp-server &
npx -y @linear/mcp-server &
npx -y @exa/mcp-server &
npx -y @shadcn/mcp-server &
npx -y @snyk/mcp-server &
npx -y @render/mcp-server &
npx -y chrome-devtools-mcp &
npx -y @cloudflare/mcp-server-r2 &
npx -y @cloudflare/mcp-server-builds &
npx -y @cloudflare/mcp-server-observability &
npx -y @context7/mcp-server &
npx -y @modelcontextprotocol/server-ref
wait
```

## 🔧 MCPs That Don't Need API Keys

These work immediately:
- ✅ **playwright** - Browser automation
- ✅ **shadcn-ui** - Component library
- ✅ **chrome-devtools** - Browser debugging
- ✅ **context7** - Documentation
- ✅ **ref-docs** - Reference docs

## 📖 Getting API Keys

### Vercel
1. Go to https://vercel.com/account/tokens
2. Create new token
3. Copy to `.env.local`

### Cloudflare
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Create token with R2, Workers, and Analytics permissions
3. Get Account ID from dashboard

### Linear
1. Go to https://linear.app/settings/api
2. Create Personal API key

### Exa
1. Go to https://exa.ai
2. Sign up and get API key

### Semgrep
1. Go to https://semgrep.dev/login
2. Get app token from settings

### Snyk
1. Go to https://app.snyk.io/account
2. Generate API token

### Render
1. Go to https://dashboard.render.com/
2. Account Settings → API Keys

## 🔄 Restart Required

After configuration:
1. Save all files
2. Restart VS Code completely
3. MCPs should be available in GitHub Copilot chat

## ✅ Verify MCPs Are Loaded

In Copilot chat, ask:
"What MCPs are currently available?"

The response should list all configured MCPs.
