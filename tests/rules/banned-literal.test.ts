import { describe, it, expect } from 'vitest';
import { RuleTester } from 'eslint';
import bannedLiteralRule from '../../src/rules/banned-literal';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('bannedRule', () => {
  it('should not report errors for allowed literals', () => {
    ruleTester.run('banned', bannedLiteralRule, {
      valid: [
        {
          code: 'let someVariable = "allowedString";',
          options: [{ patterns: ['bannedLiteral'] }],
        },
      ],
      invalid: [],
    });
  });

  it('should report errors for literals matching the banned pattern', () => {
    ruleTester.run('banned', bannedLiteralRule, {
      valid: [],
      invalid: [
        {
          code: 'let someVariable = "bannedString";',
          options: [{ patterns: ['bannedString'] }],
          errors: [{ message: 'Literal "bannedString" is banned by pattern "bannedString".' }],
        },
      ],
    });
  });

  it('should report errors for literals matching regex patterns', () => {
    ruleTester.run('banned', bannedLiteralRule, {
      valid: [],
      invalid: [
        {
          code: 'let value = "foo123";',
          options: [{ patterns: ['^foo.*'] }],
          errors: [{ message: 'Literal "foo123" is banned by pattern "^foo.*".' }],
        },
      ],
    });
  });
});