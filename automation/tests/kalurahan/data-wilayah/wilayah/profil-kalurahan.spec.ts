import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/wilayah/profil-kalurahan');
  await page.getByRole('link', { name: 'Profil Kalurahan' }).click();
  await page.getByRole('heading', { name: 'Data Profil Kalurahan' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Profil Kalurahan' }).click();
  await page.locator('input[name="alamat"]').click();
  await page.locator('input[name="alamat"]').fill('desa test');
  await page.locator('textarea[name="visi"]').fill('visi test edit');
  await page.locator('textarea[name="misi"]').fill('misi edit');
  await page.locator('textarea[name="profil_lurah"]').fill('profil baru edit');
  await page.getByLabel('Ubah Data Profil Kalurahan').getByRole('button', { name: 'Choose File' }).click();
  await page.getByLabel('Ubah Data Profil Kalurahan').getByRole('button', { name: 'Choose File' }).setInputFiles('assets/profildumi.jpg');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByText('Upload Landing Page').click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('assets/backgrounddummy.jpg');
  await page.locator('#urutan').selectOption('4');

  await Promise.all([
    page.waitForURL('**/profil-kalurahan'),
    page.locator('button[name="form-ubah-landingpage"]').click()
  ]);
  await expect(page).toHaveURL(/profil-kalurahan/);

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: /Unduh/i }).click()
  ]);

  expect(download.suggestedFilename()).toBeTruthy();
});