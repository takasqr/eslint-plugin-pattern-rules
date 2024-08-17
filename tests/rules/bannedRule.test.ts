import { RuleTester } from 'eslint';
import bannedRule from '../../src/rules/banned';
import { describe, it } from 'vitest';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('banned rule', () => {
  it('should correctly identify banned patterns', () => {
    ruleTester.run('banned', bannedRule, {
      valid: [
        {
          code: "let allowedName = 1;",
          options: [{ patterns: ["forbidden"] }],
        },
      ],
      invalid: [
        {
          code: "let forbiddenName = 1;",
          options: [{ patterns: ["forbidden"] }],
          errors: [{ message: 'Identifier "forbiddenName" is banned by pattern "forbidden".' }],
        },
      ],
    });
  });
});
