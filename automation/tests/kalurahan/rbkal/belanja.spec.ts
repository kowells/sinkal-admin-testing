import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/belanja');

  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByText('Sinkal Testing 1 Evaluasi').click();

  await page.getByRole('link', { name: 'Tambah' }).click();

  await page.locator('input[name="tahun"]').fill('2026');
  await page.getByPlaceholder('Masukkan Total Anggaran').fill('500000000');

  // ✅ handle navigation
  await Promise.all([
    page.waitForURL('**/edit'),
    page.getByRole('button', { name: 'Tambah' }).click(),
  ]);

  // ===============================
  // ✅ HANDLE DYNAMIC FILE INPUTS
  // ===============================
  const uploadAllDokumen = async (section: number) => {
    const inputs = page.locator(
      `input[type="file"][name^="jawab[${section}]"][name$="[dokumen]"]`
    );

    for (let i = 0; i < await inputs.count(); i++) {
      await inputs.nth(i).setInputFiles('assets/pdftest.pdf');
    }
  };

  // upload semua section
  await uploadAllDokumen(1);
  await uploadAllDokumen(2);
  await uploadAllDokumen(3);
  await uploadAllDokumen(4);
  await uploadAllDokumen(5);

  // ===============================
  // ✅ HANDLE ANGGRAN SECTION 1 (spesifik row)
  // ===============================
  await page.getByRole('row', { name: '1 Anggaran dan Realisasi' })
    .getByPlaceholder('Masukkan Total Anggaran')
    .fill('90000000');

  await page.getByRole('row', { name: 'b. Rasio Alokasi Anggaran' })
    .getByPlaceholder('Masukkan Total Anggaran')
    .fill('9000000');

  await page.getByRole('row', { name: 'c. Rasio Alokasi Anggaran' })
    .getByPlaceholder('Masukkan Total Anggaran')
    .fill('9000000');

  await page.getByRole('row', { name: 'd. Rasio Alokasi Anggaran' })
    .getByPlaceholder('Masukkan Total Anggaran')
    .fill('7999999');

  await page.getByRole('row', { name: 'e. Jumlah jenis kegiatan non' })
    .getByPlaceholder('Masukkan Total Anggaran')
    .fill('100000');

  // ===============================
  // ✅ HANDLE ANGGRAN SECTION 5 (dynamic)
  // ===============================
  const anggaranInputs = page.locator(
    'input[name^="jawab[5]"][name$="[anggaran]"]'
  );

  for (let i = 0; i < await anggaranInputs.count(); i++) {
    await anggaranInputs.nth(i).fill('2000000');
  }

  // ===============================
  // ✅ NEXT FLOW
  // ===============================
  await page.getByRole('button', { name: 'Edit' }).click();

  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('link', { name: 'Lihat' }).nth(1).click();

  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();

  // download
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'Testing 1 2026' }).getByRole('button').click();
  await downloadPromise;

  await page.getByRole('button', { name: 'Admin Testing 1 Admin Testing' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('inspektorat_gunungkidul@sinkal.jogjaprov.go.id');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' RBKal' }).click();
  await page.getByRole('link', { name: 'Evaluasi Kualitas Belanja' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('tes');
  await page.getByRole('button', { name: ' Hapus' }).nth(1).click();
  await page.getByRole('button', { name: 'Tutup' }).click();
  await page.getByRole('button', { name: ' Hapus' }).nth(1).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});