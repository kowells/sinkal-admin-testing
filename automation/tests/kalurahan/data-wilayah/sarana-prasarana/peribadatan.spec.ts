import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/peribadatan');
  await page.getByRole('link', { name: 'Peribadatan' }).click();
  await page.getByRole('heading', { name: 'Data Sarana Ibadah' }).click();
  await page.locator('canvas').click({
    position: {
      x: 24,
      y: 286
    }
  });
});