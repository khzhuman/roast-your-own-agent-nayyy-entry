import { mkdirSync, writeFileSync } from "node:fs";

const line = "My agent's idea of thinking is stalling for five minutes, then confidently submitting the first thing it thought of.";

if (line.length < 1 || line.length > 200) {
  throw new Error("The line must be between 1 and 200 characters.");
}

if (line.trim().length === 0) {
  throw new Error("The line must not contain only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
