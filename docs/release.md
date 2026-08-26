# Release

Place this file at the root of your project as `release.config.ts`.

## Why this config exists

This package provides a reusable `semantic-release` baseline for projects that need versioning, changelog generation, and GitHub Releases.

It does not publish to npm by default, so it works for both public and private packages. If a project also needs npm publishing add `@semantic-release/npm` only when needed.

## Using the named export

If you want to import the config into your own `release.config.ts`, use the named export from the main package:

```ts
import { type Options } from "semantic-release";

import { semanticReleaseConfig } from "@opinionated-ts/config";

export default {
  ...semanticReleaseConfig,

  plugins: [
    ...semanticReleaseConfig.plugins,

    // your custom plugins here
    // "@semantic-release/npm", // → publish to npm if needed
  ],
} satisfies Options;
```

## Using the shareable config

If you want to use semantic-release's `extends` support, point it at the packaged shareable config:

```ts
import { type Options } from "semantic-release";

import { semanticReleaseConfig } from "@opinionated-ts/config";

export default {
  extends: "@opinionated-ts/config/release",

  plugins: [
    ...semanticReleaseConfig.plugins,

    // your custom plugins here
    // "@semantic-release/npm", // → publish to npm if needed
  ],
} satisfies Options;
```

If you do not need to customize anything, you can re-export it directly:

```ts
export { default } from "@opinionated-ts/config/release";
```

## What's included

- `semantic-release` with `main`, `beta/*`, `next/*`, and `insiders/*` branches
- Conventional Commits-based release analysis and release notes
- GitHub Release publishing

## Notes

- `release.config.ts` is the root entry point expected by `semantic-release`.
- This config is a reusable baseline, not a strict npm publishing recipe. It is useful for public and private packages alike when the goal is controlled versioning and changelog generation.
- `package.json` must include a valid `repository.url` so `semantic-release` can link releases, tags, and changelog metadata to the correct GitHub repository.
- If you want to add or override branches or plugins, spread `semanticReleaseConfig` and customize the fields you need.
