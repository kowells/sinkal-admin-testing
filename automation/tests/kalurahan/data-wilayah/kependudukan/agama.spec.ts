import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/agama');
  await page.getByRole('link', { name: 'Agama' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 120,
      y: 105
    }
  });
});