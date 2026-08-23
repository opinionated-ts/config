/**
 * Semantic Release configuration.
 *
 * To enable Semantic Release, remove the `.example` extension from:
 * `.github/workflows/release.yml.example`
 *
 * npm publishing uses Trusted Publishing with GitHub Actions (OIDC).
 * Before enabling this workflow, configure the repository and package
 * in npm as described in the official documentation:
 *
 * https://docs.npmjs.com/trusted-publishers
 *
 * The Release workflow requires `id-token: write` permission to obtain
 * the OIDC token used by npm Trusted Publishing.
 */

/** @type {import('semantic-release').GlobalConfig} */
// oxlint-disable-next-line import/no-default-export
export default {
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
      channel: "beta",
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
        },
      },
    ],

    // Comment out the plugins you do not want to publish to.
    "@semantic-release/npm", // → publish to npm
    "@semantic-release/github", // → create a GitHub Release
  ],
};
