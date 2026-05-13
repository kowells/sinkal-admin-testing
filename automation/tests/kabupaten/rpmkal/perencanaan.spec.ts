import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-perencanaan');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Perencanaan' }).click();
  await page.getByRole('heading', { name: 'Aksi Perencanaan' }).click();
  await page.getByText('Sinkal RPMKal Aksi Perencanaan').click();
  await page.getByRole('link', { name: 'Lihat Data' }).first().click();
  await page.getByRole('heading', { name: 'Lihat Perencanaan' }).click();
  await page.getByRole('heading', { name: 'Informasi Kegiatan' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});