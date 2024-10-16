import { describe, it } from 'vitest';
import { RuleTester } from 'eslint';
import bannedIdentifierRule from '../../src/rules/banned-identifier';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('bannedRule', () => {
  it('should not report errors for allowed identifiers', () => {
    ruleTester.run('banned', bannedIdentifierRule, {
      valid: [
        {
          code: 'let allowedVariable = 42;',
          options: [{ patterns: ['forbidden'] }],
        },
      ],
      invalid: [],
    });
  });

  it('should report errors for identifiers matching the banned pattern', () => {
    ruleTester.run('banned', bannedIdentifierRule, {
      valid: [],
      invalid: [
        {
          code: 'let forbiddenVariable = 42;',
          options: [{ patterns: ['forbidden'] }],
          errors: [{ message: 'Identifier "forbiddenVariable" is banned by pattern "forbidden".' }],
        },
      ],
    });
  });

  it('should report errors for identifiers matching regex patterns', () => {
    ruleTester.run('banned', bannedIdentifierRule, {
      valid: [],
      invalid: [
        {
          code: 'let fooBar = 100;',
          options: [{ patterns: ['^foo.*'] }],
          errors: [{ message: 'Identifier "fooBar" is banned by pattern "^foo.*".' }],
        },
      ],
    });
  });
});