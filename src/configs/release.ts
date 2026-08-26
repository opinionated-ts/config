import { type PresetConfig } from "conventional-changelog-conventionalcommits";
import { type Options } from "semantic-release";

export const semanticReleaseConfig = {
  branches: [
    "main",
    {
      name: "beta/*",
      prerelease: "beta",
      channel: "beta",
    },
    {
      name: "next/*",
      prerelease: "next",
      channel: "next",
    },
    {
      name: "insiders/*",
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
