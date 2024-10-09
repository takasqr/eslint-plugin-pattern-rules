export const matchPatterns = (tokens: any[], regexes: RegExp[]): boolean => {
  for (const token of tokens) {
    for (const regex of regexes) {
      if (regex.test(token.value)) {
        return true;
      }
    }
  }
  return false;
};