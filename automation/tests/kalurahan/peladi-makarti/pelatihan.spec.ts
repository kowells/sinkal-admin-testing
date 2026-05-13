import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/pelatihan');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Pelatihan Kerja' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Pelatihan Kerja' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Tamu Pelatihan Kerja' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Peserta wajib diisi.', { exact: true }).click();
  await page.getByText('Pelatihan wajib diisi.').click();
  await page.getByRole('textbox', { name: '-- Pilih Tamu --' }).click();
  await page.getByRole('option', { name: 'test tamu edit' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Pelatihan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Pelatihan' }).fill('testing');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan test');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Pelatihan Kerja' }).click();
  await page
    .getByRole('row', { name: '1112131415161717' })
    .getByRole('link', { name: 'Edit' })
    .click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Pelatihan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Pelatihan' }).fill('testing edit');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan test edit');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Pelatihan Kerja' }).click();
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