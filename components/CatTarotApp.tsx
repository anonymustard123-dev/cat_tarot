"use client";

import { useEffect, useMemo, useState } from "react";
import { spreads } from "@/lib/spreads";
import { tarotCards, type TarotCard } from "@/lib/tarot";

type ReadingCard = {
  position: string;
  observedCard: string;
  interpretation: string;
};

type ReadingResult = {
  spreadName: string;
  overallMessage: string;
  cards: ReadingCard[];
  rituals: string[];
  caveat: string;
};

const initialCard = tarotCards[0];

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read the selected image."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load the selected image."));
    image.src = dataUrl;
  });
}

async function compressImage(file: File, maxDimension = 1400, quality = 0.82) {
  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(dataUrl);
  const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("This browser could not prepare the image for upload.");
  }

  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", quality);
}

function CardSigil({ card }: { card: TarotCard }) {
  const initials = card.name
    .split(" ")
    .filter((part) => part !== "of" && part !== "The")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="card-sigil" aria-hidden="true">
      <span className="sigil-moon" />
      <strong>{initials}</strong>
      <span className="sigil-paw" />
    </div>
  );
}

export function CatTarotApp() {
  const [query, setQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCard>(initialCard);
  const [spreadId, setSpreadId] = useState(spreads[1].id);
  const [question, setQuestion] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [isPreparingImage, setIsPreparingImage] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReadingResult | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Installation is optional; the app remains usable if registration fails.
      });
    }
  }, []);

  const selectedSpread = useMemo(
    () => spreads.find((spread) => spread.id === spreadId) ?? spreads[0],
    [spreadId],
  );

  const filteredCards = useMemo(() => {
    const needle = normalize(query);
    if (!needle) {
      return tarotCards;
    }

    return tarotCards.filter((card) => {
      const haystack = normalize(
        `${card.name} ${card.arcana} ${card.keywords.join(" ")} ${card.meaning}`,
      );
      return haystack.includes(needle);
    });
  }, [query]);

  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setError("");
    setResult(null);
    setIsPreparingImage(true);

    try {
      const compressed = await compressImage(file);
      setImageDataUrl(compressed);
      setImageName(file.name);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not prepare image.");
    } finally {
      setIsPreparingImage(false);
    }
  }

  async function handleReadingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);

    if (!imageDataUrl) {
      setError("Upload or capture a spread photo before asking for a reading.");
      return;
    }

    setIsReading(true);
    try {
      const response = await fetch("/api/read-spread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageDataUrl, spreadId, question }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "The spirits declined to answer. Try again.");
      }

      setResult(payload as ReadingResult);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not read the spread.");
    } finally {
      setIsReading(false);
    }
  }

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="app-title">
        <div className="moon" aria-hidden="true" />
        <div className="stars" aria-hidden="true" />
        <p className="eyebrow">Cat Tarot Companion</p>
        <h1 id="app-title">Moonlit readings for curious souls and familiar spirits.</h1>
        <p className="hero-copy">
          Browse all 78 cards, then ask the camera oracle to interpret your spread with a little
          velvet-pawed intuition.
        </p>
      </section>

      <section className="section-grid" aria-label="Cat tarot tools">
        <article className="panel lookup-panel">
          <div className="panel-heading">
            <p className="eyebrow">01 / Grimoire</p>
            <h2>Simple Card Lookup</h2>
            <p>Search by card, suit, arcana, or keyword.</p>
          </div>

          <label className="search-label" htmlFor="card-search">
            Search the deck
          </label>
          <input
            id="card-search"
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Moon, courage, Cups, or The Fool"
            type="search"
          />

          <div className="card-browser" aria-label="Tarot cards">
            {filteredCards.map((card) => (
              <button
                className={card.name === selectedCard.name ? "card-chip active" : "card-chip"}
                key={card.name}
                onClick={() => setSelectedCard(card)}
                type="button"
              >
                <span>{card.name}</span>
                <small>{card.arcana}</small>
              </button>
            ))}
          </div>

          <div className="selected-card">
            <CardSigil card={selectedCard} />
            <div>
              <p className="eyebrow">{selectedCard.arcana}</p>
              <h3>{selectedCard.name}</h3>
              <p className="meaning">{selectedCard.meaning}</p>
              <div className="keywords">
                {selectedCard.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
              <p className="cat-guidance">{selectedCard.catGuidance}</p>
            </div>
          </div>
        </article>

        <article className="panel reading-panel">
          <div className="panel-heading">
            <p className="eyebrow">02 / Camera Oracle</p>
            <h2>Spread Photo Reading</h2>
            <p>Choose a guide spread, photograph the cards, and receive a structured reading.</p>
          </div>

          <form className="reading-form" onSubmit={handleReadingSubmit}>
            <label htmlFor="spread">Spread type</label>
            <select
              id="spread"
              value={spreadId}
              onChange={(event) => {
                setSpreadId(event.target.value);
                setResult(null);
              }}
            >
              {spreads.map((spread) => (
                <option key={spread.id} value={spread.id}>
                  {spread.name} - {spread.nickname}
                </option>
              ))}
            </select>

            <div className="spread-card">
              <h3>{selectedSpread.nickname}</h3>
              <p>{selectedSpread.description}</p>
              <ol>
                {selectedSpread.positions.map((position) => (
                  <li key={position.number}>
                    <strong>
                      {position.number}. {position.title}
                    </strong>
                    <span>{position.meaning}</span>
                  </li>
                ))}
              </ol>
              {selectedSpread.note ? <p className="spread-note">{selectedSpread.note}</p> : null}
            </div>

            <label htmlFor="question">Question, intention, or mood</label>
            <textarea
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What does my familiar need me to notice?"
              rows={3}
            />

            <label className="upload-box" htmlFor="spread-photo">
              <input
                id="spread-photo"
                accept="image/*"
                capture="environment"
                onChange={handleImageChange}
                type="file"
              />
              <span className="upload-icon" aria-hidden="true">
                C
              </span>
              <strong>{imageName || "Upload or capture spread photo"}</strong>
              <small>
                {isPreparingImage
                  ? "Polishing moonlight from the image..."
                  : "Photos are resized in your browser before upload."}
              </small>
            </label>

            {imageDataUrl ? (
              <div
                aria-label="Selected spread photo preview"
                className="image-preview"
                style={{ backgroundImage: `url(${imageDataUrl})` }}
              />
            ) : null}

            <button className="primary-button" disabled={isReading || isPreparingImage} type="submit">
              {isReading ? "Reading the spread..." : "Read My Spread"}
            </button>
          </form>

          {error ? <p className="error-message">{error}</p> : null}

          {result ? (
            <section className="reading-result" aria-live="polite">
              <p className="eyebrow">{result.spreadName}</p>
              <h3>Oracle Message</h3>
              <p>{result.overallMessage}</p>
              <div className="reading-cards">
                {result.cards.map((card) => (
                  <article key={card.position}>
                    <strong>{card.position}</strong>
                    <span>{card.observedCard}</span>
                    <p>{card.interpretation}</p>
                  </article>
                ))}
              </div>
              <div className="rituals">
                <h4>Rituals</h4>
                <ul>
                  {result.rituals.map((ritual) => (
                    <li key={ritual}>{ritual}</li>
                  ))}
                </ul>
              </div>
              <p className="caveat">{result.caveat}</p>
            </section>
          ) : null}
        </article>
      </section>
    </main>
  );
}
