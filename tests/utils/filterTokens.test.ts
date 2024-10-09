import { describe, it, expect } from 'vitest';

// Import the filterTokens function
import { filterTokens } from '../../src/utils/filterTokens.js'

// Test cases
describe('filterTokens', () => {
  it('should filter tokens by specified types', () => {
    const tokens = [
      { type: 'Identifier', value: 'myVar' },
      { type: 'String', value: 'myString' },
      { type: 'Number', value: 123 },
      { type: 'Identifier', value: 'anotherVar' },
      { type: 'String', value: 42 }, // A string token, but its value is not a string
    ];

    // Filter tokens of type 'Identifier'
    const filteredIdentifiers = filterTokens(tokens, ['Identifier']);
    expect(filteredIdentifiers).toEqual([
      { type: 'Identifier', value: 'myVar' },
      { type: 'Identifier', value: 'anotherVar' },
    ]);

    // Filter tokens of type 'String'
    const filteredStrings = filterTokens(tokens, ['String']);
    expect(filteredStrings).toEqual([
      { type: 'String', value: 'myString' }, // Only tokens with string values should be included
    ]);

    // Filter both 'Identifier' and 'String' token types
    const filteredIdentifiersAndStrings = filterTokens(tokens, ['Identifier', 'String']);
    expect(filteredIdentifiersAndStrings).toEqual([
      { type: 'Identifier', value: 'myVar' },
      { type: 'String', value: 'myString' },
      { type: 'Identifier', value: 'anotherVar' },
    ]);
  });

  it('should return an empty array if no matching types are found', () => {
    const tokens = [
      { type: 'Number', value: 123 },
      { type: 'Punctuation', value: ';' },
    ];

    // Filter using a token type that doesn't exist
    const filteredTokens = filterTokens(tokens, ['Identifier']);
    expect(filteredTokens).toEqual([]);
  });
});
