import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/pertumbuhan-penduduk');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Pertumbuhan Penduduk' }).click();
  await page.getByText('Sinkal kalurahan1-testing Data Wilayah Kependudukan Pertumbuhan Penduduk').click();
  await page.getByRole('heading', { name: 'Data Pertumbuhan Penduduk' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('heading', { name: 'Tambah Data Pertumbuhan' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByRole('combobox').selectOption('2026');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Laki-Laki').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Laki-Laki').fill('5900');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Perempuan').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Perempuan').fill('6780');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 59,
      y: 19
    }
  });

  const tahun = '2026';

  await page.locator('tr', { hasText: tahun }).locator('button.btn-edit').click();
  await page.getByRole('heading', { name: 'Ubah Data Pertumbuhan Penduduk' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  await page
    .locator('tr', { hasText: tahun })
    .locator('button.btn-danger')
    .click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page
    .locator('tr', { hasText: tahun })
    .locator('button.btn-danger')
    .click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});