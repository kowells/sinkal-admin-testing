import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/coreform');

  // masuk RBKal
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Rekap RBKal' }).click();

  // buka assesment (popup)
  const popup1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lihat Assesment' }).first().click();
  const popup1 = await popup1Promise;

  await popup1.getByRole('heading', { name: 'Assesmen RBKAL' }).click();

  // ⬅️ setelah selesai, TUTUP popup
  await popup1.close();

  // kembali ke main page
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Rekap RBKal' }).click();

  // buka rencana aksi (popup lagi)
  const popup2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Lihat Rencana Aksi' }).first().click();
  const popup2 = await popup2Promise;

  await popup2.getByRole('heading', { name: 'Rencana Aksi' }).click();

  await popup2.close();

  // balik lagi ke main page
  await page.getByRole('link', { name: 'RBKal' }).click();
  await page.getByRole('link', { name: 'Rekap RBKal' }).click();

  // buka sakip (popup lagi)
  // const popup3Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Lihat Sakip' }).first().click();
  // const popup3 = await popup3Promise;

  // await popup3.close();


  await page.locator('#kabupaten').selectOption('01002');
  await page.getByRole('button', { name: 'Tampilkan' }).click();

  await page.getByRole('spinbutton').fill('2025');
  await page.getByRole('button', { name: 'Tampilkan' }).click();

  await page.locator('#kabupaten').selectOption('01004');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
});