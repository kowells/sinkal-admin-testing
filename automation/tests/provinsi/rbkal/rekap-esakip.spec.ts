import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/esakip-admin/rekap-RbKal');
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Rekap E-SAKIP' }).click();
  await page.getByRole('heading', { name: 'Rekap E-SAKIP' }).click();
});