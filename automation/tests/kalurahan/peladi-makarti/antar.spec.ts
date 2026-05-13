import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/antar');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Antar Kerja' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Antar Kerja' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();

  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Peserta wajib diisi.', { exact: true }).click();
  await page.getByText('Keahlian wajib diisi.').click();
  await page.getByText('Minat wajib diisi.').click();
  await page.getByText('Pelayanan wajib diisi.').click();
  await page.getByText('Pengalaman wajib diisi.').click();
  await page.getByRole('textbox', { name: '-- Pilih Tamu --' }).click();
  await page.getByRole('option', { name: 'test tamu edit' }).click();
  await page.getByRole('textbox', { name: 'Masukan Keterampilan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Keterampilan' }).fill('testing');
  await page.getByText('Minat Lokasi Kerja * --Pilih').click();
  await page.locator('select[name="minat"]').selectOption('Lokal D.I. Yogyakarta (AKL)');
  await page.locator('select[name="pengalaman"]').selectOption('1 sampai 4 tahun');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('textbox', { name: 'Masukan Catatan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan' }).fill('test');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Antar Kerja' }).click();
  await page
    .getByRole('row', { name: '1112131415161717' })
    .getByRole('link', { name: 'Edit' })
    .click();
  await page.getByRole('textbox', { name: 'Masukan Catatan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan' }).fill('test edit');
  await page.getByRole('textbox', { name: 'Masukan Keterampilan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Keterampilan' }).fill('testing edit');
  await page.locator('select[name="minat"]').selectOption('Masih di Indonesia (AKAD)');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page
    .getByRole('row', { name: '1112131415161717' })
    .getByRole('button', { name: 'Hapus' })
    .click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page
    .getByRole('row', { name: '1112131415161717' })
    .getByRole('button', { name: 'Hapus' })
    .click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});