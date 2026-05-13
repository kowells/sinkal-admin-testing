import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/aksi');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('banner').getByText('Rencana Aksi').click();
  await page.getByText('Sinkal Testing 1 Rencana Aksi').click();
  await page.getByRole('heading', { name: 'Rencana Aksi' }).click();
  await page.getByRole('button', { name: 'Tambah' }).click();
  await page.getByText('Data sudah ada').click();
  await page.getByRole('link', { name: ' Lihat & Edit' }).click();
  await page.getByText('Sinkal Testing 1 Rencana Aksi').click();
  await page.getByRole('heading', { name: 'Edit Rencana Aksi' }).click();
  await page.locator('#target-yes12-2026').check();
  await page.getByRole('button', { name: 'Edit Perubahan' }).click();
  await page.getByRole('heading', { name: 'Edit data aksi perubahan' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
});