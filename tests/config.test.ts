import { it, test } from "bun:test";

it("should not require tests because this package only provides configurations", () => {
  /**
   * This package only provides reusable configurations for existing tools.
   *
   * The behavior of each tool is tested by its respective maintainers:
   * - Oxlint
   * - Oxfmt
   * - Commitlint
   * - CSpell
   *
   * Testing the tools themselves here would duplicate their existing test
   * suites. Future tests may be added to validate configuration decisions,
   * such as tracking experimental rules becoming stable or automatically
   * updating enabled presets.
   */
});

test.todo("track experimental rules becoming stable", () => {});
