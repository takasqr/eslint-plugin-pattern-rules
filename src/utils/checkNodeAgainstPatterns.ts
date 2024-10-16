import { Rule } from "eslint";
import { Node } from "estree"

export function checkNodeAgainstPatterns(
  node: Node,
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
