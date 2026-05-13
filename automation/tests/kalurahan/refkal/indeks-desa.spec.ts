import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/indeks-desa');
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: ' Refkal' }).click();
  await page.getByRole('link', { name: 'Indeks Desa' }).click();
  await page.getByText('Sinkal Testing 1 Refkal').click();
  await page.getByRole('heading', { name: 'Indeks Desa' }).click();
  await page.getByRole('link', { name: 'Tambah Nilai' }).click();
  await page.getByRole('banner').getByText('Tambah Nilai Indeks Desa').click();
  await page.getByRole('heading', { name: 'Tambah Nilai Indeks Desa' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('2025');
  await page.locator('input[name="dld"]').click();
  await page.locator('input[name="dld"]').fill('20');
  await page.locator('input[name="ds"]').click();
  await page.locator('input[name="ds"]').fill('30');
  await page.locator('input[name="de"]').click();
  await page.locator('input[name="de"]').fill('39.99');
  await page.locator('input[name="dl"]').click();
  await page.locator('input[name="dl"]').fill('20');
  await page.locator('input[name="da"]').click();
  await page.locator('input[name="da"]').fill('10');
  await page.locator('input[name="dtpd"]').click();
  await page.locator('input[name="dtpd"]').fill('1');

  await page.getByRole('button', { name: 'Tambah Nilai' }).click();
  await page.getByRole('button', { name: ' Edit' }).nth(2).click();
  await page.locator('input[name="de"]').click();
  await page.locator('input[name="de"]').fill('11');
  await page.getByRole('button', { name: 'Update Nilai' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: ' Hapus' }).nth(2).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: ' Hapus' }).nth(2).click();
});