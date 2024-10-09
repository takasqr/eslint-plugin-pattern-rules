import { Rule } from "eslint";
import { createRegexes } from "../utils/createRegexes.js";
import { checkNodeAgainstPatterns } from "../utils/checkNodeAgainstPatterns.js";

const bannedRule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Ban specific patterns in identifiers and literals",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [
      {
        type: "object",
        properties: {
          patterns: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const options = context.options[0] || {};
    const patterns = options.patterns || [];
    const regexes = createRegexes(patterns, context);

    return {
      Identifier(node) {
        checkNodeAgainstPatterns(node, node.name, regexes, context, "Identifier");
      },
      Literal(node) {
        if (typeof node.value === "string") {
          checkNodeAgainstPatterns(node, node.value, regexes, context, "Literal");
        }
      },
    };
  },
};

export default bannedRule;
