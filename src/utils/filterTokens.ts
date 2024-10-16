import { AST } from "eslint"

export const filterTokens = (tokens: AST.Token[], types: string[]): AST.Token[] => {
  return tokens.filter(token => 
    types.includes(token.type) && (token.type !== 'String' || typeof token.value === 'string')
  );
};