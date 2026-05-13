import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/dusun');
  await page.getByRole('link', { name: 'Pedukuhan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 45,
      y: 24
    }
  });
});