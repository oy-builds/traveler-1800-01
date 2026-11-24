import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence for a traveler from 1800, explaining the modern internet
// through things he already knows: the post road, the letter, the library.
// The road joins house to house (not one central office), the libraries
// hold the world's stored knowledge, and the post runs both ways at once.
const sentence =
  "Picture a post road joining every house on earth to every other house and to all the world's libraries, where a letter crosses the sea in the blink of an eye and the answer returns the same way.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, sentence, "utf8");
