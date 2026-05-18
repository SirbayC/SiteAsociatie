# SiteAsociatie

Website for **Asociația Prietenii D.A.R.I.E.I.** — live at [https://asociatiaprieteniidariei.ro/](https://asociatiaprieteniidariei.ro/).

- Deployed as a static React app on **GitHub Pages** (custom domain via Cloudflare DNS, RoTLD registrar).
- The frontend lives in `client/`. Use **Yarn 1** for install and scripts (not npm).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- **Yarn 1.22** via Corepack (included with Node):

```bash
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn --version   # should print 1.22.22
```

### First-time setup

From the repo root, in **Git Bash**:

```bash
cd client
rm -f package-lock.json    # use yarn.lock only, not npm
yarn install
```

### Run locally

```bash
cd client
yarn start
```

Open **http://localhost:3000** in your browser.

| Command | Purpose |
|---------|---------|
| `yarn start` | Dev server (hot reload) |
| `yarn build` | Production build → `client/build` |
| `yarn deploy` | Build and publish to GitHub Pages |

## Project layout

| Path | Role |
|------|------|
| `client/` | React SPA (Create React App) |
| `client/src/` | Pages, components, styles |
| `client/public/` | Static assets (PDFs, `index.html`) |
| `helper_scripts/` | Node scripts to generate photo galleries |
