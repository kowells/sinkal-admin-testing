import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-assesmen');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Assesmen' }).click();
  await page.getByRole('heading', { name: 'Assesmen' }).click();
  await page.getByRole('combobox').first().selectOption('01002001');
  await page.getByRole('combobox').first().selectOption('01002004');
  await page.getByRole('combobox').nth(1).selectOption('2025');
  await page.getByRole('link', { name: 'Detail' }).nth(4).click();
  await page.getByRole('heading', { name: 'Detail Assesmen' }).click();
  await page.locator('#tbl-parent-0').click();
  await page.locator('#tbl-parent-0').click();
  await page.locator('#tbl-parent-4').click();
  await page.locator('#tbl-parent-4').click();
  await page.getByRole('link', { name: 'Kembali' }).click();
});