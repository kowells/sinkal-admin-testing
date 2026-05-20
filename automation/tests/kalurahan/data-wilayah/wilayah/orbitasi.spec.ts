import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('/admin/wilayah/orbitasi');
    await page.getByRole('link', { name: ' Data Wilayah' }).click();
    await page.getByRole('link', { name: ' Data Wilayah' }).click();
    await page.getByRole('link', { name: 'Wilayah', exact: true }).click();
    await page.getByRole('link', { name: 'Orbitasi' }).click();
    await page.getByRole('heading', { name: 'Orbitasi Wilayah Kalurahan' }).click();
    await page.getByRole('button', { name: ' Ubah' }).click();
    await page.locator('input[name="kecamatan"]').fill('1');
    await page.locator('input[name="kabupaten"]').fill('1');
    await page.locator('input[name="sertifikat"]').fill('1');
    await page.locator('input[name="kota"]').fill('1');
    await page.locator('input[name="provinsi"]').fill('1');
    await page.locator('input[name="kas"]').fill('1');
    await page.getByRole('button', { name: 'Ubah Data' }).click();
    await page.getByRole('button', { name: ' Ubah' }).click();
    await page.locator('input[name="kecamatan"]').fill('12');
    await page.locator('input[name="kabupaten"]').fill('12');
    await page.locator('input[name="sertifikat"]').fill('1');
    await page.locator('input[name="kota"]').fill('1');
    await page.locator('input[name="provinsi"]').fill('1');
    await page.locator('input[name="kas"]').fill('1');
    await page.getByRole('button', { name: 'Ubah Data' }).click();
    await page.getByRole('button', { name: 'Batalkan' }).click();


    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: /Unduh/i }).click()
    ]);

    expect(download.suggestedFilename()).toBeTruthy();
});