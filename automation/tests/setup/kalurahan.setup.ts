import { test as setup, expect } from '@playwright/test';

setup('login as kalurahan', async ({ page }) => {
  await page.goto('/admin/login');

  await page.getByRole('textbox', { name: 'Email' })
    .fill('kalurahan1_testing@sinkal.jogjaprov.go.id');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/admin/);

  await page.context().storageState({
    path: 'storage-state/kalurahan.json'
  });
});