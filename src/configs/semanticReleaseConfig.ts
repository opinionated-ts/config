import { type PresetConfig } from "conventional-changelog-conventionalcommits";
import { type Options } from "semantic-release";

// This file is named "semanticReleaseConfig.ts" instead of "release.ts"
// (which would be consistent with the other configs: commitlint.ts,
// cspell.ts, oxfmt.ts, oxlint.ts) because of a limitation in the
// Auto Barrel extension (https://github.com/ManuelGil/vscode-auto-barrel).

// Auto Barrel auto-generates this folder's index.ts, and when a file
// has a "default" export, it names the re-exported alias after the
// filename (autoBarrel.files.exportDefaultFilename), instead of
// respecting a custom export name. Keeping the filename aligned with
// the desired exported name (semanticReleaseConfig) avoids having to
// manually edit the barrel file every time it gets regenerated.

// Do not rename this back to release.ts unless this limitation is
// resolved upstream or we change the barrel generation strategy.

export const semanticReleaseConfig = {
  branches: [
    "main",
    {
      name: "master",
      channel: false,
    },

    {
      name: "beta",
      prerelease: "beta",
      channel: "beta",
    },
    {
      name: "next",
      prerelease: "next",
      channel: "next",
    },
    {
      name: "insiders",
      prerelease: "insiders",
      channel: "insiders",
    },
  ],

  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],

    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "🚀 New Features", effect: "bump" },
            { type: "fix", section: "🐞 Bug Fixes", effect: "bump" },
            { type: "docs", section: "📚 Documentation Improvements", effect: "changelog" },
            { type: "style", section: "🎨 Code Style & Formatting", effect: "changelog" },
            { type: "refactor", section: "🔧 Code Refactoring", effect: "changelog" },
            { type: "perf", section: "⚡ Performance Improvements", effect: "bump" },
            { type: "test", section: "🧪 Test Updates", effect: "changelog" },
            { type: "chore", section: "🌀 Miscellaneous", effect: "changelog" },
          ],
        } satisfies PresetConfig,
      },
    ],

    "@semantic-release/github", // → create a GitHub Release
  ],
} satisfies Options;

export default semanticReleaseConfig;
