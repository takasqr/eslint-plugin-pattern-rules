import { Rule } from "eslint";

const requiredIdentifierRule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require specific patterns in identifiers",
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
        const identifiers = sourceCode.ast.tokens.filter(token => token.type === 'Identifier');

        for (const identifier of identifiers) {
          for (const pattern of patterns) {
            const regex = new RegExp(pattern);
            if (regex.test(identifier.value)) {
              hasRequiredPattern = true;
              break;
            }
          }
        }

        if (!hasRequiredPattern) {
          context.report({
            node,
            message: `No identifiers matching the required patterns: ${patterns.join(", ")}.`,
          });
        }
      },
    };
  },
};

export default requiredIdentifierRule;
