import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/data-pengaduan');
  await page.getByRole('link', { name: ' Pengaduan' }).click();
  await page.getByRole('heading', { name: 'Data Pengaduan' }).click();
  const row = page.locator('tr', {
    hasText: '1111111111111111'
  });
  await row.getByRole('button', { name: /Lihat/ }).click();
  await page.getByRole('heading', { name: 'Detail Pengaduan' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await row.getByRole('button', { name: /Komentari/ }).click();
  await page.getByRole('heading', { name: 'Beri Komentar' }).click();
  await page.locator('textarea[name="komentar"]').fill('Pengaduan diterima.');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
});