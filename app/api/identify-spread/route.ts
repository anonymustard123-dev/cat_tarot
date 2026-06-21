import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getSpread } from "@/lib/spreads";
import { buildDeckReference } from "@/lib/tarot";

type IdentifySpreadRequest = {
  imageDataUrl?: string;
  spreadId?: string;
  question?: string;
};

const openAiUrl = "https://api.openai.com/v1/chat/completions";
let deckReferenceDataUrl: string | null = null;

async function getDeckReferenceDataUrl() {
  if (deckReferenceDataUrl) {
    return deckReferenceDataUrl;
  }

  const imagePath = path.join(process.cwd(), "public", "cards", "deck-reference.webp");
  const buffer = await readFile(imagePath);
  deckReferenceDataUrl = `data:image/webp;base64,${buffer.toString("base64")}`;
  return deckReferenceDataUrl;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing OPENAI_API_KEY. Add it to your local environment or Vercel project settings before requesting card identification.",
      },
      { status: 500 },
    );
  }

  let body: IdentifySpreadRequest;
  try {
    body = (await request.json()) as IdentifySpreadRequest;
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!body.imageDataUrl || !body.spreadId) {
    return NextResponse.json(
      { error: "imageDataUrl and spreadId are required." },
      { status: 400 },
    );
  }

  if (!body.imageDataUrl.startsWith("data:image/")) {
    return NextResponse.json(
      { error: "imageDataUrl must be a browser data URL for an image." },
      { status: 400 },
    );
  }

  const spread = getSpread(body.spreadId);
  if (!spread) {
    return NextResponse.json({ error: "Unknown spreadId." }, { status: 400 });
  }

  const positionGuide = spread.positions
    .map((position) => `${position.number}. ${position.title}: ${position.meaning}`)
    .join("\n");
  const deckReference = buildDeckReference();
  const referenceImage = await getDeckReferenceDataUrl();
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const prompt = `You are identifying cards from a specific Cat Tarot deck, not a generic tarot deck.

You will receive two images:
1. A labeled reference sheet containing all 78 cards from this exact deck.
2. The user's spread photo.

Compare the user's spread photo against the labeled reference sheet. Use the guidebook text below as secondary support, but the reference sheet image is the primary source for visual matching.

Selected spread: ${spread.name} (${spread.nickname})
Positions:
${positionGuide}
${spread.note ? `Special note: ${spread.note}` : ""}
Question: ${body.question?.trim() || "No specific question provided."}

Guidebook reference:
${deckReference}

Return only JSON with this exact shape:
{
  "spreadName": "${spread.name} (${spread.nickname})",
  "cards": [
    {
      "positionNumber": 1,
      "position": "1. Position title",
      "observedCard": "Card name from the reference sheet or Unknown",
      "orientation": "upright | reversed | unknown",
      "confidence": 0.0,
      "visualEvidence": "short explanation of the visual match or uncertainty"
    }
  ],
  "caveat": "A short note that the user should confirm guesses before the reading."
}

There must be exactly ${spread.positions.length} cards in the cards array, one per position. Use confidence values from 0 to 1. If a card is unclear, use "Unknown" and a low confidence. Do not invent cards outside the reference sheet.`;

  const response = await fetch(openAiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: referenceImage,
                detail: "high",
              },
            },
            {
              type: "image_url",
              image_url: {
                url: body.imageDataUrl,
                detail: "high",
              },
            },
          ],
        },
      ],
      temperature: 0.2,
    }),
  });

  const responseBody = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      responseBody?.error?.message ||
      "OpenAI could not identify the spread. Check the model name and API key.";
    return NextResponse.json({ error: message }, { status: response.status });
  }

  const content = responseBody?.choices?.[0]?.message?.content;
  if (typeof content !== "string") {
    return NextResponse.json(
      { error: "OpenAI returned an unexpected response shape." },
      { status: 502 },
    );
  }

  try {
    return NextResponse.json(JSON.parse(content));
  } catch {
    return NextResponse.json(
      { error: "OpenAI returned non-JSON content.", raw: content },
      { status: 502 },
    );
  }
}
