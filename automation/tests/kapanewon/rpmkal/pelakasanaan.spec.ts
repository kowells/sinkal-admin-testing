import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storageState.json'
});

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-pelaksanaan');
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: ' RPMKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).first().click();
  await page.getByRole('link', { name: 'Pelaksanaan' }).click();
  await page.getByRole('heading', { name: 'Aksi Pelaksanaan' }).click();
  await page.getByRole('link', { name: 'Lihat Data' }).first().click();
  await page.getByRole('heading', { name: 'Lihat Pelaksanaan' }).click();
  await page.getByRole('link', { name: 'Kembali' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: ' Unduh Data' }).click();
  const download = await downloadPromise;
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('sari');
  await page.getByRole('searchbox', { name: 'Search:' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search:' }).fill('dono');
  await page.getByRole('searchbox', { name: 'Search:' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('');
});