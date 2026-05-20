import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storage-state/kalurahan.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sinkal.jogjaprov.go.id/admin/wilayah/orbitasi');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Wilayah', exact: true }).click();
  await page.getByRole('link', { name: 'Orbitasi' }).click();
  await page.getByRole('heading', { name: 'Orbitasi Wilayah Kalurahan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.locator('input[name="kecamatan"]').fill('1');
  await page.locator('input[name="kabupaten"]').fill('1');
  await page.locator('input[name="sertifikat"]').fill('1');
  await page.locator('input[name="kota"]').fill('1');
  await page.locator('input[name="provinsi"]').fill('1');
  await page.locator('input[name="kas"]').fill('1');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.locator('input[name="kecamatan"]').fill('12');
  await page.locator('input[name="kabupaten"]').fill('12');
  await page.locator('input[name="provinsi"]').fill('12');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh' }).click();
  const download = await downloadPromise;
});