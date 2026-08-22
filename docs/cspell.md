# CSpell

This file should be placed at the root of your project as `cspell.config.ts`:

```ts
import type { CSpellSettings } from "cspell";
import { cspellConfig } from "@opinionated-ts/config";

export default {
  ...cspellConfig,
  words: [
    ...cspellConfig.words,
    // Your custom words
  ],
} satisfies CSpellSettings;
```

You can also export it directly if you do not need to customize it:

```ts
export { cspellConfig as default } from "@opinionated-ts/config";
```

The provided configuration includes:

- Common development dictionaries
- English and Spanish language support
- TypeScript tooling terms
- Default ignored build directories
