import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/main');
  await page.getByRole('link', { name: ' Dashboard' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
});