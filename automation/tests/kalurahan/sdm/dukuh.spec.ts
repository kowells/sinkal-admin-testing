import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('Dukuh Page', async ({ page }) => {
  await page.goto('/admin/ketua-pelaksana');
  await expect(page.getByText('Data Dukuh')).toBeVisible();
})

test('CRUD Data Dukuh', async ({ page }) => {
  await page.goto('/admin/ketua-pelaksana');
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Pedukuhan').getByText('Nama padukuhan wajib diisi.').click();
  await page.getByLabel('Tambah Data Pedukuhan').getByText('Ketua wajib diisi.').click();
  await page.getByRole('textbox', { name: 'Nama Pedukuhan' }).click();
  await page.getByRole('textbox', { name: 'Nama Pedukuhan' }).fill('testing');
  await page.getByRole('textbox', { name: 'Nama Dukuh' }).click();
  await page.getByRole('textbox', { name: 'Nama Dukuh' }).fill('test3');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  const row = page.locator('tr', { hasText: 'test3' });

  await row.getByRole('button', { name: /Edit/ }).click();

  await page.getByRole('textbox', { name: 'Nama Pedukuhan' }).click();
  await page.getByRole('textbox', { name: 'Nama Pedukuhan' }).fill('testing edit');
  await page.getByRole('textbox', { name: 'Nama Dukuh' }).click();
  await page.getByRole('textbox', { name: 'Nama Dukuh' }).fill('test edit');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();

  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^test edit$/ })
  });

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});