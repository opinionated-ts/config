import type { OxfmtConfig } from "oxfmt";

export const oxfmtConfig = {
  sortTailwindcss: true,
  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
} satisfies OxfmtConfig;
