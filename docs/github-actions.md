# GitHub Actions

Place this file at the root of your project as `.github/workflows/check-and-release.yml`.

Use the reusable workflows shipped by `@opinionated-ts/config`:

```yaml
name: Check and Release

on:
  pull_request:
  push:

concurrency:
  group: ci-${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  check:
    uses: opinionated-ts/config/.github/workflows/check.yml@v1
    with:
      is_pull_request: ${{ github.event_name == 'pull_request' }}
      base_sha: ${{ github.event.pull_request.base.sha }}
      head_sha: ${{ github.event.pull_request.head.sha }}

  release:
    needs: check
    if: >-
      github.event_name == 'push' &&
      contains(fromJSON('["refs/heads/main", "refs/heads/master", "refs/heads/beta"]'), github.ref)
    uses: opinionated-ts/config/.github/workflows/release.yml@v1
    permissions:
      contents: write
      issues: write
      pull-requests: write
      id-token: write
    secrets: inherit
```

If you only want the checks or only the release flow, you can call the reusable workflows directly from your own workflow file:

```yaml
jobs:
  check:
    uses: opinionated-ts/config/.github/workflows/check.yml@v1
```

## What's included

The reusable workflows provide default automation for TypeScript repositories:

- A `check` workflow that runs formatting, linting, tests, and commit message validation
- A `release` workflow that builds the package and publishes with semantic-release
