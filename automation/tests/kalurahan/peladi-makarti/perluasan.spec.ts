import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/perluasan');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Perluasan Kerja' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Perluasan Kerja' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Tamu Perluasan Kerja' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Peserta wajib diisi.', { exact: true }).click();
  await page.getByText('Layanan wajib diisi.').click();
  await page.getByText('Potensi wajib diisi.').click();
  await page.getByRole('textbox', { name: '-- Pilih Tamu --' }).click();
  await page.getByRole('option', { name: 'test tamu edit' }).click();
  await page.getByRole('radio', { name: 'Wirausaha baru' }).check();
  await page.getByRole('textbox', { name: 'Masukan Potensi yang Dimiliki' }).click();
  await page.getByRole('textbox', { name: 'Masukan Potensi yang Dimiliki' }).fill('testing');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Perluasan Kerja' }).click();
  await page
    .getByRole('row', { name: '1112131415161719' })
    .getByRole('link', { name: 'Edit' })
    .click();
  await page.getByRole('heading', { name: 'Edit Tamu Pelatihan Kerja' }).click();
  await page.getByRole('textbox', { name: 'Masukan Potensi yang Dimiliki' }).click();
  await page.getByRole('textbox', { name: 'Masukan Potensi yang Dimiliki' }).fill('testing edit');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan edit');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Perluasan Kerja' }).click();


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