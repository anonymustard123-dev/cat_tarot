export type SpreadPosition = {
  number: number;
  title: string;
  meaning: string;
};

export type Spread = {
  id: string;
  name: string;
  nickname: string;
  description: string;
  positions: SpreadPosition[];
  note?: string;
};

export const spreads: Spread[] = [
  {
    id: "single-card",
    name: "Single Card",
    nickname: "The Moonlit Whisker",
    description: "One card for contemplation.",
    positions: [{ number: 1, title: "Contemplation", meaning: "One card for contemplation." }],
  },
  {
    id: "three-card",
    name: "Three-Card Spread",
    nickname: "The Three Pawsteps",
    description: "A simple timeline for the question.",
    positions: [
      { number: 1, title: "Past", meaning: "Past." },
      { number: 2, title: "Present", meaning: "Present." },
      { number: 3, title: "Future", meaning: "Future." },
    ],
  },
  {
    id: "five-card-paw",
    name: "Five-Card Spread",
    nickname: "The Paw",
    description: "A compact spread for situation, hidden forces, advice, and outcome.",
    positions: [
      { number: 1, title: "Past / Current Situation", meaning: "Past/current situation." },
      { number: 2, title: "Present Situation", meaning: "Present situation." },
      { number: 3, title: "Hidden Influences", meaning: "Hidden influences." },
      { number: 4, title: "Advice / Course of Action", meaning: "Advice/course of action." },
      {
        number: 5,
        title: "Outcome / Consequence / Feeling",
        meaning: "Outcome/consequence/feeling if unchanged.",
      },
    ],
  },
  {
    id: "celtic-cross-loaf",
    name: "Celtic Cross",
    nickname: "The Loaf",
    description: "A ten-card loaf for deep inquiry and likely consequence.",
    positions: [
      { number: 1, title: "Present Situation", meaning: "Present situation." },
      { number: 2, title: "Challenge / Obstacles", meaning: "Challenge/obstacles." },
      { number: 3, title: "Past Influence", meaning: "Past and how it influences present." },
      { number: 4, title: "Future", meaning: "Future." },
      {
        number: 5,
        title: "Intentions / Goals / Best Outcome",
        meaning: "Intentions/goals/best possible outcome.",
      },
      {
        number: 6,
        title: "Hidden Internal Influences",
        meaning: "Hidden internal influences/subconscious feelings.",
      },
      { number: 7, title: "Advice / Course of Action", meaning: "Advice/course of action." },
      { number: 8, title: "Outside Influences", meaning: "Outside influences." },
      { number: 9, title: "Hopes / Fears", meaning: "Hopes/fears." },
      {
        number: 10,
        title: "Outcome / Consequence",
        meaning: "Outcome/consequence if unchanged.",
      },
    ],
  },
  {
    id: "horseshoe-cat-stretch",
    name: "Horseshoe",
    nickname: "The Cat Stretch",
    description: "A seven-card arc for problem, influences, advice, and outcome.",
    positions: [
      { number: 1, title: "Past / Problem", meaning: "Past/problem." },
      { number: 2, title: "Present Overview", meaning: "Present overview." },
      { number: 3, title: "Hidden Influences", meaning: "Hidden influences." },
      { number: 4, title: "Obstacles", meaning: "Obstacles." },
      { number: 5, title: "Outside Influences", meaning: "Outside influences." },
      { number: 6, title: "Solution / Advice", meaning: "Solution/advice." },
      { number: 7, title: "Outcome", meaning: "Outcome." },
    ],
  },
  {
    id: "mandala-belly-rub",
    name: "Mandala",
    nickname: "The Belly Rub",
    description: "A nine-card mandala for self-knowledge, potential, and growth edges.",
    positions: [
      {
        number: 1,
        title: "Current Mindset / Life / Outlook",
        meaning: "Current mindset/life/outlook.",
      },
      { number: 2, title: "Ambitions / Base Desires", meaning: "Ambitions/base desires." },
      { number: 3, title: "Hopes / Dreams / Higher Goals", meaning: "Hopes/dreams/higher goals." },
      {
        number: 4,
        title: "Achievements / Daily Focus",
        meaning: "Achievements/focus of day-to-day existence.",
      },
      {
        number: 5,
        title: "Dependencies / Obsessions / Passions",
        meaning: "Dependencies/obsessions/passions/preoccupations.",
      },
      { number: 6, title: "Strengths", meaning: "Strengths/positive aspects." },
      { number: 7, title: "Faults / Weaknesses", meaning: "Faults/weaknesses to improve." },
      { number: 8, title: "Self-Perception", meaning: "Self-perception." },
      { number: 9, title: "Higher Purpose", meaning: "Higher purpose/deepest desires." },
    ],
    note:
      "Read card 1 with 2/4/6 for present, 3/8/9 for potential, and 5/7 for areas needing work.",
  },
];

export function getSpread(spreadId: string) {
  return spreads.find((spread) => spread.id === spreadId);
}
