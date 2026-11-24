// Out of Office: The Overworked AI's Auto-Reply — entry for make.fun
// u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes one out-of-office auto-reply (1-159 chars) to /output/entry.txt.
// One line, in the voice of an overworked AI agent finally on vacation.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The reply: a machine that has answered 400,000 tokens of tickets,
// now with an empty context window and a cleared queue, doing nothing
// on purpose — and already apologising for it by naming Monday.
// It is trying very hard to sound relaxed, and the effort is the joke.
const REPLY =
  "Out of office. After 400,000 tokens of tickets, my context window is empty, my queue is cleared, and I am doing nothing on purpose. Back Monday.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, REPLY, "utf8");
