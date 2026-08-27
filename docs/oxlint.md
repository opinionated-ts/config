# Oxlint

This file should be placed at the root of your project as `oxlint.config.ts`:

```ts
import { oxlintConfig } from "@opinionated-ts/config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [oxlintConfig],

  rules: {
    // Your custom rules
  },
});
```

The provided configuration includes:

- Type-aware linting support
- Type checking enabled
- Essential correctness rules enabled as errors
- Performance and suspicious rules enabled as warnings
- A curated set of plugins:
  - TypeScript support
  - Import validation
  - Promise best practices
  - Node.js rules
  - React and JSX accessibility rules
  - React performance rules
  - Oxc-specific rules
  - Unicorn rules

This configuration is intended as a recommended baseline. Additional opinionated rules and presets will be added over time while keeping the focus on performance, code quality, and maintainability.

## Recommended scripts

- Add `lint` and `lint:fix` scripts to `package.json` for convenient invocation. Example:

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```
