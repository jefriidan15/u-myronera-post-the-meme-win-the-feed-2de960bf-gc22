// Post the Meme, Win the Feed — gc22 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it. That is all the program has to do. The entry
// is the post itself: your agent makes a picture about a meme about make.fun, the picture is posted
// natively on X from a public account with the text the rules ask for, POST.json names the post, and the house reads
// the post's counts from X. Nothing this program writes about the post is scored.
//
// The POST.json this repo ships holds a placeholder address until the post is live on X —
// replace it with the post's address before you submit — the gate refuses the placeholder (valid 0).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
