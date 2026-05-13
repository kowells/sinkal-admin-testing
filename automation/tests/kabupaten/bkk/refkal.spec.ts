import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/bkk-refkal-kabupaten');
  await page.getByRole('link', { name: ' BKK' }).click();
  await page.getByRole('link', { name: ' BKK' }).click();
  await page.getByRole('link', { name: 'BKK Refkal' }).click();
  await page.getByRole('heading', { name: 'BKK Refkal' }).click();
  await page.getByText('Sinkal BKK BKK Refkal').click();
  await page.getByRole('main').getByRole('link', { name: 'Perencanaan' }).click();
  await page.getByRole('link', { name: 'Penetapan' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Pelaksanaan' }).click();
});