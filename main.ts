import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for "The Word You'd Delete From the Dictionary":
// the one word to erase from the dictionary forever.
// Written exactly as-is: no trailing newline, no extra text.
const WORD = "Deadline";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD);
