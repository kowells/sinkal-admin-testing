import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/data-layanan');
  await page.getByRole('link', { name: ' Layanan' }).click();
  await page.getByRole('heading', { name: 'Data Pelayanan Publik' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Layanan' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/profildumi.jpg');
  await page.getByRole('textbox', { name: 'Nama Layanan' }).click();
  await page.getByRole('textbox', { name: 'Nama Layanan' }).fill('layanan test');
  await page.getByRole('dialog', { name: 'Tambah Data Layanan' }).getByRole('combobox').selectOption('KEPENDUDUKAN_DAN_PENCATATAN_SIPIL');
  await page.getByText('+ Tambah Persyaratan').first().click();
  await page.getByRole('textbox', { name: 'Detail Persyaratan' }).click();
  await page.getByRole('textbox', { name: 'Detail Persyaratan' }).fill('ktp');
  await page.getByText('+ Tambah Persyaratan').nth(1).click();
  await page.getByRole('textbox', { name: 'Detail Prosedur' }).click();
  await page.getByRole('textbox', { name: 'Detail Prosedur' }).fill('datang ke kantor');
  await page.getByRole('textbox', { name: 'Biaya/Tarif Layanan' }).click();
  await page.getByRole('textbox', { name: 'Biaya/Tarif Layanan' }).fill('gratis');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  const row = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^layanan test$/ })
  });

  await row.getByRole('button', { name: /Lihat/ }).click();

  await page.getByLabel('layanan test').getByText('layanan test').click();
  await page.getByRole('button', { name: 'Close' }).click();

  await row.getByRole('button', { name: /Edit/ }).click();
  await page.getByRole('heading', { name: 'Ubah Data Layanan' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/backgrounddummy.jpg');
  await page.getByRole('textbox', { name: 'Nama Layanan' }).click();
  await page.getByRole('textbox', { name: 'Nama Layanan' }).fill('layanan test edit');
  await page.getByText('+ Tambah Persyaratan').nth(2).click();
  await page.getByRole('textbox', { name: 'Detail Persyaratan' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Detail Persyaratan' }).nth(1).fill('kk');
  await page.getByText('+ Tambah Persyaratan').nth(3).click();
  await page.getByRole('textbox', { name: 'Detail Prosedur' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Detail Prosedur' }).nth(1).fill('bawa berkas');
  await page.getByRole('button', { name: 'Ubah Data' }).click();

  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^layanan test edit$/ })
  });

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});