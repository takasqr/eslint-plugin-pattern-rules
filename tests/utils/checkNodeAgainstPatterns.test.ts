import { describe, it, expect, vi, beforeEach } from "vitest";
import { Rule } from "eslint";
import { checkNodeAgainstPatterns } from "../../src/utils/checkNodeAgainstPatterns";

// Create a mock context
const mockContext: Rule.RuleContext = {
  report: vi.fn(), // Mock the `report` method
} as unknown as Rule.RuleContext;

// Create a mock node
const mockNode = {
  type: "Identifier",
  name: "testIdentifier"
};

describe("checkNodeAgainstPatterns", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
  });

  it("should report if identifier matches a pattern", () => {
    const regexes = [/^test/]; // Pattern that starts with "test"
    const value = "testIdentifier";

    checkNodeAgainstPatterns(mockNode, value, regexes, mockContext, "Identifier");

    // Check if `context.report` was called
    expect(mockContext.report).toHaveBeenCalledTimes(1);
    expect(mockContext.report).toHaveBeenCalledWith({
      node: mockNode,
      message: `Identifier "testIdentifier" is banned by pattern "^test".`,
    });
  });

  it("should not report if identifier does not match any pattern", () => {
    const regexes = [/^foo/]; // Pattern that starts with "foo"
    const value = "testIdentifier";

    checkNodeAgainstPatterns(mockNode, value, regexes, mockContext, "Identifier");

    // Check if `context.report` was not called
    expect(mockContext.report).toHaveBeenCalledTimes(0);
  });

  it("should report if literal matches a pattern", () => {
    const regexes = [/^abc/]; // Pattern that starts with "abc"
    const value = "abcLiteral";
    const mockLiteralNode = {
      type: "Literal",
      value: "abcLiteral"
    };

    checkNodeAgainstPatterns(mockLiteralNode, value, regexes, mockContext, "Literal");

    // Check if `context.report` was called
    expect(mockContext.report).toHaveBeenCalledTimes(1);
    expect(mockContext.report).toHaveBeenCalledWith({
      node: mockLiteralNode,
      message: `Literal "abcLiteral" is banned by pattern "^abc".`,
    });
  });

  it("should not report if literal does not match any pattern", () => {
    const regexes = [/^xyz/]; // Pattern that starts with "xyz"
    const value = "abcLiteral";
    const mockLiteralNode = {
      type: "Literal",
      value: "abcLiteral"
    };

    checkNodeAgainstPatterns(mockLiteralNode, value, regexes, mockContext, "Literal");

    // Check if `context.report` was not called
    expect(mockContext.report).toHaveBeenCalledTimes(0);
  });
});
