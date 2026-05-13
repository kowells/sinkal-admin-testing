import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-admin/capaian');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Capaian Sasaran' }).click();
  await page.getByRole('heading', { name: 'Capaian Sasaran' }).click();
  await page.getByText('RPMKal > Capaian Sasaran').click();
});