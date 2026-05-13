import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rbkal-esakip-kinerja');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'Pengukuran Kinerja' }).click();
  await page.getByText('Sinkal RBKal E-Sakip Data').click();
  await page.getByRole('heading', { name: 'Pengukuran Kinerja' }).click();
  await page.getByRole('link', { name: 'Detail' }).first().click();
  await page.getByText('Sinkal RBKal E-Sakip Data').click();
  await page.getByRole('heading', { name: 'Detail Pengukuran Kinerja' }).click();
  await page.getByRole('link', { name: 'Pengukuran Kinerja' }).click();
});