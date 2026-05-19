import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/admin/sarana-prasarana/peribadatan');
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: ' Data Wilayah' }).click();
  await page.getByRole('link', { name: 'Sarana dan Prasarana' }).click();
  await page.getByRole('link', { name: 'Peribadatan' }).click();
  await page.getByRole('heading', { name: 'Data Sarana Ibadah' }).click();
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Sarana Ibadah' }).getByRole('combobox').selectOption('2023');
  await page.getByRole('row', { name: 'Masjid' }).getByRole('spinbutton').fill('5');
  await page.getByRole('row', { name: 'Gereja' }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Pura' }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Vihara' }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Klenteng' }).getByRole('spinbutton').fill('2');
  await page.getByRole('row', { name: 'Mushola' }).getByRole('spinbutton').fill('2');
  await page.getByRole('button', { name: 'Tambah Data' }).click();
  await page.locator('canvas').click({
    position: {
      x: 16,
      y: 48
    }
  });
  await page.getByRole('button', { name: 'Tambah Toggle Dropdown' }).click();
  await page.getByText('Isi Formulir').click();
  await page.getByRole('dialog', { name: 'Tambah Data Sarana Ibadah' }).getByRole('combobox').selectOption('2024');
  await page.getByRole('row', { name: 'Masjid', exact: true }).getByRole('spinbutton').fill('5');
  await page.getByRole('row', { name: 'Gereja', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Pura', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Vihara', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Klenteng', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Mushola', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('button', { name: 'Tambah Data' }).click();

  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/peribadatan/2023?qw=');
  await page.getByRole('button', { name: ' Ubah' }).click();
  await page.getByRole('row', { name: 'Masjid', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Masjid', exact: true }).getByRole('spinbutton').fill('9');
  await page.getByRole('row', { name: 'Gereja', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Gereja', exact: true }).getByRole('spinbutton').fill('3');
  await page.getByRole('row', { name: 'Mushola', exact: true }).getByRole('spinbutton').click();
  await page.getByRole('row', { name: 'Mushola', exact: true }).getByRole('spinbutton').fill('4');
  await page.getByRole('button', { name: 'Ubah Data' }).click();
  await page.locator('select[name="filterTahun"]').selectOption('2024');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/peribadatan/2024?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
  await page.getByRole('link', { name: 'Peribadatan' }).click();

  await page.locator('select[name="filterTahun"]').selectOption('2023');
  await page.goto('https://sinkal.jogjaprov.go.id/admin/sarana-prasarana/peribadatan/2023?qw=');
  await page.getByRole('button', { name: ' Hapus' }).click();
  await page.getByRole('button', { name: 'Iya, hapus' }).click();
});