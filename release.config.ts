import { type Options } from "semantic-release";

import { semanticReleaseConfig } from "./src/configs/semanticReleaseConfig.ts";

export default {
  ...semanticReleaseConfig,

  plugins: [
    ...semanticReleaseConfig.plugins,

    "@semantic-release/npm", // → publish to npm

    [
      "@semantic-release/exec",
      {
        successCmd:
          'if [ "${branch.name}" = "main" ]; then bun scripts/update-major-tag.ts ${nextRelease.version}; fi',
      },
    ],
  ],
} satisfies Options;
