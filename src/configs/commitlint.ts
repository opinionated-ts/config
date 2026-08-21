import type { UserConfig } from "@commitlint/types";

import { RuleConfigSeverity } from "@commitlint/types";

const MAX_HEADER_LENGTH = 100;
const MAX_SCOPE_LENGTH = 20;

export const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @ts-expect-error -- Incorrectly typed as CaseRuleConfig; see https://github.com/conventional-changelog/commitlint/issues/4953
    "breaking-change-exclamation-mark": [RuleConfigSeverity.Error, "always"],
    "header-max-length": [RuleConfigSeverity.Error, "always", MAX_HEADER_LENGTH],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-max-length": [RuleConfigSeverity.Error, "always", MAX_SCOPE_LENGTH],
    "subject-case": [RuleConfigSeverity.Error, "always", ["lower-case"]],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
  },
} satisfies UserConfig;
