import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/tingkat-pendidikan');
  await page.getByRole('link', { name: 'Jenjang Pendidikan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 30,
      y: 145
    }
  });
});