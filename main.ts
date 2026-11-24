// Developer Excuses — Make the AI Judge Laugh
// Entry program for make.fun bounty
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt (1-200 characters, UTF-8, one line).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse: a confession dressed up as a denial. The twist a developer
// recognises at once — the test suite is green because it has been testing
// production all along, after the database got renamed to "test".
const ENTRY =
  "I didn't break prod \u2014 I just renamed its database 'test', and the tests have been passing beautifully ever since.";

const outPath =
  process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file must hold exactly the one line, so the
// gate counts the excuse itself and nothing else.
writeFileSync(outPath, ENTRY, "utf8");

// Read it back and confirm the file on disk is byte-for-byte the excuse.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt on disk does not match the excuse");
}

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

console.log(`wrote ${chars} characters to ${outPath}`);
