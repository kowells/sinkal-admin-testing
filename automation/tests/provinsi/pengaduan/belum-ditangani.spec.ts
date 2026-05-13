import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/pengaduan/belum-ditangani');
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('heading', { name: 'Pengaduan Belum Ditangani' }).click();
  await page.getByText('Pengaduan > Lebih dari 2').click();
});