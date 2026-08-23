# Lefthook

Place this file at the root of your project as `lefthook.yml`.

Extend the packaged config shipped by `@opinionated-ts/config`:

```yaml
extends:
  - ./node_modules/@opinionated-ts/config/lefthook.yml
```

To override or add hooks, keep the `extends` entry and declare your hooks below it:

```yaml
extends:
  - ./node_modules/@opinionated-ts/config/lefthook.yml

pre-commit:
  commands:
    oxfmt_check:
      run: oxfmt --check .
      include:
        - "**/*.ts"
```

Alternatively, if you don't want to use `extends`, you can open `./node_modules/@opinionated-ts/config/lefthook.yml` directly and copy only the hooks or commands you need into your own `lefthook.yml`.

## What's included

The extended config provides default hooks and commands for TypeScript projects:

- Hooks: `pre-commit`, `commit-msg`, `pre-push`
- Commands for formatting (`oxfmt`), linting (`oxlint`), commit linting (`commitlint`), testing (`bun test`), and dependency auditing (`bun audit`)
- Sensible default include/ignore patterns for TypeScript repos

## Override behavior

- A local entry with the same name as a packaged one **replaces** it.
- A local entry with a new name **merges** alongside the inherited ones.

## Exported commands

| Hook         | Command      | Runs                                       |
| ------------ | ------------ | ------------------------------------------ |
| `pre-commit` | `format`     | `bun oxfmt --write {staged_files}`         |
| `pre-commit` | `lint`       | `bun oxlint --fix {staged_files}`          |
| `commit-msg` | `commitlint` | `bunx commitlint --edit {1}`               |
| `pre-push`   | `run-tests`  | `bun test`                                 |
| `pre-push`   | `run-audit`  | `bun audit` (prints `fail_text` on issues) |

Avoid reusing these command names unless you intend to replace the packaged behavior. For example, declaring your own `run-tests` under `pre-push` will replace the packaged one.
