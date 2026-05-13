import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/pendidikan');
  await page.getByRole('link', { name: 'Pendidikan' }).click();
  await page.getByRole('heading', { name: 'Data Sarana Pendidikan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 51,
      y: 295
    }
  });
});