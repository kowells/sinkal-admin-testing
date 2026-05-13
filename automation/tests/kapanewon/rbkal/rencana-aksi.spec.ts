import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storageState.json'
});

test('test', async ({ page }) => {
  await page.goto('/admin/aksi');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Rencana Aksi' }).nth(1).click();
  await page.getByRole('heading', { name: 'Rencana Aksi' }).click();
  await page.locator('select[name="filter"]').selectOption('perubahan');
  await page.goto('http://sinkal.stechoq.com/admin/aksi?kategori=perubahan&qw=');
  await page.locator('select[name="filter"]').selectOption('utama');
  await page.goto('http://sinkal.stechoq.com/admin/aksi?kategori=utama&qw=');
  await page.getByRole('link', { name: 'Lihat' }).first().click();
  await page.getByRole('heading', { name: 'Lihat Rencana Aksi' }).click();
  await page.goto('http://sinkal.stechoq.com/admin/aksi?kategori=utama&qw=');
  await page.getByRole('link', { name: 'Lihat' }).nth(1).click();
  // await page.getByRole('row', { name: '1 Sardonoharjo 2024 2027' }).getByRole('button').click();
  // await page.goto('http://sinkal.stechoq.com/admin/aksi?kategori=utama&qw=');
});