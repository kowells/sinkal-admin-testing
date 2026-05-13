import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/kebersihan');
  await page.getByRole('link', { name: 'Kebersihan' }).click();
  await page.getByRole('heading', { name: 'Data Prasarana Kebersihan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Sarana Kebersihan' }).click();
  await page.locator('select[name="hidran"]').selectOption('Tidak Ada');
  await page.locator('select[name="penampung"]').selectOption('Tidak Ada');
  await page.locator('select[name="mataAir"]').selectOption('Tidak Ada');
  await page.locator('select[name="pengelolaanAir"]').selectOption('Ada');
  await page.locator('select[name="sumurGali"]').selectOption('Tidak Ada');
  await page.locator('select[name="tangkiAir"]').selectOption('Tidak Ada');
  await page.locator('select[name="hidran"]').selectOption('Ada');
  await page.locator('select[name="sumurPompa"]').selectOption('Tidak Ada');
  await page.locator('select[name="sumurPompa"]').selectOption('Ada');
  await page.locator('select[name="mataAir"]').selectOption('Ada');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
});