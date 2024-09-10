# eslint-plugin-pattern-rules

## Overview

The `eslint-plugin-pattern-rules` is an ESLint plugin designed to help enforce custom patterns in your codebase. It allows you to ban or require specific patterns in identifiers and literals using regular expressions. This plugin is ideal for teams or projects with strict naming conventions or other coding patterns that need to be consistently enforced across a project.

## Features

- Ban specific patterns: You can define patterns to ban in variable names, function names, literals, or any identifiers within your code.
- Require specific patterns: You can also enforce that certain patterns are always present in identifiers or literals.

## Installation

To install the plugin, run:

```bash
npm i eslint eslint-plugin-pattern-rules -D
```

## Usage

Once installed, you can use the plugin in your ESLint configuration. Here’s an example configuration using the plugin:

__eslint.config.js__

```js
import patternRules from 'eslint-plugin-pattern-rules';

export default [
  {
    files: ["*.js", "*.ts"],
    plugins: {
      'pattern-rules': patternRules,
    },
    rules: {
      'pattern-rules/banned': ['error', { patterns: ["forbidde*"] }],
      'pattern-rules/required': ['error', { patterns: ["required"] }],
    },
  },
];
```

In this example:

- The `banned` rule prevents any identifiers or literals that match the pattern `forbidde*`.
- The `required` rule enforces the presence of a specific pattern (`required`) in identifiers or literals.

This plugin works well with any JavaScript or TypeScript project and integrates seamlessly with ESLint's rule configuration.