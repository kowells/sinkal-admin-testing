import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/kesehatan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Sarana dan Prasarana' }).click();
  await page.getByRole('link', { name: 'Kesehatan' }).click();
  await page.getByRole('heading', { name: 'Data Sarana Kesehatan' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Sarana Kesehatan' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('row', { name: 'Puskesmas', exact: true }).getByRole('spinbutton').fill('1');
  await page.getByRole('row', { name: 'Puskesmas Pembantu' }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Poliklinik' }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Posyandu dan Polindes' }).getByRole('spinbutton').fill('4');
  await page.getByRole('row', { name: 'Bidan' }).getByRole('spinbutton').fill('1');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 14,
      y: 135
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Sarana Kesehatan' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('row', { name: 'Puskesmas', exact: true }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Puskesmas Pembantu', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Poliklinik', exact: true }).getByRole('spinbutton').fill('4');
  await page.getByRole('row', { name: 'Posyandu dan Polindes', exact: true }).getByRole('spinbutton').fill('5');
  await page.getByRole('row', { name: 'Bidan', exact: true }).getByRole('spinbutton').fill('2');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 25,
      y: 25
    }
  });
  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/kesehatan/2023?qw=');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('row', { name: 'Puskesmas', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Puskesmas', exact: true }).getByRole('spinbutton').fill('11');
  await page.getByRole('row', { name: 'Puskesmas Pembantu', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Puskesmas Pembantu', exact: true }).getByRole('spinbutton').fill('21');
  await page.getByRole('row', { name: 'Poliklinik', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Poliklinik', exact: true }).getByRole('spinbutton').fill('31');
  await page.getByRole('row', { name: 'Posyandu dan Polindes', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Posyandu dan Polindes', exact: true }).getByRole('spinbutton').fill('41');
  await page.getByRole('row', { name: 'Bidan', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Bidan', exact: true }).getByRole('spinbutton').fill('11');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.locator('select[name="filterTahun"]').selectOption('2024');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/kesehatan/2024?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.getByRole('link', { name: 'Kesehatan' }).click();

  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/kesehatan/2023?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});