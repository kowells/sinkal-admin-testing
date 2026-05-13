import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/angkatan-kerja');
  await page.getByRole('link', { name: 'Kelompok Usia Produktif' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 18,
      y: 20
    }
  });
});