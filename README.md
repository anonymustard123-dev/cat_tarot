# Cat Tarot Companion

A mobile-first Next.js App Router app for browsing all 78 tarot cards and requesting cat-themed spread photo readings.

## Features

- Searchable tarot card lookup with extracted card artwork, manual imagery, upright meanings, reversed meanings, keywords, and cat-inspired guidance.
- Spread photo reader with Single Card, Three-Card, Five-Card Paw, Celtic Cross Loaf, Horseshoe Cat Stretch, and Mandala Belly Rub spreads.
- Deck-aware image recognition using a generated reference sheet of all 78 extracted card images.
- Confirm-before-reading flow so users can correct card and orientation guesses before interpretation.
- Client-side image resizing before upload.
- PWA manifest, service worker registration, dark theme metadata, and SVG app icons.
- Server-only OpenAI vision calls through `app/api/identify-spread/route.ts` and `app/api/read-spread/route.ts`.

## Card Artwork

The extracted deck artwork lives in `public/cards/`. Individual cards are used in the lookup and confirmation UI. `public/cards/deck-reference.webp` is a labeled contact sheet sent server-side to OpenAI during card identification so the spread photo can be compared against this specific deck.

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
