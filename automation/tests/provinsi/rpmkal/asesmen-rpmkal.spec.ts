import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-admin/assesmen');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Assesmen' }).click();
  await page.getByRole('heading', { name: 'Assesmen' }).click();
  await page.getByText('RPMKal > Assesmen').click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('');
});