#!/usr/bin/env bun

/**
 * Keeps the floating major tag (for example `v1`) pointing at the latest
 * compatible stable release commit.
 *
 * Semantic release already creates immutable version tags such as `v1.2.3`.
 * This extra step updates the moving major tag so other repositories can
 * reuse the current workflow or release contract through a stable reference
 * like `opinionated-ts/config/.github/workflows/check.yml@v1`.
 */
function run(command: string[], label: string): string {
  const result = Bun.spawnSync(command, {
    stderr: "inherit",
    stdout: "pipe",
  });

  if (result.exitCode !== 0) {
    throw new Error(`${label} failed with exit code ${result.exitCode}`);
  }

  return new TextDecoder().decode(result.stdout).trim();
}

const version = process.argv[2];

if (!version || !/^\d+\.\d+\.\d+(?:[-+].+)?$/.test(version)) {
  console.error("Usage: bun scripts/update-major-tag.ts <version>");
  process.exit(2);
}

const major = version.split(".")[0];
const tag = `v${major}`;
const head = run(["git", "rev-parse", "HEAD"], "git rev-parse HEAD");

console.log(`Updating floating tag ${tag} -> ${head}`);

run(["git", "tag", "-f", tag, head], `git tag -f ${tag}`);
run(["git", "push", "origin", `refs/tags/${tag}`, "--force"], `git push origin ${tag}`);

console.log(`Updated floating tag ${tag}`);
