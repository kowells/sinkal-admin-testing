import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/bkk-refkal-kecamatan');
  await page.getByRole('link', { name: ' BKK' }).click();
  // await page.getByRole('link', { name: ' BKK' }).click();
  await page.getByRole('link', { name: 'BKK Refkal' }).click();
  // await page.getByRole('heading', { name: 'BKK Refkal' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Perencanaan' }).click();
  await page.getByRole('link', { name: 'Penetapan' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Pelaksanaan' }).click();
  // await page.getByRole('main').getByRole('link', { name: 'Perencanaan' }).click();
  // await page.getByRole('link', { name: 'Lihat Data' }).first().click();
  // await page.getByRole('heading', { name: 'Detail BKK Refkal ' }).click();
  // await page.getByRole('link', { name: 'Kembali' }).click();
  // await page.getByLabel('Kalurahan/Kelurahan').selectOption('370');
  // await page.getByRole('button', { name: 'Tampilkan' }).click();
  // await page.getByRole('link', { name: 'Penetapan' }).click();
  // await page.getByRole('link', { name: 'Lihat Data' }).click();
  // await page.getByRole('heading', { name: 'Detail BKK Refkal ' }).click();
  // await page.getByRole('link', { name: 'Kembali' }).click();
});