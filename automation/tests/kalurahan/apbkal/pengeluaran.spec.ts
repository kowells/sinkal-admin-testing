import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/pengeluaran');
  // await page.getByRole('link', { name: ' APBKAL' }).click();
  // await page.getByRole('link', { name: 'Pengeluaran' }).click();
  await page.getByRole('heading', { name: 'Statistik Data Pengeluaran' }).click();
  await page.locator('canvas').click({
    position: {
      x: 27,
      y: 62
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByRole('link', { name: 'Isi Formulir' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Pengeluaran' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).getByRole('combobox').selectOption('2026');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="1[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="1[rencana]"]').fill('Rp. 100.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="1[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="1[realisasi]"]').fill('Rp. 100.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="2[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="2[rencana]"]').fill('Rp. 200.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="2[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="2[realisasi]"]').fill('Rp. 200.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="3[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="3[rencana]"]').fill('Rp. 300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="3[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="3[realisasi]"]').fill('Rp. 300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="4[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="4[rencana]"]').fill('Rp. 2.300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="4[realisasi]"]').fill('Rp. 2.300.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="5[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="5[rencana]"]').fill('Rp. 5.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="5[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="5[realisasi]"]').fill('Rp. 5.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="6[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="6[rencana]"]').fill('Rp. 10.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="6[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="6[realisasi]"]').fill('Rp. 100.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="7[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="7[rencana]"]').fill('Rp. 50.000.0000');
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="7[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Pengeluaran' }).locator('input[name="7[realisasi]"]').fill('Rp. 500.000.0000');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  const tahun = '2026';

  await page.locator(`button.btn-edit[data-tahun="${tahun}"]`).click(); await page.getByRole('heading', { name: 'Ubah Data Pengeluaran' }).click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="1[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="1[rencana]"]').fill('Rp. 100.000.01');
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="1[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="1[realisasi]"]').fill('Rp. 1.000.0001');
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="3[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="3[rencana]"]').fill('Rp. 30.00010');
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="3[realisasi]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="3[realisasi]"]').fill('Rp. 300.0010');
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="7[rencana]"]').click();
  await page.getByRole('dialog', { name: 'Ubah Data Pengeluaran' }).locator('input[name="7[rencana]"]').fill('Rp. 500.000.0000');
  await page.getByRole('button', { name: 'Ubah Data' }).click();


  await page.locator(`button.btn-hapus[data-tahun="${tahun}"]`).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator(`button.btn-hapus[data-tahun="${tahun}"]`).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});