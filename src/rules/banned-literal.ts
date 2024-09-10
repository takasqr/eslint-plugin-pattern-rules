import { Rule } from "eslint";

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

    const regexes = patterns.map((pattern: string) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        let message = "Unknown error";
        if (e instanceof Error) {
          message = e.message;
        } else if (typeof e === "string") {
          message = e;
        }

        context.report({
          loc: { line: 1, column: 0 },
          message: `Invalid regex pattern: "${pattern}". Error: ${message}`,
        });
        return null;
      }
    }).filter(Boolean);

    return {
      Literal(node) {
        if (typeof node.value === "string") {
          for (const regex of regexes) {
            if (regex && regex.test(node.value)) {
              context.report({
                node,
                message: `Literal "${node.value}" is banned by pattern "${regex.source}".`,
              });
            }
          }
        }
      },
    };
  },
};

export default bannedRule;
