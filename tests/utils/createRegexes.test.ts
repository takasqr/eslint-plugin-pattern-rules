import { describe, it, expect, vi } from "vitest";
import { Rule } from "eslint";
import { createRegexes } from "../../src/utils/createRegexes";

const mockContext: Rule.RuleContext = {
  report: vi.fn(),
} as unknown as Rule.RuleContext;

describe("createRegexes", () => {
  it("should create valid regexes", () => {
    const patterns = ["^abc", "def"];
    const result = createRegexes(patterns, mockContext);

    expect(result.length).toBe(2);
    expect(result[0]).toBeInstanceOf(RegExp);
    expect(result[1]).toBeInstanceOf(RegExp);

    expect(result[0].test("abc")).toBe(true);
    expect(result[1].test("def")).toBe(true);
  });

  it("should return only valid regexes and report invalid ones", () => {
    const patterns = ["^abc", "[invalid", "def"];
    const result = createRegexes(patterns, mockContext);

    expect(result.length).toBe(2);
    expect(result[0]).toBeInstanceOf(RegExp);
    expect(result[1]).toBeInstanceOf(RegExp);

    // valid
    expect(result[0].test("abc")).toBe(true);
    expect(result[1].test("def")).toBe(true);

    // invalid
    expect(mockContext.report).toHaveBeenCalledTimes(1);
    expect(mockContext.report).toHaveBeenCalledWith({
      loc: { line: 1, column: 0 },
      message: `Invalid regex pattern: "[invalid". Error: Invalid regular expression: /[invalid/: Unterminated character class`,
    });
  });
});
