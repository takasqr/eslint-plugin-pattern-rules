import { Rule } from "eslint";

const requiredLiteralRule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require specific patterns in string literals",
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
    let hasRequiredPattern = false;

    return {
      'Program:exit'(node) {
        const sourceCode = context.getSourceCode();
        const tokens = sourceCode.ast.tokens;

        const literals = tokens.filter(token => token.type === 'String' && typeof token.value === 'string');

        for (const literal of literals) {
          for (const pattern of patterns) {
            const regex = new RegExp(pattern);
            if (regex.test(literal.value)) {
              hasRequiredPattern = true;
              break;
            }
          }
        }

        if (!hasRequiredPattern) {
          context.report({
            node,
            message: `No string literals matching the required patterns: ${patterns.join(", ")}.`,
          });
        }
      },
    };
  },
};

export default requiredLiteralRule;
