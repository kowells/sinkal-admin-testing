import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/assesment');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Asesmen' }).click();
  await page.getByRole('heading', { name: 'Assesmen RBKAL' }).click();
  await page.getByText('Sinkal RBKal Assesmen').click();
  await page.getByRole('link', { name: 'Lihat' }).nth(1).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
  await page.getByRole('link', { name: 'Lihat' }).nth(3).click();
  await page.getByRole('button', { name: 'Catatan/Review' }).click();
  await page.getByRole('heading', { name: 'Ubah Catatan/Review' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});