import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/wilayah/luas-wilayah');
  await page.getByRole('link', { name: 'Luas Wilayah' }).click();
  await page.getByRole('heading', { name: 'Luas Wilayah Kalurahan' }).click();
  await page.getByRole('heading', { name: 'Batas Wilayah Kalurahan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).first().click();
  await page.getByRole('heading', { name: 'Ubah Data Luas Wilayah' }).click();
  await page.locator('input[name="totalLuas"]').click();
  await page.locator('input[name="totalLuas"]').fill('2');
  await page.locator('input[name="sawah"]').click();
  await page.locator('input[name="sawah"]').fill('3');
  await page.locator('input[name="ladang"]').click();
  await page.locator('input[name="ladang"]').fill('1');
  await page.locator('input[name="kebun"]').click();
  await page.locator('input[name="kebun"]').fill('1');
  await page.locator('input[name="hutan"]').click();
  await page.locator('input[name="hutan"]').fill('1');
  await page.locator('input[name="waduk"]').click();
  await page.locator('input[name="waduk"]').fill('1');
  await page.locator('input[name="tanah_tkd"]').click();
  await page.locator('input[name="tanah_tkd"]').fill('1');
  await page.locator('input[name="tanah_sg"]').click();
  await page.locator('input[name="tanah_sg"]').fill('1');
  await page.locator('input[name="tanah_pag"]').click();
  await page.locator('input[name="tanah_pag"]').fill('1');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh' }).first().click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: ' Ubah' }).nth(1).click();
  await page.getByRole('heading', { name: 'Ubah Data Batas Kalurahan' }).click();
  await page.locator('input[name="utara"]').click();
  await page.locator('input[name="utara"]').fill('etst');
  await page.locator('input[name="selatan"]').click();
  await page.locator('input[name="selatan"]').fill('test');
  await page.locator('input[name="barat"]').click();
  await page.locator('input[name="barat"]').fill('test');
  await page.locator('input[name="timur"]').click();
  await page.locator('input[name="timur"]').fill('test');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).nth(1).click();
  await page.locator('input[name="utara"]').fill('');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  await page.getByLabel('Ubah Data Batas Kalurahan').getByText('Utara wajib diisi.').click();
  await page.locator('input[name="utara"]').click();
  await page.locator('input[name="utara"]').fill('-');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh' }).nth(1).click();
  const download1 = await download1Promise;
});