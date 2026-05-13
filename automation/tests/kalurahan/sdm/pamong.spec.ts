import { test, expect } from '@playwright/test';



test('CRUD Data Pamong', async ({ page }) => {

    await page.goto('/admin/anggota-organisasi');

    await expect(page.getByText('Data Pamong')).toBeVisible();

    // buka modal tambah
    await page.getByRole('button', { name: ' Tambah' }).click();
    await page.getByRole('button', { name: 'Tambah Data' }).click();

    const tambahDialog = page.getByRole('dialog', { name: 'Tambah Personil Kalurahan' });

    await expect(tambahDialog).toBeVisible();

    // upload file
    await page.getByRole('button', { name: 'Choose File' })
        .setInputFiles('assets/profildumi.jpg');

    // isi form
    await tambahDialog.locator('select[name="jabatan"]').selectOption('4');
    await tambahDialog.locator('select[name="sub_jabatan"]').selectOption('4');

    await tambahDialog.locator('input[name="periode"]').fill('2026');
    await tambahDialog.locator('input[name="nama"]').fill('testing baru');

    await tambahDialog.locator('input[name="nik"]').fill('1112131415161716');
    await tambahDialog.getByRole('textbox', { name: 'Nip' }).fill('123');

    await tambahDialog.locator('input[name="pangkat"]').fill('testdulu');
    await tambahDialog.locator('input[name="golongan"]').fill('-');

    await tambahDialog.locator('select[name="jk"]').selectOption('PRIA');

    await tambahDialog.getByRole('textbox', { name: 'Tempat Lahir' }).fill('jogja');
    await tambahDialog.getByPlaceholder('Tanggal Lahir').fill('1997-12-01');

    await tambahDialog.locator('select[name="status_menikah"]').selectOption('BELUM_MENIKAH');
    await tambahDialog.locator('select[name="gol_darah"]').selectOption('AB');
    await tambahDialog.locator('select[name="pendidikan"]').selectOption('SARJANA_STRATA_I');

    await tambahDialog.locator('input[name="pelatihan"]').fill('-');

    await tambahDialog.getByPlaceholder('Tahun Mulai').fill('2020');
    await tambahDialog.getByPlaceholder('Tahun Berakhir').fill('2040');

    await tambahDialog.getByRole('textbox', { name: 'Alamat' }).fill('jalan test');

    // submit tambah
    await page.getByRole('button', { name: 'Tambah Data' }).click();

    // pastikan data muncul di tabel
    const row = page.getByRole('row').filter({ hasText: 'testing baru' });

    await expect(row).toBeVisible();

    // detail
    await row.locator('.btn-secondary').click();

    await expect(
        page.getByText('Detail Personil Kalurahan')
    ).toBeVisible();

    await page.getByRole('button', { name: 'Close' }).click();

    // edit
    await row.locator('.btn-primary').click();

    const editDialog = page.getByRole('dialog', { name: 'Ubah Data Personil' });

    await editDialog.locator('input[name="nama"]').fill('testing baru edit');

    await page.getByRole('button', { name: 'Perbarui Data' }).click();

    // pastikan nama berubah
    const updatedRow = page.getByRole('row').filter({ hasText: 'testing baru edit' });

    await expect(updatedRow).toBeVisible();

    // detail lagi
    await updatedRow.locator('.btn-secondary').click();

    await page.getByRole('button', { name: 'Close' }).click();

    // delete
    await updatedRow.locator('.btn-danger').click();

    await page.getByRole('button', { name: 'Tutup' }).click();

    await updatedRow.locator('.btn-danger').click();

    await page.getByRole('button', { name: 'Iya, hapus' }).click();

    // pastikan data hilang
    await expect(updatedRow).not.toBeVisible();

});