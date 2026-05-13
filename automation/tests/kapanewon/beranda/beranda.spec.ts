import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/beranda');
  await page.getByRole('link', { name: ' Beranda' }).click();
  await page.getByText('Sinkal Beranda').click();
  await page.getByRole('heading', { name: 'Beranda' }).click();
});