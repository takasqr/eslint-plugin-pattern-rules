import { test, expect } from '@nuxt/test-utils/playwright'

test('リダイレクトが正しく行われることを確認', async ({ goto, page }) => {
  // リダイレクト元のページにアクセス
  await goto('/', { waitUntil: 'hydration' })

  // ページのリダイレクトを待機
  await page.waitForURL('**/en')

  // 正しいページにリダイレクトされているか確認
  const currentUrl = new URL(page.url());
  expect(currentUrl.pathname).toBe('/en');
})
