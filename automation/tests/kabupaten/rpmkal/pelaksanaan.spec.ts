import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-pelaksanaan');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Pelaksanaan' }).click();
  await page.getByRole('heading', { name: 'Aksi Pelaksanaan' }).click();
  await page.getByRole('link', { name: 'Lihat Data' }).nth(1).click();
  await page.getByRole('heading', { name: 'Lihat Pelaksanaan' }).click();
  await page.getByRole('heading', { name: 'Informasi Kegiatan' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});