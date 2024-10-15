import { expect, test } from '@nuxt/test-utils/playwright'

test('test', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByText('日本語')).toBeVisible()
})
