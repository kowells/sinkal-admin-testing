import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/assesment');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Asesmen' }).click();
  await page.getByText('Sinkal RBKal Assesmen').click();
  await page.getByRole('heading', { name: 'Assesmen RBKAL' }).click();
  await page.locator('tr:nth-child(7) > td:nth-child(8) > .btn').click();
  await page.getByText('Sinkal RBKal Assesmen Lihat').click();
  await page.getByRole('heading', { name: 'Lembar Kerja Asesmen' }).click();
  await page.getByRole('button', { name: ' Unduh' }).click();
  await page.getByRole('heading', { name: 'Unduh Dokumen' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nama Pejabat' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nama Pejabat' }).fill('test');
  await page.getByRole('textbox', { name: 'Masukkan Jabatan' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Jabatan' }).fill('test');
  await page.getByText('Batalkan Unduh').click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});