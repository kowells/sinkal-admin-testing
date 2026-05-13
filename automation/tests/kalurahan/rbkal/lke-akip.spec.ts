import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/akip');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'LKE AKIP' }).click();
  await page.getByText('Sinkal Testing 1 RBKal Akip').click();
  await page.getByRole('heading', { name: 'Akip' }).click();
  await page.getByRole('link', { name: 'Tambah' }).click();
  await page.getByText('Sinkal Testing 1 RBKal Akip').click();
  await page.getByRole('heading', { name: 'Tambah Akip' }).click();
  await page.locator('input[name="dokumenFiles[1]"]').click();
  await page.locator('input[name="dokumenFiles[1]"]').setInputFiles('assets/pdftest.pdf');
  await page.locator('input[name="dokumenFiles[2]"]').click();
  await page.locator('input[name="dokumenFiles[2]"]').setInputFiles('assets/pdftest.pdf');
  await page.locator('input[name="dokumenFiles[11]"]').click();
  await page.locator('input[name="dokumenFiles[11]"]').setInputFiles('assets/pdftest.pdf');
  await page.locator('input[name="dokumenFiles[21]"]').click();
  await page.locator('input[name="dokumenFiles[21]"]').setInputFiles('assets/pdftest.pdf');
  await page.locator('input[name="dokumenFiles[33]"]').click();
  await page.locator('input[name="dokumenFiles[33]"]').setInputFiles('assets/pdftest.pdf');
  await page.getByRole('button', { name: 'Tambah' }).click();
  await page.getByRole('link', { name: 'LKE AKIP' }).click();

  const currentYear = new Date().getFullYear();

  await page.getByRole('row', {
    name: `Testing 1 ${currentYear}`
  }).getByRole('button').click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('row', {
    name: `Testing 1 ${currentYear}`
  }).getByRole('button').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});