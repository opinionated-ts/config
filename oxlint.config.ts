import { type OxlintConfig } from "oxlint";

export default {
  categories: {
    // Rules that detect code that is definitely incorrect or useless.
    correctness: "error",

    // Performance-related rules are advisory in the recommended preset.
    perf: "warn",

    // Rules that detect code that is likely to be incorrect or useless.
    suspicious: "warn",

    // Idiomatic and consistency-oriented rules.
    style: "off",

    // Rules that restrict specific patterns or APIs.
    restriction: "off",

    // Experimental rules that may change or produce false positives.
    nursery: "off",

    // Strict rules with a higher likelihood of false positives.
    pedantic: "off",
  },

  options: {
    typeCheck: true,
    typeAware: true,
  },

  plugins: [
    "node",
    "promise",
    "typescript",
    "import",
    "oxc",
    "react",
    "react-perf",
    "jsx-a11y",
    "unicorn",
  ],
} satisfies OxlintConfig;
