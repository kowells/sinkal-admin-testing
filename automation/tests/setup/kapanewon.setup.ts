import { test as setup, expect } from '@playwright/test';

setup('login as kecamatan', async ({ page }) => {
  await page.goto('/admin/login');

  await page.getByRole('textbox', { name: 'Email' })
    .fill('kapanewon1_testing@sinkal.jogjaprov.go.id');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/admin/);

  await page.context().storageState({
    path: 'storage-state/kapanewon.json'
  });
});