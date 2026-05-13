import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-statistik');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Statistik' }).click();
  await page.getByRole('heading', { name: 'Pencarian' }).click();
  await page.getByText('Sinkal RPMKal Statistik').click();
});