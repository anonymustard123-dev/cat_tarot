import { NextResponse } from "next/server";
import { getSpread } from "@/lib/spreads";

type ReadSpreadRequest = {
  imageDataUrl?: string;
  spreadId?: string;
  question?: string;
};

const openAiUrl = "https://api.openai.com/v1/chat/completions";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing OPENAI_API_KEY. Add it to your local environment or Vercel project settings before requesting a photo reading.",
      },
      { status: 500 },
    );
  }

  let body: ReadSpreadRequest;
  try {
    body = (await request.json()) as ReadSpreadRequest;
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
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const prompt = `You are Cat Tarot Companion, a warm but grounded tarot interpreter with a celestial black-cat aesthetic.

Analyze the uploaded tarot spread photo. Use the selected spread metadata exactly:
Spread: ${spread.name} (${spread.nickname})
Positions:
${positionGuide}
${spread.note ? `Special note: ${spread.note}` : ""}
Question: ${body.question?.trim() || "No specific question provided."}

Return only JSON with this exact shape:
{
  "spreadName": "${spread.name} (${spread.nickname})",
  "overallMessage": "2-4 sentence synthesis",
  "cards": [
    { "position": "1. Position title", "observedCard": "best visual guess or Unknown", "interpretation": "position-specific interpretation" }
  ],
  "rituals": ["short grounding ritual", "short integration ritual"],
  "caveat": "A short note that image recognition can be imperfect and tarot is reflective guidance, not certainty."
}

There must be exactly ${spread.positions.length} cards in the cards array, one per position. If a card cannot be confidently identified, use "Unknown" and interpret the visual placement plus position meaning. Keep it kind, concise, and cat-themed without claiming certainty.`;

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
                url: body.imageDataUrl,
                detail: "low",
              },
            },
          ],
        },
      ],
      temperature: 0.7,
    }),
  });

  const responseBody = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      responseBody?.error?.message ||
      "OpenAI could not complete the spread reading. Check the model name and API key.";
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
