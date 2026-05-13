import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rekappengisian');
  await page.getByRole('link', { name: ' Rekap Pengisian' }).click();
  await page.getByRole('heading', { name: 'Rekapitulasi Pengisian Tahun' }).click();
  await page.getByRole('heading', { name: 'Rekapitulasi Pengisian Tahun' }).click();
  await page.getByText('Rekapitulasi RPMKAL').click();
  await page.getByText('Rekapitulasi RBKAL').click();
  await page.getByText('Sinkal Rekap Pengisian').click();
});