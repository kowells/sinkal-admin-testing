import { test, expect, Page } from '@playwright/test';

/* =========================
   HELPER: TEXTAREA
========================= */
async function fillTextarea(page: Page, selector: string, value: string) {
    const el = page.locator(selector);

    // 🔥 tunggu element stabil (tidak detach)
    await el.waitFor({ state: 'visible' });

    for (let i = 0; i < 3; i++) {
        try {
            await el.click();

            await el.press('Control+A');
            await el.press('Backspace');

            await el.type(value, { delay: 30 });
            await el.blur();

            // 🔥 tunggu Livewire selesai
            await page.waitForTimeout(300);

            const current = await el.inputValue();

            if (current === value) return;

        } catch (e) {
            // 🔥 kalau element ke-detach → retry
            await page.waitForTimeout(300);
        }
    }

    throw new Error(`Gagal isi ${selector}`);
}
/* =========================
   HELPER: VALIDASI TEXTAREA
========================= */
async function validateTextarea(page: Page) {
    const errors: string[] = [];
    const textareas = page.locator('textarea[name]');
    for (let i = 0; i < await textareas.count(); i++) {
        const el = textareas.nth(i);
        const name = await el.getAttribute('name');
        const val = await el.inputValue();

        if (!val.trim()) {
            if (name && !val.trim()) {
                errors.push(name);
            }
        }
    }

    return errors;
}

/* =========================
   HELPER: VALIDASI INPUT TEXT
========================= */
async function validateInput(page: Page) {
    const errors: string[] = [];
    const inputs = page.locator('input[type="text"]');

    for (let i = 0; i < await inputs.count(); i++) {
        const el = inputs.nth(i);
        const name = await el.getAttribute('name');
        const val = await el.inputValue();

        if (!val.trim()) {
            errors.push(name || `input-${i}`);
        }
    }

    return errors;
}

/* =========================
   HELPER: VALIDASI RADIO
========================= */
async function validateRadio(page: Page) {
    const radios = page.locator('input[type="radio"]');
    const checked = page.locator('input[type="radio"]:checked');

    const total = await radios.count();
    const selected = await checked.count();

    return { total, selected };
}

async function ensureRadioPerGroup(page: Page) {
    const radios = page.locator('input[type="radio"]');

    const groups = new Map<string, boolean>();

    // kumpulin group name
    for (let i = 0; i < await radios.count(); i++) {
        const el = radios.nth(i);
        const name = await el.getAttribute('name');

        if (name && !groups.has(name)) {
            groups.set(name, false);
        }
    }

    // cek mana yang sudah keisi
    for (let i = 0; i < await radios.count(); i++) {
        const el = radios.nth(i);
        const name = await el.getAttribute('name');

        if (name && await el.isChecked()) {
            groups.set(name, true);
        }
    }

    // isi yang belum keisi
    for (const [name, checked] of groups.entries()) {
        if (!checked) {
            const firstRadio = page.locator(`input[type="radio"][name="${name}"]`).first();

            if (await firstRadio.isVisible()) {
                console.log(`🟡 pilih radio group: ${name}`);
                await firstRadio.check({ force: true });

                // 🔥 tunggu Livewire
                await page.waitForTimeout(200);
            }
        }
    }
}

/* =========================
   HELPER: AUTO HEAL FORM
========================= */
async function autoHealForm(page: Page) {
    for (let attempt = 0; attempt < 3; attempt++) {
        const textareaErrors = await validateTextarea(page);
        const inputErrors = await validateInput(page);

        if (textareaErrors.length === 0 && inputErrors.length === 0) {
            console.log(`✅ Form clean di attempt ${attempt + 1}`);
            return;
        }

        console.log(`🔁 Retry ${attempt + 1}`);
        console.log('Textarea kosong:', textareaErrors);
        console.log('Input kosong:', inputErrors);

        // isi ulang textarea
        for (const name of textareaErrors) {
            await fillTextarea(page, `textarea[name="${name}"]`, 'test');
        }

        // isi ulang input text
        for (const name of inputErrors) {
            const el = page.locator(`[name="${name}"]`);
            await el.fill('test');
        }

        await page.waitForTimeout(300);
    }

    console.log('⚠️ Masih ada field kosong setelah retry');
}

/* =========================
   TEST
========================= */
test.describe('asesmen rpmkal', () => {
    test.use({
        storageState: 'storageState.json'
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('/admin/rpmkal-assesmen-asesor');
    });

    test('test-kirim', async ({ page }) => {
        // ================= NAVIGASI =================
        await page.getByRole('link', { name: ' RPMKal' }).click();
        await page.getByRole('link', { name: ' RPMKal' }).click();
        await page.getByRole('link', { name: 'Assesmen' }).click();
        await page.getByText('Sinkal RPMKal Assesmen').click();
        await page.getByRole('button', { name: ' Tambah Assesmen' }).click();
        await page.getByText('Sinkal RPMKal Assesmen Tambah').click();
        await page.getByRole('heading', { name: 'Lembar Kerja Asesmen' }).click();

        // ================= FORM AWAL =================
        await page.getByRole('combobox').first().selectOption('365');
        await page.getByRole('combobox').nth(1).selectOption('2028');

        // ================= SAMPLE ISI =================
        // (lanjutkan pola ini untuk semua field kamu)

        const radio1 = page.getByRole('radio', {
            name: 'Persentase balita yang diukur pertumbuhan dan dilaporkan ke puskesmas dibandingkan seluruh sasaran balita di wilayah sebesar >90% (Nilai: 4)',
            exact: true
        });

        await radio1.check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.1.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.1.rekomendasi"]', 'test');


        await page.getByRole('radio', { name: 'Tersedia dokumen rencana aksi penanganan stunting kalurahan, selaras dengan Rencana Aksi Daerah (Nilai: 3)', exact: true }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.2.jawaban"]', 'testing');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.2.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Persentase posyandu aktif sebesar 76 - 89% sesuai dengan Permenkes Nomor 13 Tahun 2022 (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.3.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.3.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Ada TPPS ber-SK dan mengadakan rembug stunting (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.4.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.4.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Persentase anggaran untuk stunting >=10% dan ada kenaikan anggaran dari tahun sebelumnya (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.5.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.5.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Ada monitoring dan laporan pelaksanaan RAKal, hasil sesuai dengan target (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.1.6.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.1.6.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Data tersedia dengan benar, lengkap dan mutakhir (terdapat update nama kelompok budaya yang masih aktif/kurang aktif/tidak aktif), dengan manajemen data terkelola dengan baik (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.7.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.7.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Kegiatan kebudayaan di kalurahan sudah masuk ke dalam dokumen perencanaan dan baru ada penganggaran dari APBKal tahun ini. (Nilai: 3)', exact: true }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.8.jawaban"]', 'testing');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.8.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Nilai-nilai Budaya Ditemui di' }).getByLabel('Ditemui di masyarakat dan terdapat kegiatan yang terjadwal setiap tahun (Nilai: 4)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.9.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.9.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Pengetahuan dan Teknologi' }).getByLabel('Ditemui di masyarakat tetapi tidak terjadwal (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.10.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.10.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Bahasa Ditemui di masyarakat' }).getByLabel('Ditemui di masyarakat dan terdapat kegiatan yang terjadwal setiap tahun (Nilai: 4)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.11.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.11.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Adat Istiadat Ditemui di' }).getByLabel('Ditemui di masyarakat tetapi tidak terjadwal (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.12.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.12.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Tradisi Luhur Ditemui di' }).getByLabel('Ditemui di masyarakat dan terdapat kegiatan yang terjadwal setiap tahun (Nilai: 4)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.13.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.13.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Benda Ditemui di masyarakat' }).getByLabel('Ditemui di masyarakat tetapi tidak terjadwal (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.14.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.14.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Benda Ditemui di masyarakat' }).getByLabel('Ditemui di masyarakat dan terdapat kegiatan yang terjadwal setiap tahun (Nilai: 4)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.2.15.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.2.15.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Data permasalahan lingkungan sudah tersedia dengan benar, lengkap, akurat dan mutakhir (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.16.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.16.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Permasalahan lingkungan (banjir)' })
            .getByLabel('Jarang terjadi (lebih dari 5 tahun sekali) (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.17.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.17.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Saat terjadi banjir, sudah tertangani namun masih terdapat genangan yang tidak sampai mengganggu kegiatan perekonomian, sosial dan kebudayaan masyarakat (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.21.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.21.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Permasalahan lingkungan (longsor) Jarang terjadi (lebih dari 5 tahun sekali) (' }).getByLabel('Jarang terjadi (lebih dari 5 tahun sekali) (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.18.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.18.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tertangani dengan baik saat terjadi longsor (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.3.22.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.22.rekomendasi"]', 'test');


        await page.getByRole('row', { name: 'Permasalahan lingkungan (kekeringan)' })
            .getByLabel('Jarang terjadi (lebih dari 5 tahun sekali) (Nilai: 3)').check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.19.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.19.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tertangani sebagian namun masih terdapat kekeringan yang tidak sampai mengganggu kegiatan perekonomian, sosial dan kebudayaan masyarakat (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.23.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.23.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Masih ditemukan sampah di lingkungan/ kawasan umum namun tidak menyebabkan bau dan gangguan visual (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.20.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.20.rekomendasi"]', 'test');
        await page.getByRole('radio', { name: 'Sudah terkelola namun masih terdapat masalah sampah tidak sampai mengganggu kegiatan perekonomian, sosial dan kebudayaan masyarakat (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.24.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.24.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Permasalahan lingkungan (lainnya)' })
            .getByLabel('Jarang terjadi (lebih dari 5 tahun sekali) (Nilai: 3)').check();
        await page.waitForTimeout(200);

        await fillTextarea(page, 'textarea[name="jawabans.3.49.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.49.rekomendasi"]', 'test');
        await page.locator('tr:nth-child(25) > td:nth-child(9) > .form-control').fill('test');

        await page.getByRole('radio', { name: 'Sudah tertangani dengan baik (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.48.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.48.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tersedia sarana prasarana air bersih yang memadai, namun kondisi kurang terawat sehingga kinerjanya tidak maksimal (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.25.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.25.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tersedia sarana prasarana drainase yang memadai dan dalam kondisi prima (terjaga) (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.26.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.26.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tersedia sarana prasarana pengelolaan limbah dan sampah yang memadai, namun kondisi kurang terawat sehingga kinerjanya tidak maksimal (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.27.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.27.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tersedia Ruang Terbuka Hijau yang memadai dan dalam kondisi terawat (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.28.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.28.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah tersedia sarana prasarana lingkungan yang memadai, namun kondisi kurang terawat sehingga kinerjanya tidak maksimal (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.50.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.50.rekomendasi"]', 'test');
        await page.locator('tr:nth-child(31) > td:nth-child(9) > .form-control').fill('test');

        await page.getByRole('radio', { name: 'Sudah ada pendanaan pembangunan lingkungan yang mendukung perekonomian, sosial dan kebudayaan dari APBkal dan meningkat dari tahun sebelumnya (Nilai: 4)', exact: true }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.29.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.29.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Ada dan sedang berjalan sampai tahun ini (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.3.30.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.3.30.rekomendasi"]', 'test');


        await page.getByRole('radio', { name: 'BUMKal sudah memiliki sertifikat pendaftaran badan hukum BUM Desa (Nilai: 4)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.4.31.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.31.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Laporan berkala yang disusun BUMKal hanya laporan tahunan saja (Nilai: 3)' }).check();
        await page.waitForTimeout(200);
        await fillTextarea(page, 'textarea[name="jawabans.4.32.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.32.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Terpenuhi semua kriteria (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.33.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.33.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah ada kajian potensi dan permasalahan BUM Kal, namun belum dimanfaatkan oleh BUMKal menjadi unit usaha (Nilai: 3)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.34.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.34.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah ada keuntungan signifikan dari pengelolaan usaha ( ≥ 50 juta/tahun) (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.35.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.35.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah menjalin kerjasama usaha dan kerjasama non-usaha yang saling menguntungkan (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.36.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.36.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah terdapat penyertaan modal dari Kalurahan, namun belum ada penyertaan modal dari masyarakat (Nilai: 3)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.37.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.37.rekomendasi"]', 'test');

        await page.getByRole('radio', {
            name: 'Rancangan Rencana Program Kerja BUMKal diputuskan dalam Musyawarah Desa sebagai Rencana Program Kerja BUMKal dan format dokumen sudah lengkap sesuai dengan lampiran Permendes 3 Tahun 2021 (Nilai: 4)',
            exact: true
        }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.38.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.38.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Ada kesepakatan pemanfaatan aset kalurahan melalui musyawarah kalurahan, tetapi belum dimanfaatkan dalam unit usaha BUMKal. (Nilai: 3)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.39.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.39.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah terdapat pemanfaatan teknologi digital dalam mendukung usaha BUM Kal dan berpengaruh pada peningkatan profit ( ≥ 50 juta/tahun) (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.40.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.40.rekomendasi"]', 'test');

        await page.getByRole('radio', {
            name: 'Laporan keuangan BUM Kal yang disusun sudah berdasarkan Kepmendes Nomor 136 Tahun 2021, namun belum menggunakan aplikasi laporan keuangan (Nilai: 3)',
            exact: true
        }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.41.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.41.rekomendasi"]', 'test');

        await page.getByRole('radio', {
            name: 'Sudah mampu memberikan kontribusi kepada pendapatan asli kalurahan, dengan jumlah besar ( > 100 jt) (Nilai: 4)',
            exact: true
        }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.42.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.42.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Terdapat penyerapan tenaga kerja setempat antara 30 sampai 50% (Nilai: 3)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.4.43.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.4.43.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Data tersedia dengan lengkap, benar dan mutakhir (Nilai: 4)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.5.44.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.5.44.rekomendasi"]', 'test');

        await page.getByRole('radio', { name: 'Sudah ada pendanaan kegiatan penanganan kemiskinan dari APBkal (Nilai: 3)' }).check();
        await fillTextarea(page, 'textarea[name="jawabans.5.45.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.5.45.rekomendasi"]', 'test');

        await page.getByRole('row', { name: 'Keberadaan program/ kegiatan' }).getByLabel('Ada dan sedang berjalan serta program kegiatan berkelanjutan (multiyear) (Nilai: 4)').check();
        await fillTextarea(page, 'textarea[name="jawabans.5.46.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.5.46.rekomendasi"]', 'test');

        await page.getByRole('radio', {
            name: 'Keluasan tanah kas kalurahan untuk pertanian dlm rangka penurunan kemiskinan kurang dari 50%. (Nilai: 3)',
            exact: true
        }).check();
        await fillTextarea(page, 'textarea[name="jawabans.5.47.jawaban"]', 'test');
        await fillTextarea(page, 'textarea[name="rekomendasis.5.47.rekomendasi"]', 'test');



        // ================= AUTO HEAL =================
        await autoHealForm(page);

        // ================= VALIDASI RADIO =================
        await ensureRadioPerGroup(page); // 🔥 INI WAJIB

        await page.waitForTimeout(500);
        const radioState = await validateRadio(page);
        console.log('Radio total:', radioState.total);
        console.log('Radio checked:', radioState.selected);

        // ================= SUBMIT =================
        await page.getByRole('button', { name: 'Kirim' }).click();

        // ================= HANDLE RESPONSE =================
        const success = page.getByText('Berhasil!');
        const errorMsg = page.locator('text=/wajib diisi/i');

        await Promise.race([
            success.waitFor({ state: 'visible' }),
            errorMsg.first().waitFor({ state: 'visible' })
        ]);

        if (await errorMsg.first().isVisible()) {
            throw new Error('❌ Submit gagal: masih ada field kosong / ke-reset');
        }

        await expect(success).toBeVisible();

        //titip asesmen kirim
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('link', { name: 'Detail' }).first().click();
        await page.getByRole('heading', { name: 'Detail Assesmen' }).click();
        await page.getByText('Kalurahan Sariharjo').click();
        await page.getByText('Tahun 2028').click();
        await page.getByRole('link', { name: 'Ubah Asesmen' }).click();
        await page.getByRole('heading', { name: 'Ubah Assesmen' }).click();
        await page.getByRole('radio', { name: 'Persentase balita yang diukur pertumbuhan dan dilaporkan ke puskesmas dibandingkan seluruh sasaran balita di wilayah sebesar 75% - <90% (Nilai: 3)', exact: true }).click();
        await page.locator('textarea[name="jawabans.1.1.jawaban"]').click();
        await page.locator('textarea[name="jawabans.1.1.jawaban"]').fill('test edit');
        await page.locator('textarea[name="rekomendasis.1.1.rekomendasi"]').click();
        await page.locator('textarea[name="rekomendasis.1.1.rekomendasi"]').fill('test edit');
        await page.getByRole('button', { name: 'Simpan Assesmen' }).click();
        await page.getByRole('heading', { name: 'Berhasil!' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.getByRole('link', { name: 'Detail' }).first().click();
        await page.getByRole('link', { name: 'Ubah Asesmen' }).click();
        await page.getByRole('link', { name: 'Batalkan' }).click();
        await page.waitForTimeout(1000);
        await page.getByRole('row', { name: 'Sariharjo 2028 Terkirim 16/04' }).getByRole('button').click();
        await page.getByRole('button', { name: 'Hapus Assesmen' }).click();
        await page.getByRole('heading', { name: 'Berhasil!' }).click();
        await page.getByRole('button', { name: 'Tutup' }).click();
        await page.waitForTimeout(1000);

    });
});