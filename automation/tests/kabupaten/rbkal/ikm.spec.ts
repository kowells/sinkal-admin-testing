import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/ikm');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'IKM' }).click();
  await page.getByRole('heading', { name: 'Data Indeks Kepuasan' }).click();
  await page.getByText('Sinkal IKM').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lihat Dokumen' }).first().click();
  const page1 = await page1Promise;
});