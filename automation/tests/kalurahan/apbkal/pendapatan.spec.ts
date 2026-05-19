import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/pendapatan');
  // await page.getByRole('link', { name: ' APBKAL' }).click();
  // await page.getByRole('link', { name: 'Pendapatan' }).click();
  await page.getByRole('heading', { name: 'Statistik Data Pendapatan' }).click();

  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('link', { name: 'Isi Formulir' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Pendapatan' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).getByRole('combobox').selectOption('2026');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="1[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="1[rencana]"]').fill('Rp. 100.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="1[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="1[realisasi]"]').fill('Rp. 100.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="2[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="2[rencana]"]').fill('Rp. 200.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="2[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="2[realisasi]"]').fill('Rp. 200.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="3[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="3[rencana]"]').fill('Rp. 300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="3[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="3[realisasi]"]').fill('Rp. 300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="4[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="4[rencana]"]').fill('Rp. 220.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="4[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="4[realisasi]"]').fill('Rp. 220.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="6[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="6[rencana]"]').fill('Rp. 500.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="6[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="6[realisasi]"]').fill('Rp. 500.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="7[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="7[rencana]"]').fill('Rp. 30.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="7[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="7[realisasi]"]').fill('Rp. 30.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="8[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="8[rencana]"]').fill('Rp. 600.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="8[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="8[realisasi]"]').fill('Rp. 600.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="5[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="5[rencana]"]').fill('Rp. 560.000.00');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="5[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="5[realisasi]"]').fill('Rp. 5.600.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="9[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="9[rencana]"]').fill('Rp. 3.400.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="9[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pendapatan' }).locator('input[name="9[realisasi]"]').fill('Rp. 3.400.0000');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  await page.getByRole('link', { name: 'Pendapatan' }).click();


  await page.locator('canvas').click({
    position: {
      x: 82,
      y: 47
    }
  });
  const tahun = '2026';

  await page.locator(`button.btn-edit[data-tahun="${tahun}"]`).click();
  await page.getByRole('heading', { name: 'Ubah Data Pendapatan' }).click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="1[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="1[rencana]"]').fill('Rp. 100.0003');
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="1[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="1[realisasi]"]').fill('Rp. 100.0003');
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="7[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="7[rencana]"]').fill('Rp. 300.000.0000');
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="7[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="7[realisasi]"]').fill('Rp. 300.000.0000');
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="9[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="9[rencana]"]').fill('Rp. 340.00012');
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="9[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pendapatan' }).locator('input[name="9[realisasi]"]').fill('Rp. 340.00012');
  await page.getByRole('heading', { name: 'Ubah Data Pendapatan' }).click();
  await page.getByRole('button', { name: 'Ubah Data' }).click();


  await page.locator(`button.btn-hapus[data-tahun="${tahun}"]`).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator(`button.btn-hapus[data-tahun="${tahun}"]`).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();


});