import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/desa-mandiri-budaya');
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: 'Desa Mandiri Budaya' }).click();
  await page.getByText('Sinkal Testing 1 Refkal Desa').click();
  await page.getByRole('heading', { name: 'Desa Mandiri Budaya' }).click();
  await page.getByRole('button', { name: ' Edit' }).click();
  await page.getByRole('heading', { name: 'Edit Jenis Desa Mandiri Budaya' }).click();
  await page.locator('select[name="code"]').selectOption('2');
  await page.getByLabel('Tahun').selectOption('2026');
  await page.getByRole('button', { name: 'Simpan Perubahan' }).click();
  await page.getByText('Berhasil! Data berhasil').click();
  await page.getByText('Apakah kalurahan Testing 1 termasuk desa mandiri budaya? Tidak').click();
});