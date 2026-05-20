import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/jaminan');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Jaminan Sosial' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Jaminan Sosial' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Tamu Jaminan Sosial' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Peserta wajib diisi.', { exact: true }).click();
  await page.getByText('Pekerjaan wajib diisi.').click();
  await page.getByText('Layanan wajib diisi.').click();
  await page.getByText('Bpjs wajib diisi.').click();
  await page.getByRole('textbox', { name: '-- Pilih Tamu --' }).click();
  await page.getByRole('option', { name: 'test tamu edit' }).click();
  await page.locator('select[name="pekerjaan"]').selectOption('APARATUR_SIPIL_NEGARA');
  await page.locator('select[name="bpjs"]').selectOption('PESERTA_PENERIMA_UPAH');
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Layanan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Layanan' }).fill('testing');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Jaminan Sosial' }).click();
  await page
    .getByRole('row', { name: '1112131415161719' })
    .getByRole('link', { name: 'Edit' })
    .click();
  await page.getByRole('heading', { name: 'Edit Tamu Jaminan Sosial' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Layanan' }).click();
  await page.getByRole('textbox', { name: 'Masukan Kebutuhan Layanan' }).fill('testing edit');
  await page.locator('select[name="bpjs"]').selectOption('PESERTA_BUKAN_PENERIMA_UPAH');
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).dblclick();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).click();
  await page.getByRole('textbox', { name: 'Masukan Catatan/Rekomendasi' }).fill('catatan edit');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu Jaminan Sosial' }).click();
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