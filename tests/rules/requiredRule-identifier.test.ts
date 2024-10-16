import { describe, it } from 'vitest';
import { RuleTester } from 'eslint';
import requiredIdentifierRule from '../../src/rules/required-identifier';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('required rule', () => {
  it('should pass when identifiers or literals match the required pattern', () => {
    ruleTester.run('required', requiredIdentifierRule, {
      valid: [
        {
          code: "let requiredName = 1;",
          options: [{ patterns: ["required"] }],
        },
      ],
      invalid: [],
    });
  })

  it('should pass when identifiers or literals match the required pattern', () => {
    ruleTester.run('required', requiredIdentifierRule, {
      valid: [
        {
          code: "let requiredName = 1;",
          options: [{ patterns: ["required"] }],
        },
      ],
      invalid: [],
    });
  })

  it('should fail when no identifiers or literals match the required pattern', () => {
    ruleTester.run('required', requiredIdentifierRule, {
      valid: [],
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
