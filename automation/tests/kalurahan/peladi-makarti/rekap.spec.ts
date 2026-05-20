import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/peladi-makarti/rekap');
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: ' Peladi Makarti' }).click();
  await page.getByRole('link', { name: 'Rekap Ketenagakerjaan' }).click();
  await page.getByRole('heading', { name: 'Rekap Ketenagakerjaan' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data' }).click();
  await page.getByRole('button', { name: 'Simpan Data' }).click();
  await page.getByLabel('Tambah Data').getByText('Tahun wajib diisi.').click();
  await page.getByLabel('Tambah Data').getByText('Jumlah Penganggur wajib diisi.').click();
  await page.getByLabel('Tambah Data').getByText('Jumlah PMI wajib diisi.').click();
  await page.getByLabel('Tambah Data').getByText('Jumlah Purna PMI wajib diisi.').click();
  await page.getByLabel('Tambah Data').getByText('Jumlah Angkatan kerja Disabilitas wajib diisi.').click();

  await page.getByRole('dialog', { name: 'Tambah Data' }).getByRole('combobox').selectOption('2026');
  await page.getByRole('textbox', { name: 'Jumlah Penganggur' }).click();
  await page.getByRole('textbox', { name: 'Jumlah Penganggur' }).fill('3');
  await page.getByRole('textbox', { name: 'Jumlah PMI' }).click();
  await page.getByRole('textbox', { name: 'Jumlah PMI' }).fill('2');
  await page.getByRole('textbox', { name: 'Jumlah Purna PMI' }).click();
  await page.getByRole('textbox', { name: 'Jumlah Purna PMI' }).fill('2');
  await page.getByRole('textbox', { name: 'Jumlah Angkatan kerja' }).click();
  await page.getByRole('textbox', { name: 'Jumlah Angkatan kerja' }).fill('0');
  // await page.getByRole('button', { name: 'Simpan Data' }).click();
  const dialog = page.getByRole('dialog', { name: 'Tambah Data' });

  const simpanBtn = dialog.locator('button[name="tambah"]');

  await expect(simpanBtn).toBeVisible();
  await expect(simpanBtn).toBeEnabled();

  await simpanBtn.click();

  const tahun = '2026';

  await page.locator('tr', { hasText: tahun }).locator('button.btn-edit').click();
  // await page.getByRole('button', { name: ' Edit' }).nth(1).click();
  await page.getByRole('heading', { name: 'Ubah Data' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('tr', { hasText: tahun }).locator('button.btn-edit').click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.locator('tr', { hasText: tahun }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.locator('tr', { hasText: tahun }).locator('button.btn-danger').click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});