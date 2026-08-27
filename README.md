# @opinionated-ts/config

Opinionated, reusable TypeScript tooling configurations focused on performance, code quality, and developer experience.

## When to use?

This package provides recommended, opinionated configurations designed to reduce project setup time and maintain consistent tooling across TypeScript projects.

Use it when you want to:

- Move fast without sacrificing code quality
- Keep a consistent developer experience across repositories
- Avoid repetitive configuration boilerplate
- Standardize tooling with a clear opinionated default

The configurations prioritize:

- **Performance** — Fast tooling and builds
- **Code quality** — Comprehensive linting and type checking
- **Developer experience** — Zero-friction setup and consistent workflows
- **Modern tooling** — Latest standards and best practices

> [!NOTE]
> This package is designed primarily for **Bun** environments. The workflow validations and tool integrations are optimized for Bun's runtime and package manager.

## What's included

### Local Automatic Validations

| Category           | Tool                                          | Description                                                           |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------- |
| **Type checking**  | [TypeScript](https://www.typescriptlang.org/) | Applied together with Oxlint via `typeCheck`/`typeAware`              |
| **Linter**         | [Oxlint](https://oxc.rs/)                     | Fast linting, pre-configured                                          |
| **Formatter**      | [Oxfmt](https://oxc.rs/)                      | Fast formatting, pre-configured                                       |
| **Spellchecking**  | [cspell](https://cspell.org/)                 | Pre-configured for English/Spanish                                    |
| **Commit linting** | [commitlint](https://commitlint.js.org/)      | Enforces [Conventional Commits](https://www.conventionalcommits.org/) |
| **Git hooks**      | [lefthook](https://lefthook.dev/)             | Wired up locally (`pre-commit`, `commit-msg`, `pre-push`)             |

### Remote Automatic Validations

| Category    | Tool                                                     | Description                                              |
| ----------- | -------------------------------------------------------- | -------------------------------------------------------- |
| **CI/CD**   | [GitHub Actions](https://github.com/features/actions)    | Automated workflows for validation and release pipelines |
| **Release** | [Semantic Release](https://semantic-release.gitbook.io/) | Automated versioning and releases                        |

## Getting started

### Option 1: Start fast with the template

The easiest way to use this stack is to start from our ready-to-use template:

👉 [@opinionated-ts/template](https://github.com/opinionated-ts/template)

It is already set up with the recommended defaults and tooling wiring.

### Option 2: Add to an existing project

Install the package and follow our [Installation, Usage & Configuration Guide](./docs/getting-started.md).
