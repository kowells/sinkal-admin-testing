import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/assesment');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Assesmen' }).first().click();
  await page.getByRole('banner').getByText('Assesmen').click();
  await page.getByRole('heading', { name: 'Assesmen RBKAL' }).click();
  // await page.getByRole('link', { name: 'Lihat' }).first().click();
  // await page.getByText('Sinkal Testing 1 RBKal').click();
  // await page.getByRole('heading', { name: 'Lembar Kerja Asesmen' }).click();
  // await page.getByRole('link', { name: 'Kembali' }).click();
});