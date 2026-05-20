import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/peserta');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Peserta' }).click();
  await page.getByRole('heading', { name: 'Data Tamu' }).click();
  await page.getByRole('link', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Tamu' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByText('Nik wajib diisi.', { exact: true }).click();
  await page.getByText('Nama wajib diisi.').click();
  await page.getByText('Jenis Kelamin wajib diisi.').click();
  await page.getByText('Tanggal Lahir wajib diisi.').click();
  await page.getByText('No hp wajib diisi.').click();
  await page.getByText('Alamat wajib diisi.').click();
  await page.getByText('Tempat lahir wajib diisi.').click();
  await page.getByRole('textbox', { name: 'Masukan Nama Lengkap' }).click();
  await page.getByRole('textbox', { name: 'Masukan Nama Lengkap' }).fill('test tamu 2');
  await page.getByPlaceholder('Masukan NIK').click();
  await page.getByPlaceholder('Masukan NIK').fill('1112');
  await page.getByRole('radio', { name: 'Laki-laki' }).check();
  await page.locator('input[name="tempat_lahir"]').click();
  await page.locator('input[name="tempat_lahir"]').fill('testing');
  await page.locator('input[name="tgl_lahir"]').fill('1988-12-01');
  await page.getByPlaceholder('Masukan Nomor HP').click();
  await page.getByPlaceholder('Masukan Nomor HP').fill('89123456788');
  await page.locator('select[name="pendidikan"]').selectOption('SARJANA_STRATA_III');
  await page.locator('select[name="kawin"]').selectOption('2');
  await page.locator('select[name="bekerja"]').selectOption('BEKERJA');
  await page.getByRole('textbox', { name: 'Masukan Alamat Sesuai KTP' }).click();
  await page.getByRole('textbox', { name: 'Masukan Alamat Sesuai KTP' }).fill('dusun test');
  await page.getByRole('textbox', { name: 'Masukan Email' }).click();
  await page.getByRole('textbox', { name: 'Masukan Email' }).fill('tamu@mail.com');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('#form').getByText('Nik harus terdiri dari 16').click();
  await page.getByPlaceholder('Masukan NIK').click();
  await page.getByPlaceholder('Masukan NIK').fill('1112131415161718');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  await page.locator('tr', { hasText: '1112131415161718' }).getByRole('button', { name: 'Lihat' }).click();

  await page.getByRole('heading', { name: 'Detail' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.locator('tr', { hasText: '1112131415161718' }).getByRole('link', { name: 'Edit' }).click();

  await page.getByRole('textbox', { name: 'Masukan Nama Lengkap' }).click();
  await page.getByRole('textbox', { name: 'Masukan Nama Lengkap' }).fill('test tamu edit 2');
  await page.getByRole('textbox', { name: 'Masukan Alamat Sesuai KTP' }).click();
  await page.getByRole('textbox', { name: 'Masukan Alamat Sesuai KTP' }).fill('dusun test edit');
  await page.getByRole('button', { name: 'Edit Data' }).click();
  await page.getByRole('heading', { name: 'Data Tamu' }).click();
  await page.locator('tr', { hasText: '1112131415161718' }).getByRole('button', { name: 'Hapus' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator('tr', { hasText: '1112131415161718' }).getByRole('button', { name: 'Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});