import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    include: ['test/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
