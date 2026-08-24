# CSpell

This file should be placed at the root of your project as `cspell.config.ts`:

```ts
import { cspellConfig } from "@opinionated-ts/config";
import { defineConfig } from "cspell";

export default defineConfig({
  ...cspellConfig,

  dictionaries: [
    ...cspellConfig.dictionaries,
    // Add your custom dictionaries here
  ],

  import: [
    ...cspellConfig.import,
    // Add your custom import paths here
  ],

  words: [
    ...cspellConfig.words,
    // Add your custom words here
  ],

  // Add any additional custom configuration here
});
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
