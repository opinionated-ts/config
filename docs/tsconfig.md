# tsconfig

Place this file at the root of your project as `tsconfig.json`.

> [!TIP]
> Built for bundler-first TypeScript projects (Bun/Node, `moduleResolution: "bundler"`, `noEmit: true`) — pairs well with `tsdown` or `Vite`. If your build emits JS directly from `tsc` or targets browsers without a bundler, override `moduleResolution`, `lib`, and `target` accordingly.

Extend the packaged config shipped by `@opinionated-ts/config`:

```json
{
  "extends": "@opinionated-ts/config/tsconfig.json",
  "include": ["src", "tests", "*.config.*"]
}
```

To override or add compiler options, keep the `extends` entry and declare your overrides below it. For example, to tweak `compilerOptions` or include paths:

```json
{
  "extends": "@opinionated-ts/config/tsconfig.json",
  "compilerOptions": {
    // Your custom config
  },
  "include": ["src", "tests", "*.config.*"]
}
```

## What's included

- Sensible `compilerOptions` for modern TypeScript projects
