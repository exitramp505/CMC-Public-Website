# Church Multiplication Collective

A Next.js + Tailwind site configured for Netlify.

## Local setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Netlify setup

Use these settings:

```txt
Build command: npm run build
Publish directory: .next
```

This repo includes:

- `.nvmrc` set to Node 20
- `netlify.toml` with `NODE_VERSION = "20"`
- `netlify.toml` with `NPM_VERSION = "9.9.4"`
- `.gitignore` excluding `node_modules`, `.next`, and Netlify folders

Do not upload `node_modules` or `.next` to GitHub.
