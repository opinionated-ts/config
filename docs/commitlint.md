# Commitlint

This file should be placed at the root of your project as `commitlint.config.ts`:

```ts
import type { UserConfig } from "@commitlint/types";
import { commitlintConfig } from "@opinionated-ts/config";

export default {
  ...commitlintConfig,
  rules: {
    // @ts-expect-error -- Incorrectly typed as CaseRuleConfig; see https://github.com/conventional-changelog/commitlint/issues/4953
    ...commitlintConfig.rules,

    // Your custom rules
  },
} satisfies UserConfig;
```

You can also export it directly if you do not need to customize it:

```ts
export { commitlintConfig as default } from "@opinionated-ts/config";
```

> [!NOTE]
> The `@ts-expect-error` above is only required because of a current typing issue in `@commitlint/types`. The configuration itself is valid and works as expected. You can safely keep this line until the upstream type definitions are fixed.

The provided configuration includes:

- Conventional commit support through `@commitlint/config-conventional`
- Breaking change validation (requires both `!` and `BREAKING CHANGE` to be present)
- Header length validation
- Scope formatting and length validation
- Subject case validation
- Subject punctuation validation
