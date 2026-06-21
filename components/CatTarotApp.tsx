"use client";

import NextImage from "next/image";
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

type IdentifiedCard = {
  positionNumber: number;
  position: string;
  observedCard: string;
  orientation: "upright" | "reversed" | "unknown";
  confidence: number;
  visualEvidence: string;
};

type IdentifyResult = {
  spreadName: string;
  cards: IdentifiedCard[];
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
    const image = new window.Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load the selected image."));
    image.src = dataUrl;
  });
}

async function compressImage(file: File, maxDimension = 1800, quality = 0.86) {
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

export function CatTarotApp() {
  const [query, setQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCard>(initialCard);
  const [spreadId, setSpreadId] = useState(spreads[1].id);
  const [question, setQuestion] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [isPreparingImage, setIsPreparingImage] = useState(false);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState("");
  const [identificationCaveat, setIdentificationCaveat] = useState("");
  const [identifiedCards, setIdentifiedCards] = useState<IdentifiedCard[]>([]);
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

  const cardByName = useMemo(() => new Map(tarotCards.map((card) => [card.name, card])), []);

  const filteredCards = useMemo(() => {
    const needle = normalize(query);
    if (!needle) {
      return tarotCards;
    }

    return tarotCards.filter((card) => {
      const haystack = normalize(
        `${card.name} ${card.arcana} ${card.keywords.join(" ")} ${card.appearance} ${card.upright} ${card.reversed} ${card.catGuidance}`,
      );
      return haystack.includes(needle);
    });
  }, [query]);

  function resetReadingState() {
    setError("");
    setResult(null);
    setIdentifiedCards([]);
    setIdentificationCaveat("");
  }

  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    resetReadingState();
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

  function updateIdentifiedCard(index: number, patch: Partial<IdentifiedCard>) {
    setIdentifiedCards((current) =>
      current.map((card, cardIndex) => (cardIndex === index ? { ...card, ...patch } : card)),
    );
    setResult(null);
  }

  async function handleIdentifySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetReadingState();

    if (!imageDataUrl) {
      setError("Upload or capture a spread photo before asking for identification.");
      return;
    }

    setIsIdentifying(true);
    try {
      const response = await fetch("/api/identify-spread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageDataUrl, spreadId, question }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "The familiar could not identify the spread. Try again.");
      }

      const identifyResult = payload as IdentifyResult;
      setIdentifiedCards(identifyResult.cards);
      setIdentificationCaveat(identifyResult.caveat);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not identify the spread.");
    } finally {
      setIsIdentifying(false);
    }
  }

  async function handleReadingSubmit() {
    setError("");
    setResult(null);

    if (!imageDataUrl) {
      setError("Upload or capture a spread photo before asking for a reading.");
      return;
    }

    if (!identifiedCards.length) {
      setError("Identify and confirm the cards before generating the reading.");
      return;
    }

    const confirmedCards = identifiedCards.map((card) => ({
      positionNumber: card.positionNumber,
      position: card.position,
      cardName: card.observedCard,
      orientation: card.orientation,
    }));

    setIsReading(true);
    try {
      const response = await fetch("/api/read-spread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageDataUrl, spreadId, question, confirmedCards }),
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
        <div className="peeping-cat" aria-hidden="true" />
        <p className="eyebrow">Cat Tarot Companion</p>
        <h1 id="app-title">
          Seek answers to the past, purr-esent, and future. Tap into feline wisdom and playful
          psychic abilities with your Cat Tarot companion.
        </h1>
        <p className="hero-copy">
          Browse all 78 cards, then ask the camera oracle to compare your spread against the real
          deck artwork before interpreting it.
        </p>
      </section>

      <section className="section-grid" aria-label="Cat tarot tools">
        <article className="panel lookup-panel">
          <div className="panel-heading">
            <p className="eyebrow">01 / Grimoire</p>
            <h2>Simple Card Lookup</h2>
            <p>Search by card, suit, arcana, keyword, guidebook meaning, or visual detail.</p>
          </div>

          <label className="search-label" htmlFor="card-search">
            Search the deck
          </label>
          <input
            id="card-search"
            className="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try meadow, white rose, Cups, or The Fool"
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
                <NextImage
                  alt=""
                  aria-hidden="true"
                  className="card-chip-image"
                  height={120}
                  src={card.image}
                  width={80}
                />
                <span>{card.name}</span>
                <small>{card.arcana}</small>
              </button>
            ))}
          </div>

          <div className="selected-card">
            <div className="deck-card-frame">
              <NextImage
                alt={`${selectedCard.name} card artwork`}
                className="deck-card-image"
                height={640}
                priority
                src={selectedCard.image}
                width={420}
              />
            </div>
            <div>
              <p className="eyebrow">{selectedCard.arcana}</p>
              <h3>{selectedCard.name}</h3>
              <div className="keywords">
                {selectedCard.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
              <div className="manual-card-field">
                <strong>Manual imagery</strong>
                <p>{selectedCard.appearance}</p>
              </div>
              <div className="manual-card-field">
                <strong>Upright reading</strong>
                <p>{selectedCard.upright}</p>
              </div>
              <div className="manual-card-field">
                <strong>Reversed reading</strong>
                <p>{selectedCard.reversed}</p>
              </div>
              <p className="cat-guidance">{selectedCard.catGuidance}</p>
            </div>
          </div>
        </article>

        <article className="panel reading-panel">
          <div className="panel-heading">
            <p className="eyebrow">02 / Camera Oracle</p>
            <h2>Spread Photo Reading</h2>
            <p>
              Identify cards against the real deck artwork, correct any uncertain guesses, then ask
              for the reading.
            </p>
          </div>

          <form className="reading-form" onSubmit={handleIdentifySubmit}>
            <label htmlFor="spread">Spread type</label>
            <select
              id="spread"
              value={spreadId}
              onChange={(event) => {
                setSpreadId(event.target.value);
                resetReadingState();
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
                    <strong>{position.title}</strong>
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
                  : "Photos are resized in your browser before deck comparison."}
              </small>
            </label>

            {imageDataUrl ? (
              <div
                aria-label="Selected spread photo preview"
                className="image-preview"
                style={{ backgroundImage: `url(${imageDataUrl})` }}
              />
            ) : null}

            <button className="primary-button" disabled={isIdentifying || isPreparingImage} type="submit">
              {isIdentifying ? "Comparing with deck art..." : "Identify Cards"}
            </button>
          </form>

          {error ? <p className="error-message">{error}</p> : null}

          {identifiedCards.length ? (
            <section className="identification-panel" aria-live="polite">
              <p className="eyebrow">Deck Match Review</p>
              <h3>Confirm the Cards</h3>
              <p>
                The app compared your photo with a reference sheet of all 78 extracted card images.
                Review each guess before generating the reading.
              </p>
              <div className="identified-card-list">
                {identifiedCards.map((card, index) => {
                  const matchedCard = cardByName.get(card.observedCard);
                  return (
                    <article key={card.positionNumber} className="identified-card">
                      <div className="identified-card-art">
                        {matchedCard ? (
                          <NextImage
                            alt={`${matchedCard.name} card artwork`}
                            height={220}
                            src={matchedCard.image}
                            width={150}
                          />
                        ) : (
                          <span>?</span>
                        )}
                      </div>
                      <div>
                        <strong>{card.position}</strong>
                        <label htmlFor={`card-${card.positionNumber}`}>Card</label>
                        <select
                          id={`card-${card.positionNumber}`}
                          value={card.observedCard}
                          onChange={(event) =>
                            updateIdentifiedCard(index, { observedCard: event.target.value })
                          }
                        >
                          <option value="Unknown">Unknown</option>
                          {tarotCards.map((tarotCard) => (
                            <option key={tarotCard.name} value={tarotCard.name}>
                              {tarotCard.name}
                            </option>
                          ))}
                        </select>
                        <label htmlFor={`orientation-${card.positionNumber}`}>Orientation</label>
                        <select
                          id={`orientation-${card.positionNumber}`}
                          value={card.orientation}
                          onChange={(event) =>
                            updateIdentifiedCard(index, {
                              orientation: event.target.value as IdentifiedCard["orientation"],
                            })
                          }
                        >
                          <option value="upright">Upright</option>
                          <option value="reversed">Reversed</option>
                          <option value="unknown">Unknown</option>
                        </select>
                        <p className="match-confidence">
                          Confidence: {Math.round(Math.max(0, Math.min(1, card.confidence)) * 100)}%
                        </p>
                        <p>{card.visualEvidence}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              {identificationCaveat ? <p className="caveat">{identificationCaveat}</p> : null}
              <button
                className="primary-button"
                disabled={isReading || isIdentifying}
                onClick={handleReadingSubmit}
                type="button"
              >
                {isReading ? "Reading the confirmed spread..." : "Generate Reading From Confirmed Cards"}
              </button>
            </section>
          ) : null}

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
