import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

import { semanticReleaseConfig } from "../src/configs/semanticReleaseConfig";

const workflowText = readFileSync(
  new URL("../.github/workflows/check-and-release.yml", import.meta.url),
  "utf8",
);
const docsText = readFileSync(new URL("../docs/release.md", import.meta.url), "utf8");

const branches = [
  { name: "main" },
  { name: "master", channel: false },
  { name: "beta", prerelease: "beta", channel: "beta" },
  { name: "canary", prerelease: "canary", channel: "canary" },
  { name: "next", prerelease: "next", channel: "next" },
  { name: "insiders", prerelease: "insiders", channel: "insiders" },
];

for (const branch of branches) {
  test(`should support ${branch.name} in config, workflow, and docs`, () => {
    const configBranch = semanticReleaseConfig.branches.find((candidate) => {
      if (typeof candidate === "string") {
        return candidate === branch.name;
      }

      return candidate.name === branch.name;
    });

    expect(configBranch).toBeDefined();

    if (typeof configBranch === "object" && configBranch !== null) {
      if (branch.prerelease) {
        expect(configBranch).toMatchObject({
          name: branch.name,
          prerelease: branch.prerelease,
          channel: branch.channel,
        });
      } else if (branch.channel === false) {
        expect(configBranch).toMatchObject({
          name: branch.name,
          channel: false,
        });
      }
    }

    expect(workflowText).toContain(`"refs/heads/${branch.name}"`);
    expect(docsText).toContain(branch.name);

    if (branch.prerelease) {
      expect(docsText).toContain(`\`${branch.name}\` branch → \`${branch.channel}\` channel`);
    }
  });
}
