import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-assesmen');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Assesmen' }).nth(1).click();
  await page.getByText('Sinkal Testing 1 RPMKal').click();
  await page.getByRole('heading', { name: 'Assesmen' }).click();
});