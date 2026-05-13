import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-perencanaan');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Perencanaan' }).click();
  await page.getByRole('heading', { name: 'Aksi Perencanaan' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh Data' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'Lihat Data' }).first().click();
  await page.getByRole('heading', { name: 'Lihat Perencanaan' }).click();
  await page.getByRole('button', { name: 'Unduh Toggle Dropdown' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('sardo');
  await page.getByRole('searchbox', { name: 'Search:' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search:' }).fill('sari');
  await page.getByRole('searchbox', { name: 'Search:' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
});