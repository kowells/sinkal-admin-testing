import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-capaian');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Capaian Sasaran' }).click();
  await page.getByText('Sinkal Testing 1 RPMKal').click();
  await page.getByRole('heading', { name: 'Capaian Sasaran' }).click();
  await page.getByRole('button', { name: ' Tambah Capaian Sasaran' }).click();
  await page.getByText('Sinkal Testing 1 RPMKal').click();
  await page.getByRole('heading', { name: 'Tambah Capaian Sasaran' }).click();
  await page.getByRole('link', { name: 'Batalkan' }).click();
  await page.getByRole('heading', { name: 'Capaian Sasaran' }).click();
  await page.getByRole('button', { name: ' Tambah Capaian Sasaran' }).click();
  await page.getByRole('combobox').selectOption('2020');
  // await page.getByRole('button', { name: 'Tambah' }).click();
  await page.locator('button[wire\\:click="openModal"]').click();
  await page.getByRole('heading', { name: 'Tambah Realisasi' }).click();
  await page.getByRole('combobox').nth(1).selectOption('1');
  // await page.getByRole('textbox', { name: 'Masukkan Realisasi Tahun n' }).click();
  const input = page.getByPlaceholder('Masukkan Realisasi Tahun n');
  await input.click();
  await page.waitForTimeout(500);
  await input.type('20000001', { delay: 500 });
  await page.getByRole('button', { name: 'Tambahkan Kegiatan' }).click();
  // await page.getByRole('button', { name: 'Tambah' }).click();
  await page.locator('button[wire\\:click="openModal"]').click();
  await page.getByRole('heading', { name: 'Tambah Realisasi' }).click();
  await page.getByRole('combobox').nth(1).selectOption('2');
  await input.click();
  await page.waitForTimeout(500);
  await input.type('4', { delay: 300 });
  await page.getByRole('button', { name: 'Tambahkan Kegiatan' }).click();
  // await page.getByRole('button', { name: 'Tambah' }).click();
  await page.locator('button[wire\\:click="openModal"]').click();
  await page.getByRole('heading', { name: 'Tambah Realisasi' }).click();
  await page.getByRole('combobox').nth(1).selectOption('3');

  await page.getByRole('textbox', { name: 'Masukkan Realisasi Tahun n' }).click();
  await page.getByRole('button', { name: 'Batal' }).click();
  // await page.getByRole('button', { name: 'Tambah' }).click();
  await page.locator('button[wire\\:click="openModal"]').click();
  await page.waitForTimeout(500);
  await page.getByRole('combobox').nth(1).selectOption('4');
  await page.waitForTimeout(500);
  await page.getByRole('combobox').nth(3).selectOption('2');
  await page.waitForTimeout(500);
  const input2 = page.getByPlaceholder('Masukkan Keterangan');

  await input2.click();
  await page.waitForTimeout(500);
  await input2.type('test', { delay: 500 });

  await page.getByRole('button', { name: 'Tambahkan Kegiatan' }).click();
  await page.getByRole('button', { name: 'Ubah Data' }).first().click();

  const input3 = page.getByPlaceholder('Masukkan Realisasi Tahun n');

  for (let i = 0; i < 3; i++) {
    await input3.fill('2000000');

    // tunggu sebentar Livewire settle
    await page.waitForTimeout(300);

    const value = await input3.inputValue();

    if (value && value.replace(/\D/g, '') === '2000000') {
      break; // sukses
    }
  }

  await page.getByRole('button', { name: 'Simpan', exact: true }).click();
  await page.getByRole('button', { name: 'Hapus' }).nth(1).click();
  await page.getByRole('button', { name: 'Simpan Capaian Sasaran' }).click();
  await page.getByRole('heading', { name: 'Berhasil!' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('link', { name: 'Detail' }).first().click();
  await page.getByText('Sinkal Testing 1 RPMKal').click();
  await page.getByRole('heading', { name: 'Detail Capaian Sasaran' }).click();
  await page.getByRole('link', { name: 'Ubah Capaian Sasaran' }).click();
  await page.getByRole('link', { name: 'Batalkan' }).click();
  await page.getByRole('row', { name: '2020 Belum Terverifikasi - 20' }).getByRole('button').click();
  await page.getByRole('heading', { name: 'Anda akan menghapus capaian' }).click();
  await page.getByRole('button', { name: 'Hapus Capaian Sasaran' }).click();
  await page.getByRole('heading', { name: 'Berhasil!' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('link', { name: 'Capaian Sasaran' }).click();
});