import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('http://sinkal.stechoq.com/admin/belanja');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByText('Sinkal Evaluasi belanja').click();
  await page.getByRole('heading', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('link', { name: 'Lihat' }).first().click();
  await page.getByText('Sinkal Evaluasi belanja Edit').click();
  await page.getByRole('heading', { name: 'Lihat Evaluasi Kualitas' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
});