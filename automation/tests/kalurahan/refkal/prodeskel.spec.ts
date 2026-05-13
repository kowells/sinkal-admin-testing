import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/prodeskel');
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: 'Prodeskel' }).click();
  await page.getByText('Sinkal Testing 1 Refkal').click();
  await page.getByRole('heading', { name: 'Prodeskel' }).click();
  await page.getByRole('button', { name: ' Edit' }).click();
  await page.getByRole('heading', { name: 'Edit Jenis prodeskel' }).click();
  await page.getByRole('textbox', { name: 'Masukan Tahun' }).fill('2026');
  await page.getByPlaceholder('Masukkan Indeks').click();
  await page.getByPlaceholder('Masukkan Indeks').fill('8900');
  await page.getByRole('combobox').selectOption('3');
  await page.getByRole('button', { name: 'Simpan Perubahan' }).click();
  await page.getByText('Detail Prodeskel kalurahan Testing 1: Jenis : Swasembada Tahun : 2026 Indeks :').click();
});