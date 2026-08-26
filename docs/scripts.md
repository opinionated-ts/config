# Scripts

The reusable configs and workflows expect these `package.json` scripts to exist in the consuming project.

## Required scripts

| Script          | Runs                                | Used by                                     |
| --------------- | ----------------------------------- | ------------------------------------------- |
| `build`         | `tsdown`                            | Local builds and release packaging          |
| `cspell`        | `cspell lint .`                     | `check` and validation workflows            |
| `fmt`           | `oxfmt --check .`                   | `check`, Lefthook, and validation workflows |
| `fmt:fix`       | `oxfmt .`                           | `fix` and local formatting workflows        |
| `lint`          | `oxlint`                            | `check`, Lefthook, and validation workflows |
| `lint:fix`      | `oxlint --fix`                      | `fix` and local linting workflows           |
| `check`         | `bun fmt && bun lint && bun cspell` | Local validation and reusable workflows     |
| `fix`           | `bun fmt:fix && bun lint:fix`       | Local repair workflow                       |
| `hooks:install` | `lefthook install`                  | One-time hook setup                         |

## Why this matters

- The packaged Lefthook config calls `fmt`, `lint`, and `check`-related commands from the consuming repository.
- The reusable GitHub Actions workflows also rely on the same script names for local parity and remote validation.
- If these scripts are missing or renamed, the hooks and workflows will fail even if the shared configs are installed correctly.

## Recommendation

Keep these script names unchanged in the consumer `package.json` and customize the underlying commands only if you know the downstream workflows still match.
