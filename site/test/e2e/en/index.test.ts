import { test, expect } from '@nuxt/test-utils/playwright'

test('正しくレンダリングされることを確認', async ({ goto, page }) => {
  // ページにアクセス
  await goto('/en', { waitUntil: 'hydration' })
  // ヘッダーに言語切り替えのボタンが表示されるか確認
  await expect(page.getByText('日本語')).toBeVisible()
})
