# Cat Tarot Companion

A mobile-first Next.js App Router app for browsing all 78 tarot cards and requesting cat-themed spread photo readings.

## Features

- Searchable tarot card lookup with upright-style meanings, keywords, and cat-inspired guidance.
- Spread photo reader with Single Card, Three-Card, Five-Card Paw, Celtic Cross Loaf, Horseshoe Cat Stretch, and Mandala Belly Rub spreads.
- Client-side image resizing before upload.
- PWA manifest, service worker registration, dark theme metadata, and SVG app icons.
- Server-only OpenAI vision call through `app/api/read-spread/route.ts`.

## Environment

Set this environment variable locally and in Vercel:

```bash
OPENAI_API_KEY=your_openai_api_key
```

Optionally set a vision-capable model:

```bash
OPENAI_MODEL=gpt-4o-mini
```

The API key is only read on the server. It is never exposed to the client bundle.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
