import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storage-state/kalurahan.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kesejahteraan/pekerjaan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kesejahteraan', exact: true }).click();
  await page.getByRole('link', { name: 'Pekerjaan' }).click();
  await page.getByRole('heading', { name: 'Data Pekerjaan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Bekerja').fill('5');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Bekerja').fill('4');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Tidak Bekerja').fill('0');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Tidak Bekerja').fill('0');
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.locator('canvas').click({
    position: {
      x: 25,
      y: 50
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Bekerja').fill('90');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Bekerja').fill('88');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Tidak Bekerja').fill('1');
  await page.getByRole('dialog', { name: 'Tambah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Tidak Bekerja').fill('7');
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByRole('dialog', { name: 'Ubah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Bekerja').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pekerjaan' }).getByPlaceholder('Jumlah Laki-Laki Bekerja').fill('51');
  await page.getByRole('dialog', { name: 'Ubah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Bekerja').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pekerjaan' }).getByPlaceholder('Jumlah Perempuan Bekerja').fill('40');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});