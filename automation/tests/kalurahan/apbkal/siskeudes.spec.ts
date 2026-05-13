import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/siskeudes');
  await page.getByRole('link', { name: ' APBKAL' }).click();
  await page.getByRole('link', { name: ' APBKAL' }).click();
  await page.getByRole('link', { name: 'Siskeudes' }).click();
  // await page.getByText('Sinkal Testing 1 APBKAL').click();
  await page.getByRole('heading', { name: 'Upload Laporan Siskeudes' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Laporan Siskeudes' }).click();
  await page.locator('#kecamatan').selectOption('01999002');
  await page.locator('#kelurahan').selectOption('9902');
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).getByPlaceholder('Tahun').click();
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).getByPlaceholder('Tahun').fill('2026');
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).locator('input[name="dokumen"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).locator('input[name="dokumen"]').setInputFiles('assets/apbkal_awal.pdf');
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).locator('input[name="dokumen_perubahan"]').click();
  await page.getByRole('dialog', { name: 'Tambah Data Laporan Siskeudes' }).locator('input[name="dokumen_perubahan"]').setInputFiles('assets/apbkal_akhir.pdf');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('heading', { name: 'Berhasil!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lihat Dokumen' }).first().click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lihat Dokumen' }).nth(1).click();
  const page2 = await page2Promise;
  await page.getByRole('button', { name: ' Edit' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Laporan Siskeudes' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Ya, Hapus!' }).click();
});