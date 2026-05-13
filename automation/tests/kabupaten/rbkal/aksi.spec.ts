import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/aksi');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).nth(1).click();
  await page.getByText('Sinkal Rencana Aksi').click();
  await page.getByRole('heading', { name: 'Rencana Aksi' }).click();
  await page.getByRole('link', { name: 'Lihat' }).first().click();
  await page.getByRole('heading', { name: 'Lihat Rencana Aksi' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).nth(1).click();

});