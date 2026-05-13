import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/esakip-admin/laporan-kinerja');
  await page.getByRole('link', { name: 'RBKal', exact: true }).click();
  await page.getByRole('link', { name: 'Pelaporan Kinerja' }).click();
  await page.getByRole('heading', { name: 'Laporan Kinerja' }).click();
  await page.getByText('E-Sakip > Laporan Kinerja').click();
  await page.getByRole('link', { name: 'Lihat data' }).first().click();
  await page.getByRole('heading', { name: 'Detail Laporan Kinerja' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Unduh' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Pelaporan Kinerja' }).click();
  await page.getByRole('link', { name: 'Lihat data' }).nth(5).click();
  await page.getByRole('heading', { name: 'Detail Laporan Kinerja' }).click();
});