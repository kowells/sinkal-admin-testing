import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/agama');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Agama' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('row', { name: 'Islam' }).locator('input[name="islam[L]"]').fill('70');
  await page.getByRole('row', { name: 'Islam' }).locator('input[name="islam[P]"]').fill('70');
  await page.getByRole('row', { name: 'Protestan' }).locator('input[name="kristen[L]"]').fill('30');
  await page.getByRole('row', { name: 'Protestan' }).locator('input[name="kristen[P]"]').fill('30');
  await page.getByRole('row', { name: 'Katolik' }).locator('input[name="katolik[L]"]').fill('30');
  await page.getByRole('row', { name: 'Katolik' }).locator('input[name="katolik[P]"]').fill('30');
  await page.getByRole('row', { name: 'Hindu' }).locator('input[name="hindu[L]"]').fill('40');
  await page.getByRole('row', { name: 'Hindu' }).locator('input[name="hindu[P]"]').fill('40');
  await page.getByRole('row', { name: 'Buddha' }).locator('input[name="budha[L]"]').fill('30');
  await page.getByRole('row', { name: 'Buddha' }).locator('input[name="budha[P]"]').fill('30');
  await page.getByRole('row', { name: 'Konghucu' }).locator('input[name="konghucu[L]"]').fill('30');
  await page.getByRole('row', { name: 'Konghucu' }).locator('input[name="konghucu[P]"]').fill('30');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 94,
      y: 92
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).getByRole('combobox').selectOption('2025');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="islam[L]"]').fill('90');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="islam[P]"]').fill('90');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="kristen[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="kristen[P]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="katolik[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="katolik[P]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="hindu[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="hindu[P]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="budha[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="budha[P]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="konghucu[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per Agama' }).locator('input[name="konghucu[P]"]').fill('30');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/agama/2023?qw=');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Agama' }).locator('input[name="hindu[L]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Agama' }).locator('input[name="hindu[L]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Agama' }).locator('input[name="hindu[L]"]').fill('30');
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Agama' }).locator('input[name="hindu[P]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Agama' }).locator('input[name="hindu[P]"]').fill('30');
  await page.getByRole('button', { name: 'Ubah Data' }).click();

  await page.locator('select[name="filterTahun"]').selectOption('2025');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/agama/2025?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.getByRole('link', { name: 'Agama' }).click();

  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/agama/2023?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});