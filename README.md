# @opinionated-ts/config

Opinionated, reusable TypeScript tooling configurations focused on performance, code quality, and developer experience.

## Installation

```bash
bun add -D @opinionated-ts/config

# npm install -D @opinionated-ts/config
# pnpm add -D @opinionated-ts/config
# yarn add -D @opinionated-ts/config
```

## Usage

Import the configurations you need:

<!-- prettier-ignore -->
```ts
import {
  commitlintConfig,
  cspellConfig,
  oxfmtConfig,
  oxlintConfig,
} from "@opinionated-ts/config";
```

<!-- prettier-ignore -->
Each configuration can be used directly as a recommended default or customized depending on the configuration system supported by each tool.

See the configuration guides for each tool:

- [Commitlint](./docs/commitlint.md)
- [CSpell](./docs/cspell.md)
- [Oxfmt](./docs/oxfmt.md)
- [Oxlint](./docs/oxlint.md)
- [Lefthook](./docs/lefthook.md)

## Philosophy

This package provides recommended, opinionated configurations designed to reduce project setup time and maintain consistent tooling across TypeScript projects.

The configurations prioritize:

- Performance
- Code quality
- Developer experience
- Modern tooling
