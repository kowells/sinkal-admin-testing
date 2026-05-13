import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-admin/rekap');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Rekap' }).click();
  await page.getByRole('heading', { name: 'Rekap Komponen RPMKal' }).click();
  await page.getByText('RPMKal > Rekap Komponen RPMKal').click();
  await page.locator('#komponen').selectOption('rpmkal_assessmen');
  await page.locator('#tahun').selectOption('2025');
  await page.locator('#komponen').selectOption('rpmkal_capaian');
  await page.locator('#tahun').selectOption('2026');
});