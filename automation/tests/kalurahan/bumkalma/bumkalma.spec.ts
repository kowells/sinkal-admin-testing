import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/bumkalma');
  await page.getByRole('link', { name: ' Bumkalma' }).click();
  await page.getByRole('heading', { name: 'Bumkalma' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Bumkalma' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).fill('test bumkalma');
  await page.getByRole('textbox', { name: 'Nomor Sertifikat' }).click();
  await page.getByRole('textbox', { name: 'Nomor Sertifikat' }).fill('12345');
  await page.getByRole('textbox', { name: 'Usaha Utama' }).click();
  await page.getByRole('textbox', { name: 'Usaha Utama' }).fill('jualan');
  await page.getByRole('textbox', { name: 'Tahun Berdiri' }).click();
  await page.getByRole('textbox', { name: 'Tahun Berdiri' }).fill('1991');
  await page.getByRole('textbox', { name: 'Nama Direktur' }).click();
  await page.getByRole('textbox', { name: 'Nama Direktur' }).fill('test nama');
  await page.getByRole('textbox', { name: 'Telepon' }).click();
  await page.getByRole('textbox', { name: 'Telepon' }).fill('089123456789');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mail.1@mail.com');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('test jalan');
  await page.getByRole('button', { name: 'Simpan' }).click();

  const row = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test bumkalma$/ })
  });


  await row.getByRole('button', { name: /Edit/ }).click();
  await page.getByRole('heading', { name: 'Edit Bumkalma' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).fill('test bumkalma edit');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('test jalan edit');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();

  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test bumkalma edit$/ })
  });

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});