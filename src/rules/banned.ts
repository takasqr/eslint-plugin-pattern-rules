import { Rule } from "eslint";

const bannedRule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Ban specific patterns in identifiers",
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

    return {
      Identifier(node) {
        for (const pattern of patterns) {
          const regex = new RegExp(pattern);
          if (regex.test(node.name)) {
            context.report({
              node,
              message: `Identifier "${node.name}" is banned by pattern "${pattern}".`,
            });
          }
        }
      },
    };
  },
};

export default bannedRule;
