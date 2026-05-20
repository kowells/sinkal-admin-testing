import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/bamuskal');
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Bamuskal').getByText('Nama wajib diisi.').click();
  await page.getByLabel('Tambah Data Bamuskal').getByText('Jabatan wajib diisi.').click();
  await page.getByRole('textbox', { name: 'Nama Bamuskal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bamuskal' }).fill('test3');
  await page.getByRole('textbox', { name: 'Jabatan' }).click();
  await page.getByRole('textbox', { name: 'Jabatan' }).fill('staff test');
  await page.getByRole('textbox', { name: 'Nip' }).click();
  await page.getByRole('textbox', { name: 'Nip' }).fill('123');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).locator('select[name="jk"]').selectOption('PRIA');
  await page.getByRole('textbox', { name: 'NIK' }).click();
  await page.getByRole('textbox', { name: 'NIK' }).fill('1112');
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).click();
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).fill('jogja');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).getByPlaceholder('Tanggal Lahir').fill('2011-12-01');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).locator('select[name="status_menikah"]').selectOption('BELUM_MENIKAH');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).locator('select[name="gol_darah"]').selectOption('A');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).locator('select[name="pendidikan"]').selectOption('SARJANA_STRATA_I');
  await page.getByRole('textbox', { name: 'Diklat' }).click();
  await page.getByRole('textbox', { name: 'Diklat' }).fill('-');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).getByPlaceholder('Tahun Mulai').click();
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).getByPlaceholder('Tahun Mulai').fill('2021');
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).getByPlaceholder('Tahun Berakhir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Bamuskal' }).getByPlaceholder('Tahun Berakhir').fill('2050');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jalan test');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Bamuskal').getByText('Validation Error').click();
  await page.getByRole('textbox', { name: 'NIK' }).click();
  await page.getByRole('textbox', { name: 'NIK' }).fill('1112131415161718');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  const row = page.locator('tr', { hasText: 'test3' });

  await row.getByRole('button', { name: /Edit/ }).click();
  await page.getByRole('textbox', { name: 'Nama Bamuskal' }).click();
  await page.getByRole('textbox', { name: 'Nama Bamuskal' }).fill('test edit');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jalan test edit');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();

  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test edit$/ })
  });

  await row2.getByRole('button', { name: /Lihat/ }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});