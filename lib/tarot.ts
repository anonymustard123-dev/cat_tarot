export type TarotCard = {
  name: string;
  arcana: "Major Arcana" | "Cups" | "Pentacles" | "Swords" | "Wands";
  keywords: string[];
  appearance: string;
  upright: string;
  reversed: string;
  catGuidance: string;
};

export const tarotCards: TarotCard[] = [
  {
    "name": "The Fool",
    "arcana": "Major Arcana",
    "keywords": [
      "curiosity",
      "trust",
      "new venture"
    ],
    "appearance": "A curious cat begins the venture with a white rose nearby, emphasizing trust, innocence, and not worrying about other opinions.",
    "upright": "Trailblazing curiosity is favored. Step into the day with trust and do not let looking foolish keep you from discovering what waits ahead.",
    "reversed": "Do not overthink the choice. The guidebook warns that things may be exactly what they look like, and you can make the venture harder by worrying it to pieces.",
    "catGuidance": "Move like a cat investigating an open door: alert, trusting your nose, and unbothered by anyone watching."
  },
  {
    "name": "The Magician",
    "arcana": "Major Arcana",
    "keywords": [
      "invention",
      "skill",
      "transformation"
    ],
    "appearance": "The Magician straddles two worlds with one paw reaching skyward; circular playthings echo the four elements and tarot suits.",
    "upright": "This is everyday invention. You already have the materials for magic or art, and transformation becomes possible when wisdom meets work.",
    "reversed": "The card warns against empty hocus-pocus. Trade showy wishing for practice, discipline, and the hard work that lets the spell actually land.",
    "catGuidance": "Gather every toy, tool, and whisker before you pounce; the magic is in how you use them."
  },
  {
    "name": "The High Priestess",
    "arcana": "Major Arcana",
    "keywords": [
      "mystery",
      "possibility",
      "intuition"
    ],
    "appearance": "Moon, water, and candles frame a fertile world of possibility, darkness and light, secrets and welcome surprise.",
    "upright": "A mysterious visit or inner signal is welcome. Possibility is fertile now, especially when your instincts recognize something good before logic explains it.",
    "reversed": "Plans do not bear fruit unless you carry them out. Wishing is pleasant, but the manual is clear: action is better.",
    "catGuidance": "Listen for the quiet sound at the door, then decide whether to pad toward it."
  },
  {
    "name": "The Empress",
    "arcana": "Major Arcana",
    "keywords": [
      "abundance",
      "peace",
      "nurture"
    ],
    "appearance": "An alpha female rules an empire of peace and plenty, crowned by stars, cushioned by love and luxury, with a toy-like shield at her feet.",
    "upright": "All is abundance. Beauty, comfort, fertility, and care are available when you let yourself receive and tend what is growing.",
    "reversed": "There may be trouble in paradise. Pull your energy back, regroup, and care for yourself before trying to rule the whole room again.",
    "catGuidance": "Make the soft place softer, then decide what deserves your warmth."
  },
  {
    "name": "The Emperor",
    "arcana": "Major Arcana",
    "keywords": [
      "authority",
      "control",
      "flexibility"
    ],
    "appearance": "The Emperor wears authority with the absurd dignity of a cone of shame, proving even constraint can become a crown.",
    "upright": "The card holds absolute authority and serious self-control. Master yourself first, then destiny can follow.",
    "reversed": "Do not become too rigid. Good rulers, like cats, know when to bend, stretch, and change posture without losing command.",
    "catGuidance": "Sit like the boss of the house, but keep enough grace to slip through a half-open door."
  },
  {
    "name": "The Hierophant",
    "arcana": "Major Arcana",
    "keywords": [
      "tradition",
      "rules",
      "chosen path"
    ],
    "appearance": "The wise elder is linked with Odin, prophecy, and the rules that guide companions, while still asking which rules are meant to be clawed.",
    "upright": "This card represents conformity in both useful and limiting forms. Tradition, teaching, and wise rules can help when they are consciously chosen.",
    "reversed": "Choose your own path. House cats are not pack animals, and neither are you when a borrowed rule no longer fits.",
    "catGuidance": "Respect the old route across the counters, then leap where your spirit says leap."
  },
  {
    "name": "The Lovers",
    "arcana": "Major Arcana",
    "keywords": [
      "choice",
      "harmony",
      "devotion"
    ],
    "appearance": "The Lovers bask in perfect sunshine, with the guidebook tying the card to choices: yes or no, stay or go, burning ears or cold feet.",
    "upright": "Love is sunshine, but it can scorch if you stand still too long. Tend the embers and choose with awareness.",
    "reversed": "Affection may cool without being gone. Retreating to the roots can be restorative while you wait to see whether warmth returns.",
    "catGuidance": "Choose the sunbeam that warms you without trapping you there."
  },
  {
    "name": "The Chariot",
    "arcana": "Major Arcana",
    "keywords": [
      "control",
      "freedom",
      "direction"
    ],
    "appearance": "The card centers on the company chair that everyone knows belongs to the cat, with winged upholstery suggesting freedom to move.",
    "upright": "You hold the reins. Sit, stand, turn, and direct the situation from your own seat of control.",
    "reversed": "Move bravely instead of letting the chair steer you. Control returns when you choose a direction and act on it.",
    "catGuidance": "Claim the chair, point your whiskers forward, and drive."
  },
  {
    "name": "Strength",
    "arcana": "Major Arcana",
    "keywords": [
      "inner roar",
      "courage",
      "resilience"
    ],
    "appearance": "The guidebook frames Strength through the cat's roar and the refusal to be defined by a collar.",
    "upright": "No collar is a match for the inner voice. Strength is the successful hunt, the roar, and the will to keep going.",
    "reversed": "Strength may feel forgotten, but it is not gone. Draw on the force you have misplaced and let it come roaring back.",
    "catGuidance": "A velvet paw can still carry a lion's voice."
  },
  {
    "name": "The Hermit",
    "arcana": "Major Arcana",
    "keywords": [
      "watching",
      "solitude",
      "wisdom"
    ],
    "appearance": "The Hermit is an indoor kitty, proving that worldly wisdom can come from watching carefully from a quiet perch.",
    "upright": "Much wisdom can be gained simply by watching. Solitude is useful when it lets you see what noise hides.",
    "reversed": "Do not keep every insight to yourself. A house cat's quiet wisdom still has value when shared at the right moment.",
    "catGuidance": "Perch in the window until the pattern appears, then carry the lesson back inside."
  },
  {
    "name": "Wheel of Fortune",
    "arcana": "Major Arcana",
    "keywords": [
      "cycles",
      "change",
      "opportunity"
    ],
    "appearance": "The Wheel is circular and cyclical, rolling between high and low while mice hint at opportunity and the rat race waits nearby.",
    "upright": "Life turns. Sometimes you are on top and sometimes underneath, but rolling with the punches reveals opportunity.",
    "reversed": "If things spin out of control, sit a turn or two out. Leave the rat race to the rats until balance returns.",
    "catGuidance": "Land on your feet, then decide whether the wheel deserves another chase."
  },
  {
    "name": "Justice",
    "arcana": "Major Arcana",
    "keywords": [
      "karma",
      "fairness",
      "consequence"
    ],
    "appearance": "Justice is tied to cautious Libra, measured action, and the reminder that the hand feeding you can still expect fairness.",
    "upright": "Actions have consequences. Fairness prevails when you play by the rules and accept the bed you make.",
    "reversed": "Karma applies to you too. Reconsider what you are doing before the scales settle against you.",
    "catGuidance": "Place each paw deliberately; the universe notices the scratches and the purrs."
  },
  {
    "name": "The Hanged Man",
    "arcana": "Major Arcana",
    "keywords": [
      "perspective",
      "patience",
      "self-made problem"
    ],
    "appearance": "A cat appears stuck up a tree, dramatic but not doomed, inviting patience and a different angle.",
    "upright": "Your problems may be of your own making, and they may not be true disasters. You climbed up; with patience and perspective, you can climb down.",
    "reversed": "Patience stops being a virtue after a while. Eventually you need to drop from the branch and act.",
    "catGuidance": "Pause long enough to see the room differently, but do not live in the curtains."
  },
  {
    "name": "Death",
    "arcana": "Major Arcana",
    "keywords": [
      "transformation",
      "release",
      "necessary change"
    ],
    "appearance": "The manual treats Death through the comic terror of the vacuum: loud, ominous, transformative, and better faced than avoided.",
    "upright": "Transformation can be scary, but hiding under the furniture does not clean the mess. Let the old debris be cleared.",
    "reversed": "Resistance may be understandable but futile or counterproductive. Get out of the way so change can do its work.",
    "catGuidance": "You may hiss at the vacuum, but the room still needs clearing."
  },
  {
    "name": "Temperance",
    "arcana": "Major Arcana",
    "keywords": [
      "moderation",
      "balance",
      "flow"
    ],
    "appearance": "Water moves in and out of the bowl, showing the satisfaction that comes from measured flow and self-restraint.",
    "upright": "Moderation in all things, even seafood. Go with the flow: not the trickle, not the flood.",
    "reversed": "Something is out of balance or moving too fast. Notice where impulse has replaced patience and restore proportion.",
    "catGuidance": "Lap steadily from the bowl instead of knocking it over."
  },
  {
    "name": "The Devil",
    "arcana": "Major Arcana",
    "keywords": [
      "bondage",
      "pattern",
      "escape"
    ],
    "appearance": "The Devil is a dog whose leash is looser than it looks, all bark and no bite, symbolizing self-destructive instincts.",
    "upright": "You may be leashed to a habit, fear, or destructive pattern, but the restraint is not as fixed as it seems.",
    "reversed": "The leash can be escaped. There is hope, and you can scamper away from what has been training you badly.",
    "catGuidance": "Notice the loose collar, then slip it like only a cat can."
  },
  {
    "name": "The Tower",
    "arcana": "Major Arcana",
    "keywords": [
      "upheaval",
      "shock",
      "rebuilding"
    ],
    "appearance": "Lightning flashes through the window as cats dive from the tower, startled but destined to land on their feet.",
    "upright": "Upheaval throws everything into question. The fall is frightening, but you can land on your feet.",
    "reversed": "Tearing down and rebuilding may be necessary, even if there is no graceful way to do it. Trust the landing.",
    "catGuidance": "Leap from the collapsing shelf and rebuild where the floor is solid."
  },
  {
    "name": "The Star",
    "arcana": "Major Arcana",
    "keywords": [
      "hope",
      "nourishment",
      "renewal"
    ],
    "appearance": "A cat pours water that may nourish the earth or, with typical cat logic, simply matter because it is being poured.",
    "upright": "Hope returns through nourishment, generosity, and quiet renewal. What you pour out can feed what grows next.",
    "reversed": "If the bowl has been knocked aside, gather the water you can. Faith may need redirecting before it can replenish you.",
    "catGuidance": "Follow the starbeam to the bowl and refill it carefully."
  },
  {
    "name": "The Moon",
    "arcana": "Major Arcana",
    "keywords": [
      "night work",
      "confusion",
      "instinct"
    ],
    "appearance": "Night is where cats dream, recharge, and run madly through rooms while little dogs try to distract them.",
    "upright": "Fear, confusion, desire, and instinct wax and wane like the moon. Do your best night work without letting small yapping doubts lead you off course.",
    "reversed": "If no moon shines tonight, remember it will return and the sun is only hours away. Confusion is temporary.",
    "catGuidance": "Use your night vision, not the barking in the distance."
  },
  {
    "name": "The Sun",
    "arcana": "Major Arcana",
    "keywords": [
      "optimism",
      "radiance",
      "creative power"
    ],
    "appearance": "A radiant cat lies on her back beneath the Sun, linked to Leo, creativity, possibility, and power.",
    "upright": "Optimism, surprise, and creative force are rising. Let yourself be seen as the radiant creature you are.",
    "reversed": "Power can wound as easily as warm. Use teeth and claws wisely, and reach out if pride has made you lonely.",
    "catGuidance": "Stretch in the golden patch, but do not scorch the paws that approach you."
  },
  {
    "name": "Judgement",
    "arcana": "Major Arcana",
    "keywords": [
      "reckoning",
      "self-review",
      "awakening"
    ],
    "appearance": "Judgement arrives as the judge, with the guidebook reminding us that we are often our own toughest critics.",
    "upright": "Examine your choices and judgement honestly. The call is not just to be judged, but to wake up to what your decisions have made.",
    "reversed": "Self-criticism can distort the verdict. Look clearly without turning the courtroom into a scratching post.",
    "catGuidance": "Answer the summons with clear eyes, not just a defensive hiss."
  },
  {
    "name": "The World",
    "arcana": "Major Arcana",
    "keywords": [
      "completion",
      "satisfaction",
      "wholeness"
    ],
    "appearance": "A well-fed, satisfied cat sits with four delicious food groups and the fire used to cook them, completing the Major Arcana.",
    "upright": "Completion is here. You are fed, satisfied, purring, and ready to let the wide world spin.",
    "reversed": "A full vessel spills when shortcuts or unfinished business leave gaps. Look closer and fill in what is missing.",
    "catGuidance": "Curl up in the center of the world, then check the bowl for the one thing you skipped."
  },
  {
    "name": "Ace of Wands",
    "arcana": "Wands",
    "keywords": [
      "creative beginning",
      "ambition",
      "fire"
    ],
    "appearance": "The Wands suit is shown through toys and playthings, fire energy, and a rainbow of creative possibilities.",
    "upright": "A fresh swipe at your dreams is available. New motivation, invention, and creative work can begin with full commitment.",
    "reversed": "Ambition may be reaching for too much or becoming impatient. Rethink the plan rather than giving up.",
    "catGuidance": "Chase the bright toy, but do not knock over the whole altar to get it."
  },
  {
    "name": "Two of Wands",
    "arcana": "Wands",
    "keywords": [
      "decision",
      "possibility",
      "focus"
    ],
    "appearance": "The card shows lovely things nearby and asks whether to chase the toy or stay where you are.",
    "upright": "A choice is ready. The world offers possibilities, and this is a good time to decide what you actually want.",
    "reversed": "Fear of concrete decisions delays progress. Turn around, refocus, and stop letting every distraction choose for you.",
    "catGuidance": "Pick a toy, pounce, or let it go; hovering is the only wrong move."
  },
  {
    "name": "Three of Wands",
    "arcana": "Wands",
    "keywords": [
      "horizon",
      "opportunity",
      "outward connection"
    ],
    "appearance": "Inner balance meets outward connection, with the sea and horizon suggesting a new experience ahead.",
    "upright": "Something new is swimming toward you. A brand-new opportunity appears when you widen your perspective.",
    "reversed": "Distractions blur the big picture. Concentration brings the horizon back into view.",
    "catGuidance": "Climb higher on the fence and look past the alley wall."
  },
  {
    "name": "Four of Wands",
    "arcana": "Wands",
    "keywords": [
      "celebration",
      "stability",
      "shared joy"
    ],
    "appearance": "A wide lawn, catnip, and calm abundance make this one of the happiest minor cards in the guidebook.",
    "upright": "Enjoy stability and celebration, especially when pleasure is shared with loved ones.",
    "reversed": "Turning your back may make you miss the fun or feel disconnected. Reforge everyday bonds.",
    "catGuidance": "Roll in the catnip, but invite the clowder to the lawn."
  },
  {
    "name": "Five of Wands",
    "arcana": "Wands",
    "keywords": [
      "competition",
      "conflict",
      "practice"
    ],
    "appearance": "Many paws want the same toys, bringing the guidebook's five Cs: conflict, competition, chaos, commotion, and cooperation.",
    "upright": "Keep your eyes on the prize and be ready for struggle, but do not confuse every game with a war.",
    "reversed": "The reversed meaning is more encouraging: cooperation can end conflict and create mutual solutions.",
    "catGuidance": "Tussle like kittens, not enemies."
  },
  {
    "name": "Six of Wands",
    "arcana": "Wands",
    "keywords": [
      "reward",
      "confidence",
      "yes"
    ],
    "appearance": "The card celebrates wanting something and having everything needed for the swatting; hard work is paying off.",
    "upright": "Your confidence is earned and a win is likely. For many questions, the guidebook says there is a good chance the answer is yes.",
    "reversed": "Do not let reward-seeking turn into pride or carelessness. Recognition still asks for grace.",
    "catGuidance": "Parade with your tail high, then share the hallway."
  },
  {
    "name": "Seven of Wands",
    "arcana": "Wands",
    "keywords": [
      "upper paw",
      "defense",
      "resolve"
    ],
    "appearance": "A cat holds the high precipice with the upper paw, outnumbered but advantaged.",
    "upright": "Stand your ground. You may face adversaries, but your position gives you control.",
    "reversed": "Low confidence, bad luck, or too many burdens may make surrender wise for now. Count losses, lick scratches, and regroup.",
    "catGuidance": "Keep the fence if it matters; hop down if it only proves a point."
  },
  {
    "name": "Eight of Wands",
    "arcana": "Wands",
    "keywords": [
      "speed",
      "change",
      "excitement"
    ],
    "appearance": "A gust of wind, fall leaves, chasing, and jumping create a rush of motion and distraction.",
    "upright": "Life speeds up in an exciting way. Quick changes, travel, or a change of scenery may be near.",
    "reversed": "The adventure may be delayed or put on the back burner. Slow down without judging yourself.",
    "catGuidance": "Bolt through the leaves, but remember which porch is yours."
  },
  {
    "name": "Nine of Wands",
    "arcana": "Wands",
    "keywords": [
      "protection",
      "weariness",
      "territory"
    ],
    "appearance": "A sturdy wall of protection surrounds the cat after hard-won spoils, but exhaustion remains.",
    "upright": "You are safe and close to what you want. Guard your territory, but do not confuse vigilance with fear.",
    "reversed": "Comfort can harden into inflexibility. Try openness before your own wall traps you inside.",
    "catGuidance": "Rest behind the wall, then test the gate."
  },
  {
    "name": "Ten of Wands",
    "arcana": "Wands",
    "keywords": [
      "burden",
      "responsibility",
      "control"
    ],
    "appearance": "The cat has acquired many goodies after the battle, but the home stretch still requires care.",
    "upright": "Do not take on more than your fair share. You have strength, but responsibility must be carried wisely.",
    "reversed": "Let go of control before you get tangled in it. Overload is not proof of devotion.",
    "catGuidance": "Drop a few sticks before the bundle catches your tail."
  },
  {
    "name": "Page of Wands",
    "arcana": "Wands",
    "keywords": [
      "spring energy",
      "adventure",
      "focus"
    ],
    "appearance": "Spring, colorful birds, and youthful fire surround the Page, full of fun and adventure.",
    "upright": "Fresh vitality is here. Choose a line of pursuit and enjoy the adventure without losing focus.",
    "reversed": "Overeager energy can create setbacks, impatience, and restlessness. Do not let every flash of wing distract you.",
    "catGuidance": "Pounce on the bird-shaped idea, but finish the chase."
  },
  {
    "name": "Knight of Wands",
    "arcana": "Wands",
    "keywords": [
      "impulse",
      "passion",
      "follow-through"
    ],
    "appearance": "Colorful ribbons tempt an energetic Knight who always thinks he knows best.",
    "upright": "Passion is strong, but follow-through matters. Shred the toy in front of you before racing to the next.",
    "reversed": "Things may be out of control. Slow down, finish what you started, and do not abandon the game halfway.",
    "catGuidance": "Race if you must, but pick a landing place first."
  },
  {
    "name": "Queen of Wands",
    "arcana": "Wands",
    "keywords": [
      "confidence",
      "Leo",
      "fearlessness"
    ],
    "appearance": "Under Leo's watchful eye, the Queen radiates fire, confidence, independence, and warmth even while sleepy.",
    "upright": "Be fearless, capable, vibrant, and ambitious. Have faith in yourself and stand up for what is right.",
    "reversed": "The Queen reversed refuses to listen and may become aggressive or demanding. Take stock before claiming every warm space.",
    "catGuidance": "Glow like candlelit fur, not a wildfire on the curtains."
  },
  {
    "name": "King of Wands",
    "arcana": "Wands",
    "keywords": [
      "leadership",
      "vision",
      "maturity"
    ],
    "appearance": "Crowns on the curtains mark a born leader, strong, ambitious, experienced, and ready to roar.",
    "upright": "Take control and lead with power that has matured into dependability. You were born to act like the ruler of the jungle.",
    "reversed": "Decisive is good; impulsive and hasty is not. Earn the crown before expecting others to follow.",
    "catGuidance": "Roar from the windowsill, then prove you know the route."
  },
  {
    "name": "Ace of Cups",
    "arcana": "Cups",
    "keywords": [
      "overflow",
      "heart",
      "healing"
    ],
    "appearance": "The Cups suit is represented by bowls, water, relationships, souls, and the flow of emotional life.",
    "upright": "Your bowl spills over. New matters of the heart, healing, and spiritual growth are center stage.",
    "reversed": "Heartbreak, empty feelings, or empty bowls may appear. Look inward and learn what the emptiness is teaching.",
    "catGuidance": "Protect the saucer, but let it fill."
  },
  {
    "name": "Two of Cups",
    "arcana": "Cups",
    "keywords": [
      "union",
      "partnership",
      "harmony"
    ],
    "appearance": "Someone may soon share the water bowl; the card speaks of unions, partnerships, balance, and domestic bliss.",
    "upright": "Connection is favored, from romance to peace-making to renewed partnership. Lap cuddles and purring are in the stars.",
    "reversed": "If something smells like old fish, trust that instinct. Repair is possible, but slowly and cautiously.",
    "catGuidance": "Touch noses where the affection is mutual."
  },
  {
    "name": "Three of Cups",
    "arcana": "Cups",
    "keywords": [
      "celebration",
      "abundance",
      "friendship"
    ],
    "appearance": "Three is the magic number, with drinks spilling over, too many treats, and celebration in abundance.",
    "upright": "Enjoy the good things and the company around them. This is a card of shared pleasure and emotional plenty.",
    "reversed": "Indulgence can cross the line. Reassess where celebration has become avoidance or messy communication.",
    "catGuidance": "Gather the clowder, but keep the bowl upright."
  },
  {
    "name": "Four of Cups",
    "arcana": "Cups",
    "keywords": [
      "boredom",
      "risk",
      "reassessment"
    ],
    "appearance": "The cat wonders what is in each cup, restless and disillusioned by too many options or not enough meaning.",
    "upright": "Love and life can be annoying, but do not miss what is in front of you. Open up and take a risk.",
    "reversed": "More dissatisfaction and ennui signal a need for new tactics. Reassess and reconnect creatively.",
    "catGuidance": "Open one eye before rejecting the offered bowl."
  },
  {
    "name": "Five of Cups",
    "arcana": "Cups",
    "keywords": [
      "loss",
      "empty bowls",
      "healing"
    ],
    "appearance": "Empty bowls dominate the scene, with a bridge in the distance and the possibility of fresh bowls ahead.",
    "upright": "Loss, sorrow, confusion, or disappointment may be near, but not all is lost. Let support help you move forward.",
    "reversed": "Healing is close. Get fresh air, change perspective, pick up the pieces, and begin again.",
    "catGuidance": "Mourn the spilled milk, then notice who is refilling the dish."
  },
  {
    "name": "Six of Cups",
    "arcana": "Cups",
    "keywords": [
      "memory",
      "innocence",
      "inner kitten"
    ],
    "appearance": "Youthful kitten-like innocence, happy childhood memories, old pals, and actual kittens are central to the card.",
    "upright": "Good things from the past are coming up. Reconnect with your inner kitten or enjoy the sweetness of old affection.",
    "reversed": "Do not climb fully inside the old bowl. Let the past warm you without defining you.",
    "catGuidance": "Nap in the old sunbeam, then wake up in the present."
  },
  {
    "name": "Seven of Cups",
    "arcana": "Cups",
    "keywords": [
      "choices",
      "fantasy",
      "instinct"
    ],
    "appearance": "Fish inside bowls invite a deep dive into the soul, asking what is real and what is fantasy.",
    "upright": "Many paths are available. Think carefully, look inside, and trust your sonar-like instincts before choosing.",
    "reversed": "The choice may feel overwhelming, but it is not as bad as imagined. Be honest and stay out of drama.",
    "catGuidance": "Sniff every bowl before deciding which one is dinner."
  },
  {
    "name": "Eight of Cups",
    "arcana": "Cups",
    "keywords": [
      "restlessness",
      "search",
      "meaning"
    ],
    "appearance": "The guidebook asks what you are truly seeking beyond material or physical possessions.",
    "upright": "Restlessness points toward a more meaningful search. Use feeling as motivation and take action.",
    "reversed": "Stop looking through a rose-tinted bowl. You may have outgrown what used to define you.",
    "catGuidance": "Walk away from the empty dish toward what actually feeds you."
  },
  {
    "name": "Nine of Cups",
    "arcana": "Cups",
    "keywords": [
      "wish",
      "contentment",
      "gratitude"
    ],
    "appearance": "Known as the Wish Card, it brings fulfilled hopes, abundance of joy, full bellies, and contentment.",
    "upright": "A dream may come true. Gratitude, love, intimacy, and well-deserved satisfaction are on the horizon.",
    "reversed": "Turn off the faucet and take a hard look at your feelings if enough still does not feel like enough.",
    "catGuidance": "Enjoy the full belly without forgetting why it satisfies."
  },
  {
    "name": "Ten of Cups",
    "arcana": "Cups",
    "keywords": [
      "rainbow",
      "family",
      "home"
    ],
    "appearance": "A rainbow and aligned bowls signal an end to hard times, family happiness, and a protective barrier overhead.",
    "upright": "Think togetherness, not competition. Happiness, family healing, and even thoughts of a better home are favored.",
    "reversed": "Do not let ego or narcissism stand in the way of true happiness. Reconnect emotionally and address problems directly.",
    "catGuidance": "Curl up with the whole household under the rainbow."
  },
  {
    "name": "Page of Cups",
    "arcana": "Cups",
    "keywords": [
      "wisdom",
      "youth",
      "reflection"
    ],
    "appearance": "The Page has owl wisdom, lilies of youth, and time to study his reflection and true feelings.",
    "upright": "A youthful emotional beginning asks you to look into your feelings and start something creative or tender.",
    "reversed": "Immaturity or avoidance can leave you stuck in foolish habits. Pull yourself together and face what you are dodging.",
    "catGuidance": "Peer into the water bowl until your own face teaches you something."
  },
  {
    "name": "Knight of Cups",
    "arcana": "Cups",
    "keywords": [
      "declaration",
      "beliefs",
      "romance"
    ],
    "appearance": "The Knight invites a declaration and a review of beliefs, goals, and the path you are riding toward.",
    "upright": "Look at your beliefs and goals to see whether you are on the right path. Feeling has a quest now.",
    "reversed": "Do not get your head stuck in the flowerpot of fantasy. Imagination is useful only when it can still move.",
    "catGuidance": "Follow the beautiful scent, but make sure it leads somewhere real."
  },
  {
    "name": "Queen of Cups",
    "arcana": "Cups",
    "keywords": [
      "compassion",
      "intuition",
      "self-care"
    ],
    "appearance": "Regal, loving, kind, intuitive, and surrounded by roses, the Queen demands respect and emotional security.",
    "upright": "Compassion and self-care are emphasized. You may symbolize this Queen or need her influence in your life.",
    "reversed": "Emotional insecurity can breed manipulation, jealousy, or drama. Check whether your claws have been out too long.",
    "catGuidance": "Be the warm lap, but not the drained bowl."
  },
  {
    "name": "King of Cups",
    "arcana": "Cups",
    "keywords": [
      "dignity",
      "intimacy",
      "discipline"
    ],
    "appearance": "The King is warm, charming, wise, and mercurial, anchored enough for intimacy and disciplined enough to steer.",
    "upright": "Dignity, structure, and emotional authority are available. Kindness and generosity open the way to deeper vulnerability.",
    "reversed": "A need for control can turn volatile or destructive. Protect yourself from your own shortcomings.",
    "catGuidance": "Rule the tide pool gently, with one paw on the anchor."
  },
  {
    "name": "Ace of Swords",
    "arcana": "Swords",
    "keywords": [
      "clarity",
      "ideas",
      "communication"
    ],
    "appearance": "The Swords suit is sharp as claws, linking mind, heart, choices, ideas, words, and plans.",
    "upright": "Tremendous mental clarity, independence, and power are present. Wield the sword carefully.",
    "reversed": "Chaos, confusion, and panic may come from poor planning or communication. Relax your hackles and breathe.",
    "catGuidance": "Unsheathe one clean claw, not the whole paw."
  },
  {
    "name": "Two of Swords",
    "arcana": "Swords",
    "keywords": [
      "decision",
      "objectivity",
      "blocked view"
    ],
    "appearance": "The card asks you to stretch, broaden your horizons, and see from an objective point of view.",
    "upright": "A difficult decision looms. You must act, but not in haste; gather perspective first.",
    "reversed": "You may be intentionally staying stuck through fear. Perspective is the key to seeing clearly.",
    "catGuidance": "Lift the blindfold with one paw and look around the room."
  },
  {
    "name": "Three of Swords",
    "arcana": "Swords",
    "keywords": [
      "heartache",
      "pain",
      "growth"
    ],
    "appearance": "This card is blunt: emotional pain pierces the heart, and the only way through is to feel it.",
    "upright": "Pain is sometimes necessary for growth. Let the hurt be acknowledged so healing can begin.",
    "reversed": "The tears need release. You cannot heal until the pain has been expressed and cleaned out.",
    "catGuidance": "Let the rain hit your fur, then seek the blanket."
  },
  {
    "name": "Four of Swords",
    "arcana": "Swords",
    "keywords": [
      "rest",
      "recovery",
      "stillness"
    ],
    "appearance": "A sunny spot and hours of snoozing show rest that lets the mind work at deeper levels.",
    "upright": "Conserve energy and recharge. What looks lazy may be exactly the healing your mind needs.",
    "reversed": "Not all downtime is good downtime. If stillness has become fear, focus on slow recovery and self-care.",
    "catGuidance": "Nap with purpose; do not hide forever under the bed."
  },
  {
    "name": "Five of Swords",
    "arcana": "Swords",
    "keywords": [
      "discord",
      "remorse",
      "compromise"
    ],
    "appearance": "A foreground cat and turned backs show progress mixed with discord, arrogance, shame, and visible damage.",
    "upright": "Past transgressions may be obvious. You can move on, but not by pretending the scratches are not there.",
    "reversed": "Letting go and compromising can resolve destruction and conflict. Progress is possible if pride softens.",
    "catGuidance": "Ask whether the shredded cushion was worth the victory."
  },
  {
    "name": "Six of Swords",
    "arcana": "Swords",
    "keywords": [
      "moving on",
      "transition",
      "healing"
    ],
    "appearance": "The card points away from a rough situation toward growth and healing, though surrender may still hurt.",
    "upright": "You may be moving on from difficulty or trying to. The path ahead can improve if you accept transition.",
    "reversed": "Surrender does not mean relax; it means stop fighting the current long enough to reach shore.",
    "catGuidance": "Ride the laundry basket across calmer water."
  },
  {
    "name": "Seven of Swords",
    "arcana": "Swords",
    "keywords": [
      "mischief",
      "deception",
      "accountability"
    ],
    "appearance": "Commonly called The Thief, this card shows mischief and the need to face the music.",
    "upright": "Be alert to deception, including your own. Take a stand and deal with the situation directly.",
    "reversed": "Old habits, doubt, boredom, or lack of follow-through may have trapped your claws. A personal overhaul is possible.",
    "catGuidance": "Steal nothing you cannot answer for when the bell rings."
  },
  {
    "name": "Eight of Swords",
    "arcana": "Swords",
    "keywords": [
      "restriction",
      "perspective",
      "responsibility"
    ],
    "appearance": "A tangled cat clings in fear, distracted by feelings of restriction and isolation.",
    "upright": "You feel trapped, but your perspective may be making it worse. Look inward, take responsibility, and find the path forward.",
    "reversed": "Sweet release is possible. Whatever has bound you can loosen when you face the facts.",
    "catGuidance": "Wiggle one paw free before declaring the whole room impossible."
  },
  {
    "name": "Nine of Swords",
    "arcana": "Swords",
    "keywords": [
      "anxiety",
      "dread",
      "warning"
    ],
    "appearance": "A dark cloud looms, bringing depression, anxiety, sadness, and the warning that claws may be out from fear.",
    "upright": "Dread is heavy, but it may not be as bad as you think. There is light at the end of the tunnel.",
    "reversed": "Release begins when the fear is named. Do not let the nightmare do all the talking.",
    "catGuidance": "Do not let midnight shadows become giant dogs."
  },
  {
    "name": "Ten of Swords",
    "arcana": "Swords",
    "keywords": [
      "lowest point",
      "recovery",
      "through"
    ],
    "appearance": "The cat is stuck with claws deep in, exposed and embarrassed, but the guidebook calls this the lowest point.",
    "upright": "The worst seems to have happened. Make a plan to get down; if you can manage this, you can get through anything.",
    "reversed": "There is no magic cure for fear or darkness, but healing follows pain and the path to safety becomes clearer.",
    "catGuidance": "Climb down one claw at a time."
  },
  {
    "name": "Page of Swords",
    "arcana": "Swords",
    "keywords": [
      "alertness",
      "curiosity",
      "strategy"
    ],
    "appearance": "The Page is jumpy and curious, unable to ignore what may be around the next corner.",
    "upright": "Stay on your toes. A treat or foe may appear, and your curiosity insists you investigate.",
    "reversed": "Trouble may be on the horizon, but do not jump at every movement. Calm down and prepare.",
    "catGuidance": "Perch by the keyhole, but do not panic at every creak."
  },
  {
    "name": "Knight of Swords",
    "arcana": "Swords",
    "keywords": [
      "pounce",
      "urgency",
      "motive"
    ],
    "appearance": "The Knight asks whether you are hunter or hunted, dramatic but ready for intense circumstances.",
    "upright": "If you are the hunter, now is the time to pounce. Go for it, but not without forethought.",
    "reversed": "Rebellion or drama for its own sake weakens the chase. Check motives before racing forward.",
    "catGuidance": "Aim at the right shadow before launching across the room."
  },
  {
    "name": "Queen of Swords",
    "arcana": "Swords",
    "keywords": [
      "discernment",
      "dignity",
      "directness"
    ],
    "appearance": "The Queen sits crowned with sharp mind, dignity, discipline, and graceful authority.",
    "upright": "Think clearly and communicate directly. Her precision protects what matters.",
    "reversed": "Overconfidence can create chaos, and perfectionism can turn aloof or withholding. Rethink the approach.",
    "catGuidance": "Blink once, speak plainly, and keep the claws clean."
  },
  {
    "name": "King of Swords",
    "arcana": "Swords",
    "keywords": [
      "leadership",
      "clarity",
      "discipline"
    ],
    "appearance": "A brave royal leader uses intellect, focus, butterflies of transformation, and clear communication.",
    "upright": "Bring smarts and power to the task wisely. Clear communication is your strongest suit.",
    "reversed": "Control without heart creates dysfunction and can turn critical or cruel. Power must serve a solution.",
    "catGuidance": "Rule from the bookshelf, where you can see the whole room."
  },
  {
    "name": "Ace of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "gift",
      "goal",
      "material start"
    ],
    "appearance": "The Pentacles suit is represented by food and treats, earth, possessions, work, and physical life.",
    "upright": "Good things lie ahead. A fortuitous new beginning can help you get your paws on what you desire.",
    "reversed": "Greed or fixation on one goal may blind you to other pleasures. Do not bite the hand offering a gift.",
    "catGuidance": "Accept the treat, then notice the rest of the feast."
  },
  {
    "name": "Two of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "choice",
      "pressure",
      "adaptation"
    ],
    "appearance": "Changing tides, a green ribbon, and looming decisions surround the card.",
    "upright": "You have choices to make, possibly under pressure. Stay disciplined and avoid being rushed into agreements.",
    "reversed": "Stress and distraction can scatter your balance. This situation is not permanent, but it needs careful pacing.",
    "catGuidance": "Step between bowls slowly until the rhythm returns."
  },
  {
    "name": "Three of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "dedication",
      "craft",
      "reward"
    ],
    "appearance": "A cardboard box and focused effort show rewards proportional to dedication and the path chosen.",
    "upright": "Your work matters. Dedication brings rewards, especially when you stay focused on the craft.",
    "reversed": "Do not become so task-focused that you miss teamwork or broader learning. Expand your knowledge.",
    "catGuidance": "Let other paws help build the box fort."
  },
  {
    "name": "Four of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "security",
      "control",
      "possession"
    ],
    "appearance": "The treats are secure and available, but the guidebook warns against gripping too tightly.",
    "upright": "Things look stable. Keep a paw on what is yours, because you earned it.",
    "reversed": "Control can become a cage and cause missed opportunities. Loosen the grip before the treat loses flavor.",
    "catGuidance": "Guard the toy without hissing at every hand."
  },
  {
    "name": "Five of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "hardship",
      "values",
      "support"
    ],
    "appearance": "The picture is not pretty, evoking stray-cat hardship: trash cans, cold garages, and the emotional wealth of companionship.",
    "upright": "Comfort may feel gone and hardship real. Remember the wealth found in love and companionship.",
    "reversed": "Look up. A clearer view helps you assess values, fears, and relationships that shape your circumstances.",
    "catGuidance": "Cry at the warm window; someone may open it."
  },
  {
    "name": "Six of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "generosity",
      "aid",
      "sharing"
    ],
    "appearance": "A full belly signals abundance and the responsibility to share what has been freely given.",
    "upright": "If you have more treats than others, share. Generosity and aid are central to this card.",
    "reversed": "Good things may slip away through inattention or self-centeredness. The universe gives and takes.",
    "catGuidance": "Share the treats before they roll under the stove."
  },
  {
    "name": "Seven of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "commitment",
      "patience",
      "long-term vision"
    ],
    "appearance": "A clever cat works the treat toy, showing focus, patience, and rewards from sustained effort.",
    "upright": "Your commitment is bringing rewards: gifts, nuzzles, and head-butts from the world around you.",
    "reversed": "Return to the drawing board if vision is unclear. Take action with a stronger long-term plan.",
    "catGuidance": "Keep working the puzzle toy; the treat is moving."
  },
  {
    "name": "Eight of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "diligence",
      "skill",
      "learning"
    ],
    "appearance": "The universe sees the cat's diligence and rewards it with a giant plate of anchovies.",
    "upright": "Skill and careful work are paying off. Enjoy the reward, but keep learning to become even more successful.",
    "reversed": "You may be pursuing the wrong reward. An unsatisfying cycle can end if you change course and recommit.",
    "catGuidance": "Sharpen the same claw until the door opens."
  },
  {
    "name": "Nine of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "security",
      "satisfaction",
      "reward"
    ],
    "appearance": "Peace, satisfaction, and great rewards surround the cat, with comfort and pride close at paw.",
    "upright": "Your diligence means rewards are many. Feel secure and take pride in what you have earned.",
    "reversed": "Ask whether the rewards are truly the ones you dreamed of. Comfort should not replace honest desire.",
    "catGuidance": "Stroll through the garden like every leaf knows your name."
  },
  {
    "name": "Ten of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "legacy",
      "family",
      "fulfillment"
    ],
    "appearance": "An arched doorway suggests connection, love, respect, family dynamics, and long-earned fulfillment.",
    "upright": "Success was not a flash in the pan. Good relationships and generous priorities create lasting contentment.",
    "reversed": "Ego, entitlement, or disagreements over treats can disrupt family dynamics. Reorder priorities before isolation grows.",
    "catGuidance": "Protect the ancestral blanket and share the warm corner."
  },
  {
    "name": "Page of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "planning",
      "study",
      "future"
    ],
    "appearance": "A bright pentacle suncatcher and a visible bowl ahead ask the Page to study the future carefully.",
    "upright": "A good plan and strong start portend success. Look beyond the treat in front of you and set realistic goals.",
    "reversed": "Unwillingness to learn or lack of ambition leads nowhere. Victory is not dropped in your lap.",
    "catGuidance": "Nose the shiny coin, then learn what it weighs."
  },
  {
    "name": "Knight of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "persistence",
      "patience",
      "mastery"
    ],
    "appearance": "The Knight sees the cereal bowl and knows hard work is required before the reward is his.",
    "upright": "You know what you want. Patience and persistence will get you there, even if the route sounds boring.",
    "reversed": "There are no miracles, but diligence works. Keep at it no matter how ordinary the task feels.",
    "catGuidance": "Make the same moonlit patrol until the path is yours."
  },
  {
    "name": "Queen of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "nurture",
      "diligence",
      "resourcefulness"
    ],
    "appearance": "The Queen is nurturing, supportive, strong, loving, creative, and successful because she keeps working the maze.",
    "upright": "Aim for her standards: intelligence, diligence, care, and a practical paws-on approach to the tasks ahead.",
    "reversed": "When reversed, her good traits sour into greed, self-service, and poor follow-through. Reconsider the approach.",
    "catGuidance": "Turn the hearth into a kingdom, then keep tending it."
  },
  {
    "name": "King of Pentacles",
    "arcana": "Pentacles",
    "keywords": [
      "provider",
      "abundance",
      "success"
    ],
    "appearance": "The ultimate provider sits amid giant jars of treats, focused on abundance earned through perseverance.",
    "upright": "You are entitled to finer things when you have worked for them. Make the most of your treats.",
    "reversed": "Domineering, controlling, or possessive behavior destroys long-term success. Abundance needs stewardship.",
    "catGuidance": "Sit on the treasure chest, but do not become the lock."
  }
];

export function buildDeckReference() {
  return tarotCards
    .map(
      (card) =>
        `${card.name}: imagery=${card.appearance}; upright=${card.upright}; reversed=${card.reversed}`,
    )
    .join("\n");
}
