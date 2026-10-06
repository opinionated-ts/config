import type { UserConfig } from "@commitlint/types";

import { RuleConfigSeverity } from "@commitlint/types";

const MAX_HEADER_LENGTH = 100;
const MAX_SCOPE_LENGTH = 20;
const MAX_BODY_LINE_LENGTH = 160;

export const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "breaking-change-exclamation-mark": [RuleConfigSeverity.Error, "always"],
    "header-max-length": [RuleConfigSeverity.Error, "always", MAX_HEADER_LENGTH],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-max-length": [RuleConfigSeverity.Error, "always", MAX_SCOPE_LENGTH],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", MAX_BODY_LINE_LENGTH],
  },
} satisfies UserConfig;
