import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/wilayah/peta-wilayah');
  await page.getByRole('link', { name: 'Peta Wilayah' }).click();
  await page.getByRole('heading', { name: 'Peta Wilayah Kalurahan' }).click();
});

