import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/profil-admin');
  await page.locator('div').filter({ hasText: /^Admin Provinsi$/ }).click();
  await page.getByRole('link', { name: 'Profil' }).click();
  await page.getByRole('heading', { name: 'Profil Pengguna' }).first().click();
  await page.getByRole('heading', { name: 'Profil Pengguna' }).nth(1).click();
  await page.getByRole('heading', { name: 'Ubah Password' }).click();
});