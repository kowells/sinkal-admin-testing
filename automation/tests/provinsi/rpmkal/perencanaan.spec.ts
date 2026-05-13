import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storageState.json'
});

test('test', async ({ page }) => {
  await page.goto('http://sinkal.stechoq.com/admin/rpmkal-admin/perencanaan');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Perencanaan' }).click();
  await page.getByRole('heading', { name: 'Perencanaan' }).click();
  await page.getByText('RPMKal > Perencanaan').click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('2025');
  await page.getByRole('searchbox', { name: 'Search:' }).press('Enter');
});