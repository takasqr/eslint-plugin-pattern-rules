import { describe, it, expect } from 'vitest';
import { RuleTester } from 'eslint';
import requiredRule from '../../src/rules/required';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('required rule', () => {
  it('should correctly identify required patterns', () => {
    ruleTester.run('required', requiredRule, {
      valid: [
        {
          code: "let requiredName = 1;",
          options: [{ patterns: ["required"] }],
        },
      ],
      invalid: [
        {
          code: "let someOtherName = 1;",
          options: [{ patterns: ["required"] }],
          errors: [{ message: 'No identifiers matching the required patterns: required.' }],
        },
      ],
    });
  })
});
