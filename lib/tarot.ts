export type TarotCard = {
  name: string;
  arcana: "Major Arcana" | "Cups" | "Pentacles" | "Swords" | "Wands";
  keywords: string[];
  meaning: string;
  catGuidance: string;
};

type CardEntry = [string, string[], string, string];

const majorArcanaEntries: CardEntry[] = [
  ["The Fool", ["beginnings", "trust", "leap"], "A fresh path opens when curiosity outweighs fear.", "Step like a kitten onto the windowsill: alert, playful, and ready to learn."],
  ["The Magician", ["will", "skill", "manifestation"], "Your tools, focus, and intention can shape the moment.", "Gather your whiskers, claws, and charm before making your move."],
  ["The High Priestess", ["intuition", "mystery", "inner knowing"], "Quiet wisdom is asking to be trusted before proof arrives.", "Listen for the soft pawsteps of your instincts in the dark."],
  ["The Empress", ["nurture", "beauty", "abundance"], "Growth comes through care, pleasure, and patient tending.", "Make your life a warm nest and let good things curl up beside you."],
  ["The Emperor", ["structure", "protection", "authority"], "Stable boundaries and clear leadership create safety.", "Hold your territory like a dignified house panther."],
  ["The Hierophant", ["tradition", "teaching", "ritual"], "Guidance may come through shared wisdom, study, or ceremony.", "Honor the old alley routes while choosing which ones still serve you."],
  ["The Lovers", ["choice", "alignment", "bond"], "A meaningful choice asks for honesty between heart and values.", "Choose the lap, path, or person that lets your whole self purr."],
  ["The Chariot", ["drive", "discipline", "victory"], "Progress depends on directing competing forces toward one aim.", "Keep both paws on the moonlit road and chase with purpose."],
  ["Strength", ["courage", "patience", "gentleness"], "True power is calm, compassionate, and steady under pressure.", "A velvet paw can be stronger than an unsheathed claw."],
  ["The Hermit", ["solitude", "search", "guidance"], "Withdraw to hear your own lamp-lit truth more clearly.", "Find a quiet perch and let the night teach you what noise hides."],
  ["Wheel of Fortune", ["cycles", "change", "turning point"], "Circumstances are shifting; meet the turn with adaptability.", "Land on your feet as the cosmic yarn ball rolls."],
  ["Justice", ["truth", "balance", "accountability"], "Fairness requires clear sight, honest weighing, and right action.", "Place each paw carefully and let the scales settle."],
  ["The Hanged Man", ["pause", "surrender", "new view"], "A voluntary pause reveals another way to understand the matter.", "Hang from the curtain only long enough to see the room differently."],
  ["Death", ["ending", "release", "transformation"], "One phase must be shed so a truer life can emerge.", "Let the old collar fall away and prowl into renewal."],
  ["Temperance", ["harmony", "healing", "moderation"], "Blending opposites with patience restores flow.", "Lap slowly from two bowls until the right mixture appears."],
  ["The Devil", ["attachment", "temptation", "shadow"], "A binding habit or fear is ready to be named and loosened.", "Notice the shiny trap before batting it across the floor."],
  ["The Tower", ["upheaval", "revelation", "liberation"], "A sudden truth breaks false structures so freedom can enter.", "Leap clear as the unstable shelf gives way."],
  ["The Star", ["hope", "renewal", "faith"], "Healing light returns after difficulty, inviting trust in the future.", "Follow the starbeam across the carpet and drink from it."],
  ["The Moon", ["dreams", "uncertainty", "illusion"], "Not everything is visible; move gently through ambiguity.", "Let your night vision guide you where daylight cannot."],
  ["The Sun", ["joy", "clarity", "vitality"], "Warmth, success, and honest expression are available now.", "Stretch fully in the golden patch and let yourself be seen."],
  ["Judgement", ["awakening", "reckoning", "calling"], "A deeper call asks you to rise, forgive, and choose anew.", "Answer the midnight summons with a clear meow."],
  ["The World", ["completion", "integration", "wholeness"], "A cycle completes with earned wisdom and expanded belonging.", "Curl into the center of the cosmos: you have crossed the whole room."],
];

const majorArcana: TarotCard[] = majorArcanaEntries.map(([name, keywords, meaning, catGuidance]) => ({
  name,
  arcana: "Major Arcana",
  keywords,
  meaning,
  catGuidance,
}));

const suitMeanings: Record<Exclude<TarotCard["arcana"], "Major Arcana">, string> = {
  Cups: "feelings, relationships, intuition, and the waters of the heart",
  Pentacles: "body, work, home, money, and tangible care",
  Swords: "thought, truth, conflict, decisions, and communication",
  Wands: "energy, creativity, courage, desire, and inspired action",
};

const suitCards: Record<Exclude<TarotCard["arcana"], "Major Arcana">, CardEntry[]> = {
  Cups: [
    ["Ace of Cups", ["new feeling", "compassion", "opening"], "A tender emotional beginning is ready to overflow.", "Offer your heart like a saucer of cream, but keep it sacred."],
    ["Two of Cups", ["connection", "mutuality", "truce"], "A sincere bond strengthens through equal exchange.", "Touch noses only where affection is returned."],
    ["Three of Cups", ["friendship", "celebration", "support"], "Community and joy refill the spirit.", "Gather the clowder and purr loudly together."],
    ["Four of Cups", ["apathy", "reflection", "reconsidering"], "A gift may be missed while attention is turned inward.", "Open one eye before ignoring the bowl being offered."],
    ["Five of Cups", ["grief", "loss", "regret"], "Disappointment is real, but not all nourishment is gone.", "Mourn the spilled milk, then notice the full dish nearby."],
    ["Six of Cups", ["memory", "kindness", "innocence"], "The past offers sweetness, comfort, or a lesson in simplicity.", "Let an old sunbeam warm you without trapping you there."],
    ["Seven of Cups", ["choices", "fantasy", "discernment"], "Many options sparkle, but not all are grounded.", "Sniff every mysterious box before jumping in."],
    ["Eight of Cups", ["departure", "search", "letting go"], "Leaving something familiar may be necessary for soul growth.", "Pad away from the empty bowl toward moonlit water."],
    ["Nine of Cups", ["contentment", "wish", "pleasure"], "Satisfaction comes from receiving and savoring what is enough.", "Claim the velvet cushion and enjoy your well-earned purr."],
    ["Ten of Cups", ["belonging", "harmony", "joy"], "Emotional fulfillment blooms through shared safety and love.", "Curl up with your chosen pride beneath a rainbow moon."],
    ["Page of Cups", ["wonder", "message", "sensitivity"], "A gentle invitation asks you to stay open and imaginative.", "Follow the tiny fish dream swimming through your water bowl."],
    ["Knight of Cups", ["romance", "quest", "idealism"], "Move toward beauty and feeling, while keeping promises realistic.", "Chase the moonbeam, but remember where the door is."],
    ["Queen of Cups", ["empathy", "intuition", "care"], "Compassion deepens when boundaries protect sensitivity.", "Be the soft lap, not the drained saucer."],
    ["King of Cups", ["emotional mastery", "wisdom", "calm"], "Steady feeling and mature compassion can guide others safely.", "Rule the tide pool with a quiet tail and clear eyes."],
  ],
  Pentacles: [
    ["Ace of Pentacles", ["opportunity", "prosperity", "seed"], "A practical beginning can become lasting security.", "Bat the golden coin into a sunny corner and tend it."],
    ["Two of Pentacles", ["balance", "adaptability", "juggling"], "Changing demands require rhythm, flexibility, and prioritizing.", "Step lightly between bowls without spilling either."],
    ["Three of Pentacles", ["craft", "teamwork", "learning"], "Skill grows through collaboration and patient practice.", "Let other paws help build the scratching post."],
    ["Four of Pentacles", ["security", "control", "saving"], "Protection is useful, but clinging too tightly limits flow.", "Guard your favorite toy without hissing at every hand."],
    ["Five of Pentacles", ["hardship", "exclusion", "need"], "Support exists, though pride or pain may obscure the doorway.", "Cry at the warm window; someone may open it."],
    ["Six of Pentacles", ["generosity", "exchange", "aid"], "Giving and receiving find balance through dignity.", "Share the treats, and accept one when it is offered."],
    ["Seven of Pentacles", ["patience", "assessment", "investment"], "Long work needs review before the next effort.", "Wait beside the planted catnip and watch what sprouts."],
    ["Eight of Pentacles", ["practice", "mastery", "dedication"], "Focused repetition turns effort into real ability.", "Sharpen your claws on the same post until sparks appear."],
    ["Nine of Pentacles", ["independence", "comfort", "self-worth"], "Self-sufficiency and refinement are sources of pleasure.", "Stroll through your garden like every leaf knows your name."],
    ["Ten of Pentacles", ["legacy", "family", "stability"], "Lasting support grows from roots, tradition, and shared resources.", "Protect the ancestral blanket for kittens yet to dream there."],
    ["Page of Pentacles", ["study", "planning", "promise"], "A practical lesson or opportunity deserves careful attention.", "Nose the shiny coin and learn its weight."],
    ["Knight of Pentacles", ["reliability", "routine", "persistence"], "Slow consistency will accomplish more than restless speed.", "Make the same moonlit patrol until the path is yours."],
    ["Queen of Pentacles", ["nourishment", "home", "resourcefulness"], "Care becomes magic when it is grounded and embodied.", "Turn the hearth into a kingdom of comfort."],
    ["King of Pentacles", ["abundance", "leadership", "stewardship"], "Material mastery asks you to provide wisely and sustainably.", "Sit heavy on the treasure chest and share from plenty."],
  ],
  Swords: [
    ["Ace of Swords", ["clarity", "truth", "breakthrough"], "A clean insight cuts through confusion.", "Unsheathe one bright claw and slice the tangled yarn."],
    ["Two of Swords", ["stalemate", "choice", "guardedness"], "Avoidance keeps peace temporarily, but a decision waits.", "Stop pretending not to see the closed door."],
    ["Three of Swords", ["heartbreak", "truth", "sorrow"], "Painful honesty can begin the healing process.", "Let the rain touch your fur, then seek warmth."],
    ["Four of Swords", ["rest", "recovery", "stillness"], "Quiet restoration is necessary before the next response.", "Nap in the crypt and let your whiskers reset."],
    ["Five of Swords", ["conflict", "cost", "winning"], "A victory may not be worth the damage it causes.", "Ask whether the hiss was worth the scattered feathers."],
    ["Six of Swords", ["transition", "relief", "moving on"], "A calmer shore appears through gradual mental distance.", "Ride the laundry basket across dark water."],
    ["Seven of Swords", ["strategy", "secrecy", "caution"], "Act with care; motives and methods matter.", "Steal the ribbon only if your conscience can sleep."],
    ["Eight of Swords", ["restriction", "fear", "perspective"], "The cage may be looser than your thoughts suggest.", "Wiggle one paw free and test the gap."],
    ["Nine of Swords", ["anxiety", "nightmare", "worry"], "Fear grows in the dark; bring it into compassionate light.", "Do not let midnight shadows become giant dogs."],
    ["Ten of Swords", ["ending", "exhaustion", "release"], "A difficult mental cycle is complete; stop reopening it.", "Climb out from under the fallen broom and rest."],
    ["Page of Swords", ["curiosity", "watchfulness", "message"], "Questions, study, and alertness reveal important details.", "Perch by the keyhole and listen with bright ears."],
    ["Knight of Swords", ["speed", "assertion", "urgency"], "Swift action can help, but impatience may cut too sharply.", "Pounce only after aiming at the right shadow."],
    ["Queen of Swords", ["discernment", "boundaries", "truth"], "Clear perception and direct speech protect what matters.", "Blink once, speak plainly, and keep your claws clean."],
    ["King of Swords", ["logic", "authority", "ethics"], "Wise judgment requires principle, evidence, and fairness.", "Rule from the bookshelf where the whole room is visible."],
  ],
  Wands: [
    ["Ace of Wands", ["spark", "inspiration", "potential"], "Creative fire arrives as an invitation to begin.", "Chase the first ember before it hides beneath the rug."],
    ["Two of Wands", ["planning", "vision", "threshold"], "A larger world calls for intention and courage.", "Look past the windowsill and map the rooftops."],
    ["Three of Wands", ["expansion", "foresight", "progress"], "Plans are moving outward; watch for returning signs.", "Send your wish across the alley and wait for the echo."],
    ["Four of Wands", ["homecoming", "celebration", "stability"], "A milestone deserves joy, welcome, and gratitude.", "Arch your tail beneath the garlanded doorway."],
    ["Five of Wands", ["competition", "friction", "practice"], "Creative tension can strengthen skill if kept playful.", "Tumble with the kittens without turning play into claws."],
    ["Six of Wands", ["recognition", "success", "confidence"], "Effort is seen and victory can be celebrated.", "Parade down the hallway with your tail like a banner."],
    ["Seven of Wands", ["defense", "resolve", "standpoint"], "Hold your ground where your position is worth protecting.", "Stay atop the fence and yowl your boundary."],
    ["Eight of Wands", ["movement", "news", "momentum"], "Events accelerate; respond quickly and clearly.", "Bolt through the open door before it swings shut."],
    ["Nine of Wands", ["resilience", "vigilance", "endurance"], "You are tired but wiser; protect your progress.", "Lick the battle nick and keep watch from the moon gate."],
    ["Ten of Wands", ["burden", "responsibility", "overload"], "Too much weight asks to be delegated or released.", "Drop half the sticks before the bundle pins your tail."],
    ["Page of Wands", ["enthusiasm", "discovery", "message"], "A lively impulse points toward adventure and self-expression.", "Pounce on the strange feather and learn its magic."],
    ["Knight of Wands", ["adventure", "passion", "impulse"], "Bold motion brings excitement, but direction keeps it useful.", "Race across the roof, but know which chimney is home."],
    ["Queen of Wands", ["confidence", "warmth", "magnetism"], "Radiant courage draws support and makes life bloom.", "Glow like a black cat before a golden candle."],
    ["King of Wands", ["vision", "leadership", "enterprise"], "Lead through bold vision, integrity, and creative command.", "Summon the alley with one look and one blazing paw."],
  ],
};

export const tarotCards: TarotCard[] = [
  ...majorArcana,
  ...Object.entries(suitCards).flatMap(([arcana, cards]) =>
    cards.map(([name, keywords, meaning, catGuidance]) => ({
      name,
      arcana: arcana as TarotCard["arcana"],
      keywords,
      meaning: `${meaning} This card speaks to ${suitMeanings[arcana as keyof typeof suitMeanings]}.`,
      catGuidance,
    })),
  ),
];
