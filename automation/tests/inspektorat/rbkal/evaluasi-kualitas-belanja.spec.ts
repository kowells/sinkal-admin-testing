import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/belanja');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByText('Sinkal Evaluasi belanja').click();
  await page.getByRole('heading', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('link', { name: ' Lihat & Edit' }).first().click();
  await page.getByText('Sinkal Evaluasi belanja Edit').click();
  await page.getByRole('heading', { name: 'Edit Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('button', { name: ' Hapus' }).first().click();
  await page.getByRole('button', { name: 'Tutup' }).click();
});