import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rbkal-esakip-perjanjian');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'Perjanjian Kinerja' }).click();
  await page.getByText('Sinkal RBKal E-Sakip').click();
  await page.getByRole('heading', { name: 'Perjanjian Kinerja' }).click();
  await page.getByRole('link', { name: 'Detail' }).nth(5).click();
  await page.getByRole('heading', { name: 'Detail Perjanjian Kinerja' }).click();
  await page.getByRole('button', { name: 'Kembali' }).click();
});