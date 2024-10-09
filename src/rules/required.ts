import { Rule } from "eslint";
import { createRegexes } from "../utils/createRegexes.js";
import { matchPatterns } from "../utils/matchPatterns.js";
import { filterTokens } from "../utils/filterTokens.js";

const requiredRule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require specific patterns in identifiers and literals",
      category: "Best Practices",
      recommended: false,
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
      'Program:exit'(node) {
        const sourceCode = context.getSourceCode();
        const tokens = sourceCode.ast.tokens;
        const identifiers = filterTokens(tokens, ['Identifier', 'String']);

        if (!matchPatterns(identifiers, regexes)) {
          context.report({
            node,
            message: `No identifiers or literals matching the required patterns: ${patterns.join(", ")}.`,
          });
        }
      },
    };
  },
};

export default requiredRule;
