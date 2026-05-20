import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/data-lembaga');
  await page.getByRole('link', { name: ' Lembaga' }).click();
  await page.getByRole('heading', { name: 'Data Lembaga Masyarakat' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Lembaga Masyarakat' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/profildumi.jpg');
  await page.getByRole('textbox', { name: 'Nama Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Nama Lembaga' }).fill('lembaga test');
  await page.getByRole('dialog', { name: 'Tambah Data Lembaga Masyarakat' }).getByRole('combobox').selectOption('PEMERINTAHAN');
  await page.getByRole('textbox', { name: 'Nama Ketua' }).click();
  await page.getByRole('textbox', { name: 'Nama Ketua' }).fill('ketua test');
  await page.getByRole('dialog', { name: 'Tambah Data Lembaga Masyarakat' }).getByPlaceholder('Jumlah Anggota').click();
  await page.getByRole('dialog', { name: 'Tambah Data Lembaga Masyarakat' }).getByPlaceholder('Jumlah Anggota').fill('3');
  await page.getByRole('textbox', { name: 'Deskripsi Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Deskripsi Lembaga' }).fill('desk test');
  await page.getByRole('textbox', { name: 'Alamat Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Alamat Lembaga' }).fill('alamat test');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  const row = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^lembaga test$/ })
  });

  await row.getByRole('button', { name: /Edit/ }).click();
  await page.getByRole('heading', { name: 'Ubah Data Lembaga Masyarakat' }).click();
  await page.getByRole('textbox', { name: 'Nama Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Nama Lembaga' }).fill('lembaga test edit');
  await page.getByRole('textbox', { name: 'Nama Ketua' }).click();
  await page.getByRole('textbox', { name: 'Nama Ketua' }).fill('ketua test edit');
  await page.getByRole('dialog', { name: 'Ubah Data Lembaga Masyarakat' }).getByPlaceholder('Jumlah Anggota').click();
  await page.getByRole('dialog', { name: 'Ubah Data Lembaga Masyarakat' }).getByPlaceholder('Jumlah Anggota').fill('5');
  await page.getByRole('textbox', { name: 'Deskripsi Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Deskripsi Lembaga' }).fill('desk test edit');
  await page.getByRole('textbox', { name: 'Alamat Lembaga' }).click();
  await page.getByRole('textbox', { name: 'Alamat Lembaga' }).fill('alamat test edit');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/backgrounddummy.jpg');
  await page.getByRole('button', { name: 'Ubah Data' }).click();

  const row2 = page.locator('tr').filter({
    has: page.locator('td', { hasText: /^lembaga test edit$/ })
  });

  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await row2.getByRole('button', { name: /Hapus/ }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});