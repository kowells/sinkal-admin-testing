import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/ikm');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'IKM' }).click();
  await page.getByText('Sinkal Testing 1 IKM').click();
  await page.getByRole('heading', { name: 'Data Indeks Kepuasan' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data IKM' }).click();
  await page.locator('#kecamatan').selectOption('01003007');
  await page.locator('#kelurahan').selectOption('399');
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).getByPlaceholder('Nilai IKM').click();
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).getByPlaceholder('Nilai IKM').fill('90');
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).getByPlaceholder('Tahun').click();
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).getByPlaceholder('Tahun').fill('2026');
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).locator('input[name="dokumen"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).locator('input[name="dokumen"]').setInputFiles('assets/pdftest.pdf');
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).locator('input[name="dokumen_pengolahan"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data IKM' }).locator('input[name="dokumen_pengolahan"]').setInputFiles('assets/pdftest.pdf');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Penambahan data berhasil' }).click();
  await page.getByRole('button', { name: ' Edit' }).nth(1).click();
  await page.getByRole('heading', { name: 'Ubah Data IKM' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  await page.getByRole('button', { name: ' Hapus' }).nth(1).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).nth(1).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});