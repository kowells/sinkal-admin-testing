import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/dusun');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Pedukuhan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('row', { name: 'Padukuhan test 1.1' }).locator('input[name="4948[L]"]').fill('100');
  await page.getByRole('row', { name: 'Padukuhan test 1.1' }).locator('input[name="4948[P]"]').fill('200');
  await page.getByRole('row', { name: 'Padukuhan test 1.2' }).locator('input[name="4949[L]"]').fill('105');
  await page.getByRole('row', { name: 'Padukuhan test 1.2' }).locator('input[name="4949[P]"]').fill('170');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 15,
      y: 121
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).getByRole('combobox').selectOption('2026');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="4948[L]"]').fill('300');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="4948[P]"]').fill('400');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="4949[L]"]').fill('380');
  await page.getByRole('dialog', { name: 'Tambah Data Penduduk Per' }).locator('input[name="4949[P]"]').fill('500');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per' }).locator('input[name="4948[L]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per' }).locator('input[name="4948[L]"]').fill('305');
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per' }).locator('input[name="4948[P]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Penduduk Per' }).locator('input[name="4948[P]"]').fill('404');
  await page.getByRole('button', { name: 'Ubah Data' }).click();


  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/dusun/2023?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.getByRole('link', { name: 'Pedukuhan' }).click();
  await page.locator('select[name="filterTahun"]').selectOption('2026');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/kependudukan/dusun/2026?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});