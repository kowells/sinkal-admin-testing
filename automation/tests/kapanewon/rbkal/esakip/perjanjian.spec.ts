import { test, expect } from '@playwright/test';

test.use({
  storageState: 'storageState.json'
});

test('test', async ({ page }) => {
  await page.goto('/admin/rbkal-esakip-perjanjian');
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'AKIP', exact: true }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'E-SAKIP' }).click();
  await page.getByRole('link', { name: 'Perjanjian Kinerja' }).click();
  await page.getByRole('heading', { name: 'Perjanjian Kinerja' }).click();
  await page.getByRole('link', { name: 'Detail' }).first().click();
  await page.getByRole('heading', { name: 'Detail Perjanjian Kinerja' }).click();
  await page.getByRole('button', { name: 'Verifikasi Data' }).click();
  await page.getByRole('heading', { name: 'Verifikasi Data' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kritik dan Saran' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kritik dan Saran' }).fill('test');
  await page.getByRole('button', { name: 'Verifikasi', exact: true }).click();
  await page.getByRole('heading', { name: 'Berhasil!' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('link', { name: 'Detail' }).first().click();
  await page.getByRole('button', { name: 'Batalkan Verifikasi' }).click();
  await page.getByRole('heading', { name: 'Batalkan Verifikasi?' }).click();
  await page.getByRole('button', { name: 'Ya, Batalkan!' }).click();
  await page.getByRole('heading', { name: 'Berhasil!' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
});