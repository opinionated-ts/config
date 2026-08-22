# Oxfmt

This file should be placed at the root of your project as `oxfmt.config.ts`:

```ts
import type { OxfmtConfig } from "oxfmt";
import { oxfmtConfig } from "@opinionated-ts/config";

export default {
  ...oxfmtConfig,
  // Your custom configuration
} satisfies OxfmtConfig;
```

You can also export it directly if you do not need to customize it:

```ts
export { oxfmtConfig as default } from "@opinionated-ts/config";
```

The provided configuration enables:

- Tailwind CSS class sorting
- Consistent import ordering
- Type/value import separation
