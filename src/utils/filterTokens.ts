export const filterTokens = (tokens: any[], types: string[]): any[] => {
  return tokens.filter(token => 
    types.includes(token.type) && (token.type !== 'String' || typeof token.value === 'string')
  );
};