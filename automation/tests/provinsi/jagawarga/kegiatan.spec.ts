import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/laporan/kegiatan-jagawarga');
  await page.getByRole('link', { name: 'Kegiatan Jagawarga' }).click();
  await page.getByRole('heading', { name: 'Kegiatan Jagawarga' }).click();
  await page.getByText('Pencarian').click();
  await page.locator('input[name="tglAwal"]').fill('2025-01-01');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Jagawarga', exact: true }).click();
  await page.locator('#kabupaten').selectOption('01002');
  await page.locator('#kecamatan').selectOption('01002010');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: ' Download' }).click();
  const download = await downloadPromise;
});