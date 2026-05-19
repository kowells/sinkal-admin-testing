import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('/admin/kesejahteraan/tingkat-kesejahteraan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kesejahteraan', exact: true }).click();
  await page.getByRole('link', { name: 'Tingkat Kesejahteraan' }).click();
  await page.getByRole('heading', { name: 'Data Tingkat Kesejahteraan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Tingkat' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('textbox', { name: 'Jumlah Penduduk Miskin' }).fill('1');
  await page.getByRole('textbox', { name: 'Jumlah KK Miskin' }).fill('1');
  await page.getByRole('textbox', { name: 'Jumlah UMR Kabupaten' }).fill('Rp. 10.0000');
  await page.getByRole('textbox', { name: 'Pendapatan Garis Kemiskinan' }).fill('Rp. 90.0000');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 25,
      y: 46
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Tingkat' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('textbox', { name: 'Jumlah Penduduk Miskin' }).fill('2');
  await page.getByRole('textbox', { name: 'Jumlah KK Miskin' }).fill('1');
  await page.getByRole('textbox', { name: 'Jumlah UMR Kabupaten' }).fill('Rp. 1000');
  await page.getByRole('textbox', { name: 'Pendapatan Garis Kemiskinan' }).fill('Rp. 900');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  const tahun1 = '2023';
  const tahun2 = '2024';


  await page.locator('tr', { hasText: tahun1 }).locator('button.btn-edit').click();
  await page.getByRole('textbox', { name: 'Pendapatan Garis Kemiskinan' }).click();
  await page.getByRole('textbox', { name: 'Pendapatan Garis Kemiskinan' }).fill('Rp. 900.00');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.locator('tr', { hasText: tahun2 }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator('tr', { hasText: tahun2 }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.locator('tr', { hasText: tahun1 }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});