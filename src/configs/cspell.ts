import type { CSpellSettings } from "cspell";

export const cspellConfig = {
  dictionaries: [
    "typescript",
    "git",
    "bash",
    "sql",
    "filetypes",
    "node",
    "npm",
    "html",
    "css",
    "json",
    "markdown",
    "softwareTerms",
  ],
  files: ["**/*.{js,ts,jsx,tsx,txt,md}"],
  ignorePaths: ["node_modules", "dist", "coverage", "build"],
  import: ["@cspell/dict-es-es/cspell-ext.json"],
  language: "en,es,es-ES",
  words: ["oxlint", "oxfmt", "tsgolint"],
} satisfies CSpellSettings;
