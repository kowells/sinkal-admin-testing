import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/angkatan-kerja');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Kelompok Usia Produktif' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Laki-Laki').fill('700');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Perempuan').fill('750');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 17,
      y: 18
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Laki-Laki').fill('800');
  await page.getByRole('dialog', { name: 'Tambah Data Pertumbuhan' }).getByPlaceholder('Jumlah Perempuan').fill('825');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 8,
      y: 65
    }
  });

  const tahun1 = '2024';
  const tahun2 = '2023';
  await page.locator('tr', { hasText: tahun1 }).locator('button.btn-edit').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pertumbuhan Penduduk' }).getByPlaceholder('Jumlah Laki-Laki').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pertumbuhan Penduduk' }).getByPlaceholder('Jumlah Laki-Laki').fill('830');
  await page.getByRole('button', { name: 'Ubah Data' }).click();

  await page.locator('tr', { hasText: tahun1 }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.locator('tr', { hasText: tahun2 }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});