import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kependudukan/tingkat-pendidikan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Kependudukan' }).click();
  await page.getByRole('link', { name: 'Jenjang Pendidikan' }).click();
  await page.getByRole('heading', { name: 'Data Penduduk Berdasarkan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('combobox').selectOption('2023');
  await page.locator('input[name="TIDAK_SEKOLAH[L]"]').fill('7');
  await page.locator('input[name="TIDAK_SEKOLAH[P]"]').fill('7');
  await page.locator('input[name="BELUM_TAMAT_SD[L]"]').fill('9');
  await page.locator('input[name="BELUM_TAMAT_SD[P]"]').fill('9');
  await page.locator('input[name="TAMAT_SD[L]"]').fill('3');
  await page.locator('input[name="TAMAT_SD[P]"]').fill('2');
  await page.locator('input[name="TAMAT_SMP[L]"]').fill('5');
  await page.locator('input[name="TAMAT_SMP[P]"]').fill('5');
  await page.locator('input[name="TAMAT_SMA[L]"]').fill('11');
  await page.locator('input[name="TAMAT_SMA[P]"]').fill('11');
  await page.locator('input[name="DIPLOMA_I_II[L]"]').fill('29');
  await page.locator('input[name="DIPLOMA_I_II[P]"]').fill('29');
  await page.locator('input[name="DIPLOMA_III[L]"]').fill('30');
  await page.locator('input[name="DIPLOMA_III[P]"]').fill('30');
  await page.locator('input[name="STRATA_I[L]"]').fill('37');
  await page.locator('input[name="STRATA_I[P]"]').fill('37');
  await page.locator('input[name="STRATA_II[L]"]').fill('15');
  await page.locator('input[name="STRATA_II[P]"]').fill('15');
  await page.locator('input[name="STRATA_III[L]"]').fill('9');
  await page.locator('input[name="STRATA_III[P]"]').fill('5');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('combobox').selectOption('2024');
  await page.locator('input[name="TIDAK_SEKOLAH[L]"]').fill('4');
  await page.locator('input[name="TIDAK_SEKOLAH[P]"]').fill('3');
  await page.locator('input[name="BELUM_TAMAT_SD[L]"]').fill('3');
  await page.locator('input[name="BELUM_TAMAT_SD[P]"]').fill('3');
  await page.locator('input[name="TAMAT_SD[L]"]').fill('4');
  await page.locator('input[name="TAMAT_SD[P]"]').fill('4');
  await page.locator('input[name="TAMAT_SMP[L]"]').fill('5');
  await page.locator('input[name="TAMAT_SMP[P]"]').fill('5');
  await page.locator('input[name="TAMAT_SMA[L]"]').fill('8');
  await page.locator('input[name="TAMAT_SMA[P]"]').fill('8');
  await page.locator('input[name="DIPLOMA_I_II[L]"]').fill('7');
  await page.locator('input[name="DIPLOMA_I_II[P]"]').fill('7');
  await page.locator('input[name="DIPLOMA_III[L]"]').fill('5');
  await page.locator('input[name="DIPLOMA_III[P]"]').fill('5');
  await page.locator('input[name="STRATA_I[L]"]').fill('27');
  await page.locator('input[name="STRATA_I[P]"]').fill('29');
  await page.locator('input[name="STRATA_II[L]"]').fill('6');
  await page.locator('input[name="STRATA_II[P]"]').fill('7');
  await page.locator('input[name="STRATA_III[L]"]').fill('9');
  await page.locator('input[name="STRATA_III[P]"]').fill('0');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 18,
      y: 135
    }
  });
  await page.getByRole('link', { name: 'Jenjang Pendidikan' }).click();
});