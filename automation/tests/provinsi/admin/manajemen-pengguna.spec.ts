import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/manajemen-pengguna');
  await page.locator('div').filter({ hasText: /^Admin Provinsi$/ }).click();
  await page.getByRole('link', { name: 'Manajemen Pengguna' }).click();
  await page.getByRole('heading', { name: 'Manajemen Pengguna' }).click();
  await page.getByRole('heading', { name: 'Daftar Pengguna' }).click();

  // await page.getByRole('link', { name: ' Tambah Pengguna' }).click();
  // await page.getByRole('heading', { name: 'Tambah Data Pengguna' }).click();
  // await page.getByRole('textbox', { name: 'Masukan nama pengguna' }).click();
  // await page.getByRole('textbox', { name: 'Masukan nama pengguna' }).fill('testing');
  // await page.getByRole('textbox', { name: 'Masukan email' }).click();
  // await page.getByRole('textbox', { name: 'Masukan email' }).fill('testingasesor@sinkal.jogjaprov.go.id');
  // await page.locator('#select-role').selectOption('asesor');
  // await page.locator('#select-kabupaten').selectOption('01002');
  // await page.getByRole('button', { name: 'Simpan' }).click();
  // await page.goto('http://sinkal.stechoq.com/admin/manajemen-pengguna/tambah');


  await page.locator('div').filter({ hasText: /^Admin Provinsi$/ }).click();
  await page.getByRole('link', { name: 'Manajemen Pengguna' }).click();
});