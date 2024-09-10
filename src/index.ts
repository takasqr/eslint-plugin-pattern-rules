import { readFileSync } from 'fs';
import { resolve } from 'path';
import bannedRule from './rules/banned.js';
import bannedIdentifierRule from './rules/banned-identifier.js';
import bannedLiteralRule from './rules/banned-literal.js'
import requiredRule from './rules/required.js';
import requireIdentifierRule from './rules/required-identifier.js';
import requiredLiteralRule from './rules/required-literal.js';

const pkg = JSON.parse(readFileSync(resolve('./package.json'), 'utf-8'));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules: {
    'banned': bannedRule,
    'banned-identifier': bannedIdentifierRule,
    'banned-literal': bannedLiteralRule,
    'required': requiredRule,
    'required-identifier': requireIdentifierRule,
    'required-literal': requiredLiteralRule
  },
};

export default plugin;
