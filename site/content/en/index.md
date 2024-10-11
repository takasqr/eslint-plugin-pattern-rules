

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

## Rules

- [banned](#banned)
- [banned-identifier](#banned-identifier)
- [banned-literal](#banned-literal)
- [required](#required)
- [required-identifier](#required-identifier)
- [required-literal](#required-literal)

### banned

#### Description
This rule bans specific patterns in both identifiers and literals based on user-defined regular expressions.

#### Options
This rule accepts the following options:

- patterns: An array of strings, each representing a regular expression pattern to ban in identifiers and literals.
#### Example Configuration

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
      'pattern-rules/banned': ["error", { "patterns": ["^foo", "abc$"] }]
    },
  },
];
```

#### Example of incorrect code:

```js
// With patterns: ["^foo", "abc$"]
const fooVar = "test";   // `fooVar` is banned
const str = "myabc";     // This is banned

```

#### Example of correct code:
```js
// With patterns: ["^foo", "abc$"]
const barVar = "test";   // This is allowed
const str = "defghi";    // This is allowed

```


### banned-identifier

#### Description
This rule bans specific patterns in identifiers based on user-defined regular expressions.


#### Options
This rule accepts the following options:

- `patterns`: An array of strings, each representing a regular expression pattern to ban in identifiers.

#### Example Configuration


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
      'pattern-rules/banned-identifier': ["error", { "patterns": ["^foo", "bar$"] }]
    },
  },
];
```

#### Example of incorrect code:

```js
// With patterns: ["^foo", "bar$"]
const fooVariable = 1; // `fooVariable` is banned
let myBar = "test";    // `myBar` is banned
```

#### Example of correct code:
```js
// With patterns: ["^foo", "bar$"]
const testVariable = 1; // This is allowed
let baz = "test";       // This is allowed
```

### banned-literal

#### Description

This rule bans specific patterns in string literals based on user-defined regular expressions.


#### Options
This rule accepts the following options:

- patterns: An array of strings, each representing a regular expression pattern to ban in literals.

#### Example Configuration

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
      'pattern-rules/banned-literal': ["error", { "patterns": ["^abc", "xyz$"] }]
    },
  },
];
```
#### Example of incorrect code:

```js
// With patterns: ["^abc", "xyz$"]
const str = "abcTest";  // This is banned
const another = "endxyz"; // This is banned

```

#### Example of correct code:
```js
// With patterns: ["^abc", "xyz$"]
const str = "defTest";  // This is allowed
const another = "end";  // This is allowed

```



### required

#### Description
This rule requires specific patterns in both identifiers and string literals. Both identifiers and string literals must match one or more of the provided regular expression patterns.


#### Options
This rule accepts an object with the following properties:

- `patterns`: An array of strings, each representing a regular expression pattern that both identifiers and string literals must match.

#### Example Configuration

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
      'pattern-rules/required': ["error", { "patterns": ["^foo", "bar"] }]
    },
  },
];
```
#### Example of incorrect code:

```js
const varName = "invalid";  // Identifier does not match "^foo" and string literal does not match "bar"

```

#### Example of correct code:
```js
const fooVar = "barValue";

```




### required-identifier

#### Description
This rule requires specific patterns in identifiers. Identifiers must match one or more of the provided regular expression patterns.


#### Options
This rule accepts an object with the following properties:

- `patterns`: An array of strings, each representing a regular expression pattern that identifiers must match.

#### Example Configuration

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
      'pattern-rules/required-identifier': ["error", { "patterns": ["^my", "^foo"] }]
    },
  },
];
```
#### Example of incorrect code:

```js

const varName = 1;  // Does not match "^my" or "^foo"
```

#### Example of correct code:
```js
const myVar = 1;
const fooBar = 2;
```


### required-literal

#### Description

This rule requires specific patterns in string literals. String literals must match one or more of the provided regular expression patterns.

#### Options
This rule accepts an object with the following properties:

- `patterns`: An array of strings, each representing a regular expression pattern that string literals must match.

#### Example Configuration

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
      'pattern-rules/required-literal': ["error", { "patterns": ["hello", "world"] }]
    },
  },
];
```
#### Example of incorrect code:

```js
const text = "invalid";  // Does not match "hello" or "world"
```

#### Example of correct code:
```js
const greeting = "hello";
const place = "world";

```

