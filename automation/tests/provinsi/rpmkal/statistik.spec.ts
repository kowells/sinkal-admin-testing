import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/rpmkal-admin/statistik');
  await page.getByRole('link', { name: 'RPMKal' }).click();
  await page.getByRole('link', { name: 'Statistik' }).click();
  await page.getByRole('heading', { name: 'RPMKal' }).click();
  await page.getByText('RPMKal > Statistik').click();
  await page.getByText('Pencarian').click();
  await page.locator('#kabupaten').selectOption('01002');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.locator('#tahun').selectOption('2025');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Chart Assesmen' }).click();
  await page.getByRole('heading', { name: 'Chart Perencanaan dan' }).click();
  await page.locator('#chart-assesmen-bar canvas').click({
    position: {
      x: 16,
      y: 20
    }
  });
  await page.locator('#chart-assesmen canvas').click({
    position: {
      x: 43,
      y: 57
    }
  });
  await page.locator('#chart-assesmen-line canvas').click({
    position: {
      x: 41,
      y: 145
    }
  });
  await page.locator('#chart-pelaksanaan-bar canvas').click({
    position: {
      x: 7,
      y: 15
    }
  });
  await page.locator('#chart-pelaksanaan-line canvas').click({
    position: {
      x: 28,
      y: 47
    }
  });
  await page.locator('#kabupaten').selectOption('01001');
  await page.locator('#kecamatan').selectOption('01001003');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Chart Assesmen' }).click();
  await page.locator('#chart-assesmen-bar canvas').click({
    position: {
      x: 18,
      y: 302
    }
  });
  await page.locator('#chart-assesmen canvas').click({
    position: {
      x: 2,
      y: 247
    }
  });
  await page.locator('#chart-assesmen-line canvas').click({
    position: {
      x: 39,
      y: 79
    }
  });
  await page.getByRole('heading', { name: 'Chart Perencanaan dan' }).click();
  await page.locator('#chart-pelaksanaan-bar canvas').click({
    position: {
      x: 4,
      y: 37
    }
  });
  await page.locator('#chart-pelaksanaan-line canvas').click({
    position: {
      x: 32,
      y: 56
    }
  });
});