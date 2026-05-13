import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-admin/pelaksanaan');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Pelaksanaan' }).click();
  await page.getByRole('heading', { name: 'Pelaksanaan' }).click();
  await page.getByText('RPMKal > Pelaksanaan').click();
});