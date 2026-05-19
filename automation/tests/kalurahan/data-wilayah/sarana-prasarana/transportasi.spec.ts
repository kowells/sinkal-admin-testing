import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/transportasi');
  await page.getByRole('link', { name: 'Transportasi' }).click();
  await page.getByRole('heading', { name: 'Data Prasarana Transportasi' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('heading', { name: 'Ubah Data Sarana Transportasi' }).click();
  await page.locator('input[name="jalanDesa"]').click();
  await page.locator('input[name="jalanDesa"]').click();
  await page.locator('input[name="jalanDesa"]').fill('1');
  await page.locator('input[name="jalanKabupaten"]').click();
  await page.locator('input[name="jalanKabupaten"]').fill('2');
  await page.locator('input[name="jalanProvinsi"]').dblclick();
  await page.locator('input[name="jalanProvinsi"]').fill('3');
  await page.locator('input[name="jalanNasional"]').dblclick();
  await page.locator('input[name="jalanNasional"]').fill('4');
  await page.locator('select[name="perahuMotor"]').selectOption('Tidak Ada');
  await page.locator('select[name="lapanganTerbang"]').selectOption('Tidak Ada');
  await page.locator('select[name="jembatanBesi"]').selectOption('Tidak Ada');
  await page.locator('select[name="tambatanPerahu"]').selectOption('Ada');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('button', { name: 'Batalkan' }).click();
});