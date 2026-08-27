#!/usr/bin/env bun
import { readFileSync } from "fs";

function fail(msg: string, code = 1) {
  console.error(msg);
  process.exit(code);
}

try {
  const raw = readFileSync("package.json", "utf8");
  const pkg = JSON.parse(raw);
  const scripts = pkg && pkg.scripts;

  if (
    scripts &&
    typeof scripts === "object" &&
    Object.prototype.hasOwnProperty.call(scripts, "build")
  ) {
    console.log("Found 'build' script in package.json");
    process.exit(0);
  } else {
    console.log("No 'build' script found in package.json");
    process.exit(2);
  }
} catch (err) {
  fail(`Error checking package.json: ${String(err)}`);
}
