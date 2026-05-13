import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/status-perkawinan');
  await page.getByRole('link', { name: 'Status Perkawinan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
});