import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/jenis-kelamin');
  await page.getByRole('link', { name: 'Jenis Kelamin' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 33,
      y: 12
    }
  });
});