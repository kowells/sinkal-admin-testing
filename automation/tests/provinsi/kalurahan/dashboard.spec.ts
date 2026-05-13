import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'storageState.json'
// });

test('test', async ({ page }) => {
  await page.goto('/admin/dashboard');
  await page.getByRole('link', { name: 'Kalurahan', exact: true }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByText('Kalurahan > Dashboard').click();
  await page.getByRole('heading', { name: 'Pencarian' }).click();
  await page.locator('#data').selectOption('keaktifan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Persentase pengisian data' }).click();
  await page.getByRole('heading', { name: 'Kalurahan paling aktif' }).click();
  await page.locator('canvas').click({
    position: {
      x: 35,
      y: 30
    }
  });
  await page.locator('#data').selectOption('pegawai');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data pegawai' }).click();
  await page.locator('canvas').click({
    position: {
      x: 35,
      y: 28
    }
  });
  await page.locator('#data').selectOption('du-pertumbuhan-penduduk');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Pertumbuhan penduduk tahun' }).click();
  await page.locator('#chart canvas').click({
    position: {
      x: 29,
      y: 43
    }
  });
  await page.locator('#chart-rekap canvas').click({
    position: {
      x: 18,
      y: 19
    }
  });
  await page.locator('#data').selectOption('du-usia');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - penduduk' }).click();
  await page.locator('canvas').click({
    position: {
      x: 22,
      y: 20
    }
  });
  await page.locator('#data').selectOption('du-angkatan-kerja');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Kelompok usia produktif tahun' }).click();
  await page.locator('#chart canvas').click({
    position: {
      x: 22,
      y: 20
    }
  });
  await page.locator('#chart-rekap canvas').click({
    position: {
      x: 12,
      y: 32
    }
  });
  await page.locator('#data').selectOption('du-agama');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Agama tahun' }).click();
  await page.locator('canvas').click({
    position: {
      x: 21,
      y: 65
    }
  });
  await page.locator('#data').selectOption('du-status-kawin');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Status' }).click();
  await page.locator('canvas').click({
    position: {
      x: 37,
      y: 85
    }
  });
  await page.locator('#data').selectOption('du-pendidikan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Jenjang' }).click();
  await page.locator('canvas').click({
    position: {
      x: 27,
      y: 181
    }
  });
  await page.locator('#data').selectOption('du-kesejahteraan');
  await page.getByRole('heading', { name: 'Data Wilayah - Jenjang' }).click();
  await page.locator('canvas').click({
    position: {
      x: 35,
      y: 192
    }
  });
  await page.locator('#data').selectOption('du-pekerjaan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Pekerjaan tahun' }).click();
  await page.locator('#chart canvas').click({
    position: {
      x: 30,
      y: 154
    }
  });
  await page.getByRole('heading', { name: 'Data Wilayah - Bekerja' }).click();
  await page.locator('#chart-rekap canvas').click({
    position: {
      x: 46,
      y: 17
    }
  });
  await page.getByRole('heading', { name: 'Data Wilayah - Belum bekerja' }).click();
  await page.locator('#chart-rekap-adt canvas').click({
    position: {
      x: 35,
      y: 63
    }
  });
  await page.locator('#data').selectOption('du-sarana');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Sarana kesehatan tahun' }).click();
  await page.locator('#chart canvas').click({
    position: {
      x: 66,
      y: 155
    }
  });
  await page.getByRole('heading', { name: 'Data Wilayah - Sarana pendidikan tahun' }).click();
  await page.locator('#chart-pendidikan canvas').click({
    position: {
      x: 42,
      y: 219
    }
  });
  await page.getByRole('heading', { name: 'Data Wilayah - Sarana ibadah' }).click();
  await page.locator('#chart-ibadah canvas').click({
    position: {
      x: 50,
      y: 184
    }
  });
  await page.locator('#data').selectOption('keuangan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Pendapatan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Pengeluaran' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Rencana pendapatan' }).click();
  await page.getByRole('heading', { name: 'Data Wilayah - Rencana pengeluaran' }).click();
  await page.locator('#data').selectOption('lembaga-layanan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Lembaga Masyarakat dan' }).click();
  await page.locator('canvas').click({
    position: {
      x: 24,
      y: 52
    }
  });
  await page.locator('#data').selectOption('jagawarga');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Jagawarga - Organisasi' }).click();
  await page.locator('canvas').click({
    position: {
      x: 26,
      y: 17
    }
  });
  await page.locator('#data').selectOption('jagawarga-sarpras');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Data Jagawarga - Sarpras' }).click();
  await page.locator('canvas').click({
    position: {
      x: 50,
      y: 19
    }
  });
  await page.locator('#data').selectOption('peladi-makarti');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByRole('heading', { name: 'Layanan Peladi Makarti' }).click();
  await page.locator('#kabupaten').selectOption('01002');
  await page.locator('#kecamatan').selectOption('01002003');
  await page.locator('#data').selectOption('keaktifan');
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.getByText('Showing 1 to 7 of 7 entries').click();
});