import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/bumkal');
  await page.getByRole('link', { name: ' Bumkal' }).click();
  await page.getByRole('heading', { name: 'Bumkal' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Bumkal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).fill('test bumkal');
  await page.getByRole('textbox', { name: 'Nomor Sertifikat' }).click();
  await page.getByRole('textbox', { name: 'Nomor Sertifikat' }).fill('1234');
  await page.getByRole('textbox', { name: 'Usaha Utama' }).click();
  await page.getByRole('textbox', { name: 'Usaha Utama' }).fill('jualan');
  await page.getByRole('textbox', { name: 'Tahun Berdiri' }).click();
  await page.getByRole('textbox', { name: 'Tahun Berdiri' }).fill('1990');
  await page.getByRole('textbox', { name: 'Nama Direktur' }).click();
  await page.getByRole('textbox', { name: 'Nama Direktur' }).fill('test direktur');
  await page.getByRole('textbox', { name: 'Telepon' }).click();
  await page.getByRole('textbox', { name: 'Telepon' }).fill('089123456789');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mail@mail.com');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jalan test');
  await page.getByRole('button', { name: 'Simpan' }).click();


  const row = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test bumkal$/ })
  });


  await row.getByRole('button', { name: /Edit/ }).click();
  await page.getByRole('heading', { name: 'Edit Bumkal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bumkal' }).fill('test bumkal edit');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('test jalan edit');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();


  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test bumkal edit$/ })
  });

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});