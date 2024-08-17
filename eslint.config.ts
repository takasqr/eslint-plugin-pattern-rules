import patternRules from 'eslint-plugin-pattern-rules';

const config = [
  {
    plugins: {
      patternRules,
    },
    rules: {
      'patternRules/banned': 'error',
      'patternRules/required': 'warn',
    },
  },
];

export default config;
