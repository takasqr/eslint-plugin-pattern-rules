import { describe, it } from 'vitest';
import { RuleTester } from 'eslint';
import bannedRule from '../../src/rules/banned';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe('bannedRule', () => {
  it('should not report errors for allowed identifiers', () => {
    ruleTester.run('banned', bannedRule, {
      valid: [
        {
          code: 'let allowedVariable = 42;',
          options: [{ patterns: ['forbidden'] }],
        },
      ],
      invalid: [],
    });
  });

  it('should not report errors for allowed literals', () => {
    ruleTester.run('banned', bannedRule, {
      valid: [
        {
          code: 'let someVariable = "allowedString";',
          options: [{ patterns: ['bannedLiteral'] }],
        },
      ],
      invalid: [],
    });
  });

  it('should report errors for identifiers matching the banned pattern', () => {
    ruleTester.run('banned', bannedRule, {
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

  it('should report errors for literals matching the banned pattern', () => {
    ruleTester.run('banned', bannedRule, {
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

  it('should report errors for identifiers matching regex patterns', () => {
    ruleTester.run('banned', bannedRule, {
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

  it('should report errors for literals matching regex patterns', () => {
    ruleTester.run('banned', bannedRule, {
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