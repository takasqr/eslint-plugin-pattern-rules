import patternRules from 'eslint-plugin-pattern-rules';

export default [
  {
    files: ["*.js", "*.ts"],
    plugins: {
      'pattern-rules': patternRules,
    },
    rules: {
      'pattern-rules/banned': ['error', { patterns: ["forbidde*"] }],
      'pattern-rules/required': ['error', { patterns: ["required"] }],
    },
  },
];
