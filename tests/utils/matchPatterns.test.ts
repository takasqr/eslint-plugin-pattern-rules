import { describe, it, expect } from 'vitest';

// Import the matchPatterns function
import { matchPatterns } from '../../src/utils/matchPatterns.js';

describe('matchPatterns', () => {
  it('should return true when a token matches a regex pattern', () => {
    const tokens = [
      { type: 'Identifier', value: 'myVar' },
      { type: 'String', value: 'myString' },
      { type: 'Number', value: 123 },
    ];

    const regexes = [/myVar/, /myString/];

    // Should return true if at least one token matches a regex pattern
    const result = matchPatterns(tokens, regexes);
    expect(result).toBe(true);
  });

  it('should return false when no token matches any regex pattern', () => {
    const tokens = [
      { type: 'Identifier', value: 'anotherVar' },
      { type: 'String', value: 'anotherString' },
      { type: 'Number', value: 123 },
    ];

    const regexes = [/myVar/, /myString/];

    // Should return false if no tokens match any regex pattern
    const result = matchPatterns(tokens, regexes);
    expect(result).toBe(false);
  });

  it('should handle tokens with different types and still match the values', () => {
    const tokens = [
      { type: 'Identifier', value: 'fooBar' },
      { type: 'String', value: 'someString' },
      { type: 'Number', value: 123 },
    ];

    const regexes = [/fooBar/, /123/]; // List of regex patterns

    // Should return true if token values match regex patterns regardless of token type
    const result = matchPatterns(tokens, regexes);
    expect(result).toBe(true);
  });

  it('should return false when regexes list is empty', () => {
    const tokens = [
      { type: 'Identifier', value: 'someIdentifier' },
      { type: 'String', value: 'someString' },
    ];

    const regexes: RegExp[] = []; // Empty list of regex patterns

    // Should return false if the regex list is empty
    const result = matchPatterns(tokens, regexes);
    expect(result).toBe(false);
  });
});
