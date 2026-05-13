import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kesejahteraan/pekerjaan');
  await page.getByRole('link', { name: 'Pekerjaan' }).click();
  await page.getByRole('heading', { name: 'Data Pekerjaan' }).click();
});