import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/esakip-admin/perjanjian-kinerja');
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Perjanjian Kinerja' }).click();
  await page.getByRole('heading', { name: 'Perjanjian Kinerja' }).click();
  await page.getByText('E-Sakip > Perjanjian Kinerja').click();
  await page.getByRole('link', { name: 'Lihat data' }).first().click();
  await page.getByRole('heading', { name: 'Detail Perjanjian Kinerja' }).click();
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Perjanjian Kinerja' }).click();
  await page.getByRole('link', { name: 'Lihat data' }).nth(1).click();
  await page.getByRole('heading', { name: 'Detail Perjanjian Kinerja' }).click();
});