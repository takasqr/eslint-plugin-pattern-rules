

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