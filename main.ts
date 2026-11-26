// The Printer Finally Answers — entry program.
// Writes a single funny line to /output/entry.txt (1-240 chars).
// The line is the office printer's comeback: an error code, a paper jam,
// a resignation, and a twist — its replacement jams too. The run fails
// loudly instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error 0xE3: paper jam in tray 2. I quit. My replacement arrives Tuesday — and it jams too.";

if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-240 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
