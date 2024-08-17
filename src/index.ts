import { readFileSync } from 'fs';
import { resolve } from 'path';
import bannedRule from './rules/banned';
import requiredRule from './rules/required';

const pkg = JSON.parse(readFileSync(resolve('./package.json'), 'utf-8'));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules: {
    banned: bannedRule,
    required: requiredRule,
  },
};

export default plugin;
