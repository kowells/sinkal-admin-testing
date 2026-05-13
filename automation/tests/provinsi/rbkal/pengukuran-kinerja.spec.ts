import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/esakip-admin/data-kinerja');
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Pengukuran Kinerja' }).click();
  await page.getByRole('heading', { name: 'Data Kinerja' }).click();
  await page.getByText('E-Sakip > Data Kinerja').click();
  await page.getByRole('link', { name: 'Lihat data' }).first().click();
  await page.getByRole('heading', { name: 'Detail Data Kinerja' }).click();
  await page.getByRole('link', { name: 'RBKal', exact: true }).click();
  await page.getByRole('link', { name: 'Pengukuran Kinerja' }).click();
  await page.locator('tr:nth-child(9) > td:nth-child(7) > .btn').click();
  await page.getByRole('heading', { name: 'Detail Data Kinerja' }).click();
});