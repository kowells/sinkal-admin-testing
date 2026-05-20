import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/kelompok');
  await page.getByRole('link', { name: ' Jagawarga' }).click();
  await page.getByRole('link', { name: 'Kelompok Jagawarga' }).click();
  await page.getByRole('heading', { name: 'Data Kelompok Jagawarga' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Kelompok Jagawarga' }).click();
  await page.getByRole('dialog', { name: 'Tambah Data Kelompok Jagawarga' }).locator('#dukuh').selectOption('4948');
  await page.getByRole('textbox', { name: 'Nama Kelompok' }).click();
  await page.getByRole('textbox', { name: 'Nama Kelompok' }).fill('awan mendung');
  const dialog = page.getByRole('dialog', { name: 'Tambah Data Kelompok Jagawarga' });
  const editor = dialog.locator('.ck-editor__editable');
  await editor.click();
  await editor.fill('Ini adalah deskripsi kelompok jagawarga');
  await page.getByRole('textbox', { name: 'Kontak' }).click();
  await page.getByRole('textbox', { name: 'Kontak' }).fill('089123456789');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/pdftest.pdf');
  await page.getByRole('button', { name: 'Tambah Data' }).click();


  await page.getByRole('button', { name: ' Lihat' }).first().click();
  await page.getByRole('heading', { name: 'Detail Kelompok Jagawarga' }).click();
  await page.getByRole('button', { name: 'Close' }).click();


  await page.getByRole('link', { name: ' Anggota' }).first().click();
  await page.getByRole('heading', { name: 'Data Anggota Pedukuhan' }).click();
  await page.getByRole('button', { name: ' Tambah' }).click();
  await page.getByRole('heading', { name: 'Tambah Data Anggota' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).click();
  await page.getByRole('textbox', { name: 'Nama' }).fill('test');
  await page.getByRole('textbox', { name: 'Nik' }).click();
  await page.getByRole('textbox', { name: 'Nik' }).fill('123');
  await page.getByRole('dialog', { name: 'Tambah Data Anggota' }).locator('select[name="jk"]').selectOption('PRIA');
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).click();
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).fill('jogja');
  await page.getByRole('dialog', { name: 'Tambah Data Anggota' }).locator('input[name="tanggalLahir"]').fill('1971-12-01');
  await page.getByRole('dialog', { name: 'Tambah Data Anggota' }).locator('input[name="periodeAwal"]').fill('2013-12-01');
  await page.getByRole('dialog', { name: 'Tambah Data Anggota' }).locator('input[name="periodeAkhir"]').fill('2038-12-01');
  await page.getByRole('dialog', { name: 'Tambah Data Anggota' }).locator('select[name="jabatan"]').selectOption('10');
  await page.getByRole('textbox', { name: 'No SK' }).click();
  await page.getByRole('textbox', { name: 'No SK' }).fill('123');
  await page.getByRole('textbox', { name: 'No HP' }).click();
  await page.getByRole('textbox', { name: 'No HP' }).fill('089123456789');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByLabel('Tambah Data Anggota').getByText('Nik harus terdiri dari 16').click();
  await page.getByLabel('Tambah Data Anggota').getByText('Password harus mengandung').click();
  await page.getByRole('textbox', { name: 'Nik' }).click();
  await page.getByRole('textbox', { name: 'Nik' }).fill('1112131415161718');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Q');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty123');
  await page.getByLabel('Tambah Data Anggota').getByText('Minimal 8 karakter mengandung').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty1234567890');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Q');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty1234!@');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  await page.getByRole('button', { name: ' Edit' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Anggota' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();


  await page.getByRole('link', { name: 'Kelompok Jagawarga' }).click();
  await page.getByRole('button', { name: ' Edit' }).first().click();
  await page.getByRole('heading', { name: 'Ubah Data Kelompok Jagawarga' }).click();
  await page.getByRole('textbox', { name: 'Nama Kelompok' }).click();
  await page.getByRole('textbox', { name: 'Nama Kelompok' }).fill('awan mendung edit');
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).click();
  await page.getByRole('button', { name: 'Perbarui Data' }).click();



  await page.getByRole('button', { name: ' Sarpras' }).first().click();
  await page.getByRole('heading', { name: 'Data Sarana Prasarana' }).click();
  await page.locator('input[name="2[jumlah]"]').click();
  await page.locator('input[name="2[jumlah]"]').fill('20');
  await page.locator('input[name="1[jumlah]"]').click();
  await page.locator('input[name="1[jumlah]"]').fill('15');
  await page.getByRole('button', { name: 'Perbarui Data' }).click();
  await page.getByRole('button', { name: ' Sarpras' }).first().click();
  await page.getByRole('button', { name: 'Close' }).click();

  await page.getByRole('button', { name: ' Hapus' }).first().click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).first().click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();

});