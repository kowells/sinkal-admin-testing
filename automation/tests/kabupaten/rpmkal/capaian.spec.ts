import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-capaian-asesor');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Capaian Sasaran' }).click();
  await page.getByRole('heading', { name: 'Capaian Sasaran' }).click();
  await page.getByRole('combobox').selectOption('01002011');
  await page.getByRole('link', { name: 'Detail' }).first().click();
  await page.getByRole('heading', { name: 'Detail Capaian Sasaran' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});