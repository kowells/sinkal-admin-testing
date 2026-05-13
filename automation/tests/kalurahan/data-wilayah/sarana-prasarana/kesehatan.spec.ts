import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/kesehatan');
  await page.getByRole('link', { name: 'Kesehatan' }).click();
  await page.getByRole('heading', { name: 'Data Sarana Kesehatan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 52,
      y: 148
    }
  });
});