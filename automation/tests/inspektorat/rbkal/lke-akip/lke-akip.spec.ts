import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/akip');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'LKE AKIP' }).click();
  await page.getByText('Sinkal RBKal Akip').click();
  await page.getByRole('heading', { name: 'Akip' }).click();
});