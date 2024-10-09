import { Rule } from "eslint";

export function createRegexes(patterns: string[], context: Rule.RuleContext) {
  return patterns.map((pattern: string) => {
    try {
      return new RegExp(pattern);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      context.report({
        loc: { line: 1, column: 0 },
        message: `Invalid regex pattern: "${pattern}". Error: ${message}`,
      });
      return null;
    }
  }).filter(Boolean) as RegExp[];
}
