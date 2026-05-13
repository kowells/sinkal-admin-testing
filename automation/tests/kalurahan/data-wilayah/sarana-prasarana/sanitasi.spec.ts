import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/sanitasi');
  await page.getByRole('link', { name: 'Sanitasi dan Irigasi' }).click();
  await page.getByRole('heading', { name: 'Data Prasarana Sanitasi dan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Sarana Sanitasi' }).click();
  await page.locator('select[name="mck"]').selectOption('Tidak Ada');
  await page.locator('select[name="jamban"]').selectOption('Tidak Ada');
  await page.locator('select[name="pintuAir"]').selectOption('Tidak Ada');
  await page.locator('select[name="irigasi"]').selectOption('Tidak Ada');
  await page.locator('select[name="jamban"]').selectOption('Ada');
  await page.locator('select[name="drainase"]').selectOption('Ada');
  await page.locator('select[name="irigasi"]').selectOption('Ada');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
});