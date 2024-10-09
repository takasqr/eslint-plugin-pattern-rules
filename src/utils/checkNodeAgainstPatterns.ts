import { Rule } from "eslint";

export function checkNodeAgainstPatterns(
  node: any,
  value: string,
  regexes: RegExp[],
  context: Rule.RuleContext,
  type: "Identifier" | "Literal"
) {
  for (const regex of regexes) {
    if (regex && regex.test(value)) {
      context.report({
        node,
        message: `${type} "${value}" is banned by pattern "${regex.source}".`,
      });
    }
  }
}
