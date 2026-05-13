import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/usia');
  await page.getByRole('link', { name: 'Usia', exact: true }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan Usia' }).click();
});