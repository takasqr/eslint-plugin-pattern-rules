// @ts-check
// @ts-ignore
import patternRules from 'eslint-plugin-pattern-rules'
import dotenv from 'dotenv'
import withNuxt from './.nuxt/eslint.config.mjs'

dotenv.config()
const accountName = process.env.ACCOUNT ? process.env.ACCOUNT : 'no-name'
const appName = process.env.APP_NAME ? process.env.APP_NAME : 'no-app-name'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    plugins: {
      patternRules,
    },
    rules: {
      'patternRules/banned': ['warn', { patterns: [accountName, appName] }],
    },
  },
)
