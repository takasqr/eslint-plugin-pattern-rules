import { AST } from "eslint"

export const matchPatterns = (tokens: AST.Token[], regexes: RegExp[]): boolean => {
  for (const token of tokens) {
    for (const regex of regexes) {
      if (regex.test(token.value)) {
        return true;
      }
    }
  }
  return false;
};