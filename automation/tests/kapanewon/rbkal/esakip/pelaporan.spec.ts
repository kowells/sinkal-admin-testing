import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storageState.json'
});

test('test', async ({ page }) => {
  await page.goto('/admin/rbkal-esakip-laporan');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'Pelaporan Kinerja' }).click();
  await page.getByRole('heading', { name: 'Pelaporan Kinerja' }).click();
});