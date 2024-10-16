import { describe, it } from 'vitest';
import { RuleTester } from 'eslint';
import requiredLiteralRule from '../../src/rules/required-literal';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('required rule', () => {
  it('should pass when literals match the required pattern', () => {
    ruleTester.run('required', requiredLiteralRule, {
      valid: [
        {
          code: "let requiredName = 'value';",
          options: [{ patterns: ["value"] }],
        },
      ],
      invalid: [],
    });
  })

  it('should fail when no literals match the required pattern', () => {
    ruleTester.run('required', requiredLiteralRule, {
      valid: [],
      invalid: [
        {
          code: "let someOtherName = 1;",
          options: [{ patterns: ["required"] }],
          errors: [{ message: 'No string literals matching the required patterns: required.' }],
        },
      ],
    });
  })
});
