

# eslint-plugin-pattern-rules

## 概要

`eslint-plugin-pattern-rules` は、コードベースでカスタムパターンを強制的に適用するためのESLintプラグインです。識別子やリテラルにおける特定のパターンを正規表現を使って禁止したり、必須にしたりすることができます。このプラグインは、厳格な命名規則や他のコーディングパターンをプロジェクト全体で一貫して強制する必要があるチームやプロジェクトに最適です。

## 機能

- 特定のパターンを禁止: 変数名、関数名、リテラル、またはコード内の任意の識別子において、禁止するパターンを定義できます。
- 特定のパターンを必須に: 識別子やリテラルに常に特定のパターンが存在することを強制することができます。

## インストール

プラグインをインストールするには、次のコマンドを実行します:

```bash
npm i eslint eslint-plugin-pattern-rules -D
```

## 使用方法

インストール後、ESLintの設定ファイルでプラグインを使用できます。以下はプラグインを使用した設定例です:

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

この例では:

- `banned` ルールは、パターン `forbidde*` に一致する識別子やリテラルを禁止します。
- `required` ルールは、識別子やリテラルに特定のパターン `required` が含まれていることを強制します。

このプラグインは、JavaScriptまたはTypeScriptのプロジェクトに適しており、ESLintのルール設定とシームレスに統合されます。


## ルール

- [banned](#banned)
- [banned-identifier](#banned-identifier)
- [banned-literal](#banned-literal)
- [required](#required)
- [required-identifier](#required-identifier)
- [required-literal](#required-literal)

### banned

#### Description
このルールは、ユーザーが定義した正規表現に基づいて、識別子やリテラル内の特定のパターンを禁止します。

#### Options
このルールは以下のオプションを受け付けます:

- patterns: 正規表現パターンを表す文字列の配列。これらのパターンを識別子やリテラルで禁止します。
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
const fooVar = "test";   // `fooVar`は禁止されている
const str = "myabc";     // これも禁止されている

```

#### Example of correct code:
```js
// With patterns: ["^foo", "abc$"]
const barVar = "test";   // これは許可されている
const str = "defghi";    // これも許可されている

```


### banned-identifier

#### Description
このルールは、ユーザーが定義した正規表現に基づいて、識別子内の特定のパターンを禁止します。


#### Options
このルールは以下のオプションを受け付けます:

- `patterns`: 正規表現パターンを表す文字列の配列。これらのパターンを識別子で禁止します。

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
const fooVariable = 1; // `fooVariable`は禁止されている
let myBar = "test";    // `myBar`は禁止されている
```

#### Example of correct code:
```js
// With patterns: ["^foo", "bar$"]
const testVariable = 1; // これは許可されている
let baz = "test";       // これも許可されている
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

