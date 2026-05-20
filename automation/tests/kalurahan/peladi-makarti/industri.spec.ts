import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/industri');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Hubungan Industrial' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Hubungan Industrial' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Tamu Hubungan' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Peserta wajib diisi.', { exact: true }).click();
  await page.getByText('Tempat kerja wajib diisi.').click();
  await page.getByText('Masalah wajib diisi.').click();
  await page.getByText('Klasifikasi wajib diisi.').click();
  await page.getByRole('textbox', { name: '-- Pilih Tamu --' }).click();
  await page.getByRole('option', { name: 'test tamu edit' }).click();
  await page.locator('select[name="klasifikasi"]').selectOption('UPAH_TIDAK_DIBAYAR');
  await page.getByRole('textbox', { name: 'Masukan Nama Perusahaan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Nama Perusahaan' }).fill('testing');
  await page.getByRole('textbox', { name: 'Masukan Uraian Singkat' }).click();
  await page.getByRole('textbox', { name: 'Masukan Uraian Singkat' }).fill('testing');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Hubungan Industrial' }).click();
  await page
    .getByRole('row', { name: '1112131415161719' })
    .getByRole('link', { name: 'Edit' })
    .click();
  await page.getByRole('heading', { name: 'Edit Tamu Hubungan Industrial' }).click();
  await page.getByRole('textbox', { name: 'Masukan Nama Perusahaan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Nama Perusahaan' }).fill('testing edit');
  await page.getByRole('textbox', { name: 'Masukan Uraian Singkat' }).click();
  await page.getByRole('textbox', { name: 'Masukan Uraian Singkat' }).fill('testing edit');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan edit');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page
    .getByRole('row', { name: '1112131415161719' })
    .getByRole('button', { name: 'Hapus' })
    .click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page
    .getByRole('row', { name: '1112131415161719' })
    .getByRole('button', { name: 'Hapus' })
    .click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});