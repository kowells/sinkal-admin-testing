import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/regulasi');
  await page.locator('div').filter({ hasText: /^Admin Provinsi$/ }).click();
  await page.getByRole('link', { name: 'Regulasi' }).click();
  await page.getByRole('heading', { name: 'Daftar Regulasi' }).click();
  await page.getByRole('heading', { name: 'Regulasi', exact: true }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data' }).click();
  await page.getByRole('textbox', { name: 'Nama Regulasi' }).click();
  await page.getByRole('textbox', { name: 'Nama Regulasi' }).fill('test');
  await page.locator('#kategori').selectOption('PERATURAN_PEMERINTAH');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/pdftest.pdf');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Lihat Dokumen' }).click();
  // const page1 = await page1Promise;
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});