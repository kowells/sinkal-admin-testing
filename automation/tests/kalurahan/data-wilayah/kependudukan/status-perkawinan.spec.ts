import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/status-perkawinan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Status Perkawinan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('row', { name: 'Belum Kawin' }).locator('input[name="belum_menikah[L]"]').fill('9');
  await page.getByRole('row', { name: 'Belum Kawin' }).locator('input[name="belum_menikah[P]"]').fill('7');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="menikah[L]"]').fill('40');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="menikah[P]"]').fill('40');
  await page.getByRole('row', { name: 'Cerai Hidup' }).locator('input[name="cerai_hidup[L]"]').fill('3');
  await page.getByRole('row', { name: 'Cerai Hidup' }).locator('input[name="cerai_hidup[P]"]').fill('1');
  await page.getByRole('row', { name: 'Cerai Mati' }).locator('input[name="cerai_mati[L]"]').fill('4');
  await page.getByRole('row', { name: 'Cerai Mati' }).locator('input[name="cerai_mati[P]"]').fill('3');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 55,
      y: 109
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="belum_menikah[L]"]').fill('15');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="belum_menikah[P]"]').fill('19');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="menikah[L]"]').fill('45');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="menikah[P]"]').fill('45');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="cerai_hidup[L]"]').fill('2');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="cerai_hidup[P]"]').fill('1');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="cerai_mati[L]"]').fill('1');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="cerai_mati[P]"]').fill('3');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 65,
      y: 130
    }
  });
  await page.getByRole('combobox').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/status-perkawinan/2023?qw=');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[L]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[L]"]').press('ArrowLeft');
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[L]"]').fill('19');
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[P]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[P]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[P]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[P]"]').press('ArrowLeft');
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per Status' }).locator('input[name="belum_menikah[P]"]').fill('17');
  await page.getByRole('button', { name: 'Ubah Data' }).click();


  await page.locator('select[name="filterTahun"]').selectOption('2024');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/status-perkawinan/2024?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();


  await page.getByRole('link', { name: 'Status Perkawinan' }).click();
  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/status-perkawinan/2023?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});