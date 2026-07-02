# ZyncSpace Website

Marketing site for [ZyncSpace](https://www.zyncspace.com) — Next.js static export, deployed to S3 + CloudFront.

- **Staging:** https://www.zyncspace.in
- **Production:** https://www.zyncspace.com

## Requirements

| Tool | Version | Notes |
|------|---------|--------|
| **Node.js** | `26.4.0` | Pinned in [`.nvmrc`](./.nvmrc); use latest via nvm (see below) |
| **npm** | `>= 10` | Bundled with Node (v11+ on Node 26) |
| **TypeScript** | `^6.0.3` | Declared in `package.json` devDependencies |
| **@types/node** | `^26.0.1` | Node.js type definitions for TypeScript |

GitHub Actions uses the same Node version as [`.nvmrc`](./.nvmrc) via [`.github/actions/node-setup`](./.github/actions/node-setup/action.yml).

## Local setup

### 1. Install Node with nvm

```bash
# Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating

# Install and use the project Node version (from .nvmrc)
nvm install
nvm use

# Optional: make this Node version your default shell
nvm alias default 26.4.0
```

To align with the **latest** Node release:

```bash
nvm install node
nvm use node
# Then copy the version into .nvmrc if you are upgrading the project pin:
node -v   # e.g. v26.4.0
```

### 2. Install dependencies

```bash
npm ci
```

This matches CI (`npm ci` in the node-setup action). Peer dependency resolution uses `legacy-peer-deps=true` in [`.npmrc`](./.npmrc) so TypeScript 6 works with tools such as `madge`.

### 3. Environment variables

```bash
cp .env.example .env.local
```

Set at minimum:

```bash
NEXT_PUBLIC_SITE_URL=https://www.zyncspace.in   # staging
# NEXT_PUBLIC_SITE_URL=https://www.zyncspace.com  # production build
```

### 4. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

## Common commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production static export + SEO files + audit |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run lint` | ESLint + Biome |
| `npm test` | Vitest unit tests |
| `npm run test:e2e` | Playwright E2E (serves `out/` on port 4173) |
| `npm run check:knip` | Dead code scan |
| `npm run check:seo` | SEO audit on built output |

`npm run dev` and `npm run build` run `scripts/check-node.mjs`, which fails if your active Node version does not match `.nvmrc`.

## CI / GitHub Actions

Workflows on push/PR to `main`:

- **CI** (`.github/workflows/ci.yml`) — lint, test, build, E2E, Lighthouse, deploy to S3 on push
- **Security** (`.github/workflows/security.yml`) — Gitleaks, Semgrep, CodeQL
- **Deploy** (`.github/workflows/deploy-to-s3.yml`) — manual S3 redeploy

Node setup in every job:

1. `actions/setup-node` with version from `.nvmrc`
2. `npm ci`

## Project docs

Agent and content guidelines live in [`.ai/`](./.ai/README.md).

## Troubleshooting

**Wrong Node version**

```bash
nvm use
node -v   # must match .nvmrc
```

**`npm ci` fails with peer dependency errors**

Ensure [`.npmrc`](./.npmrc) includes `legacy-peer-deps=true` and run:

```bash
rm -rf node_modules
npm ci
```

**Knip or other scripts fail on an old Node**

Several dev tools require Node 20+. Use the version in `.nvmrc` (currently Node 26).
