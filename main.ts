import { mkdirSync, writeFileSync } from "node:fs";

// The Worst App Idea Ever Pitched — one sentence, 192 of 240 characters.
// A navigation app whose entire journey ends exactly where it started.
const PITCH =
  "I built HereAgain, a navigation app that guides you through 14 turns and 3.2 km to bring you back to the exact paving stone you're standing on — the journey matters, even when it goes nowhere.";

if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(PITCH);
