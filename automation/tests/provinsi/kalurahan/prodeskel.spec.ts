import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/prodeskel');
  await page.getByRole('link', { name: 'Kalurahan', exact: true }).click();
  await page.getByRole('link', { name: 'Prodeskel' }).click();
  await page.getByRole('heading', { name: 'Dashboard Prodeskel' }).click();
  await page.getByText('Kalurahan > Dashboard').click();
  await page.getByRole('heading', { name: 'Informasi Prodeskel Kabupaten' }).click();
});