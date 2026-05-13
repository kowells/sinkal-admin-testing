import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/staff');
  await page.getByRole('heading', { name: 'Data Staff' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Staff').getByText('Nama wajib diisi.').click();
  await page.getByLabel('Tambah Data Staff').getByText('Jabatan wajib diisi.').click();
  await page.getByRole('textbox', { name: 'Nama Staff' }).click();
  await page.getByRole('textbox', { name: 'Nama Staff' }).fill('test');
  await page.getByRole('textbox', { name: 'Jabatan' }).click();
  await page.getByRole('textbox', { name: 'Jabatan' }).fill('staff');
  await page.getByRole('textbox', { name: 'Nip' }).click();
  await page.getByRole('textbox', { name: 'Nip' }).fill('123');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).locator('select[name="jk"]').selectOption('PRIA');
  await page.getByRole('textbox', { name: 'NIK' }).click();
  await page.getByRole('textbox', { name: 'NIK' }).fill('11');
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).click();
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).fill('jogja');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).getByPlaceholder('Tanggal Lahir').fill('2007-12-01');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).locator('select[name="status_menikah"]').selectOption('BELUM_MENIKAH');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).locator('select[name="gol_darah"]').selectOption('B');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).locator('select[name="pendidikan"]').selectOption('SARJANA_STRATA_I');
  await page.getByRole('textbox', { name: 'Diklat' }).click();
  await page.getByRole('textbox', { name: 'Diklat' }).fill('-');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).getByPlaceholder('Tahun Mulai').click();
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).getByPlaceholder('Tahun Mulai').fill('2025');
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).getByPlaceholder('Tahun Berakhir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Staff' }).getByPlaceholder('Tahun Berakhir').fill('2050');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jalan testing');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Staff').getByText('Validation Error').click();
  await page.getByRole('textbox', { name: 'NIK' }).click();
  await page.getByRole('textbox', { name: 'NIK' }).fill('1112131415161718');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('button', { name: ' Lihat' }).first().click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: ' Edit' }).first().click();
  await page.getByRole('textbox', { name: 'Nama Staff' }).click();
  await page.getByRole('textbox', { name: 'Nama Staff' }).fill('test edit');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jalan testing edit');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  await page.getByRole('button', { name: ' Lihat' }).first().click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: ' Hapus' }).first().click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).first().click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});