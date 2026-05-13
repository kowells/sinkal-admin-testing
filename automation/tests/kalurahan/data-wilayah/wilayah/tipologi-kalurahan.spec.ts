import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/wilayah/tipologi-kalurahan');
  await page.getByRole('link', { name: 'Tipologi Kalurahan' }).click();
  await page.getByRole('heading', { name: 'Tipologi Kalurahan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Tipologi Kalurahan' }).click();
  await page.locator('input[name="tipologi"]').click();
  await page.locator('input[name="tipologi"]').fill('1');
  await page.locator('input[name="perkembangan"]').click();
  await page.locator('input[name="perkembangan"]').fill('1');
  await page.locator('input[name="kategori"]').click();
  await page.locator('input[name="kategori"]').fill('1');
  await page.locator('input[name="komoditasTanah"]').click();
  await page.locator('input[name="komoditasTanah"]').fill('1');
  await page.locator('input[name="komoditasEkonomi"]').click();
  await page.locator('input[name="komoditasEkonomi"]').fill('1');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.locator('input[name="komoditasEkonomi"]').fill('2');
  await page.locator('button[name="tutup-modal"]').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh' }).click();
  const download = await downloadPromise;
});