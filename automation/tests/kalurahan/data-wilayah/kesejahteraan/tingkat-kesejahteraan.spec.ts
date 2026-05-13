import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/kesejahteraan/tingkat-kesejahteraan');
  await page.getByRole('link', { name: 'Tingkat Kesejahteraan' }).click();
  await page.getByRole('heading', { name: 'Data Tingkat Kesejahteraan' }).click();
});