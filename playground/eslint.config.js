import patternRules from 'eslint-plugin-pattern-rules';

export default [
  {
    files: ["*.js", "*.ts"],
    plugins: {
      patternRules,
    },
    rules: {
      'patternRules/banned': ['error', { patterns: ["forbidde*"] }],
      'patternRules/required': ['error', { patterns: ["required"] }],
    },
  },
];
