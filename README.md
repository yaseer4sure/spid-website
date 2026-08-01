# SPiD website

Production website and editorial platform for the Sustainable Participatory Development and Climate Resilience Initiative.

## Requirements

- Node.js 22
- pnpm 11
- A Sanity project and dataset

## Setup

1. Copy `.env.example` to `.env.local` and replace placeholders.
2. Run `pnpm install`.
3. Run `pnpm dev`.

The web application runs at `http://localhost:3000`; Studio runs at `http://localhost:3333`.

## Quality commands

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm sanity:typegen
```

The seed command creates or replaces fixed development records in the configured dataset. It refuses to run against production unless `--allow-production` is passed explicitly.
