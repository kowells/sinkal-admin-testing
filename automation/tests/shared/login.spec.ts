import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/admin/login');
    });

    test('Login berhasil dengan credential valid', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/admin/);
    });

    test('Login gagal dengan password salah', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('textbox', { name: 'Password' })
            .fill('PasswordSalah123!');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByRole('alert')
        ).toContainText(/Kombinasi email dan password salah/i);
    });

    test('Login gagal dengan email tidak terdaftar', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill('emailtidakterdaftar@mail.com');

        await page.getByRole('textbox', { name: 'Password' })
            .fill('Password123!');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByRole('alert')
        ).toBeVisible();
    });

    test('Login gagal ketika email kosong', async ({ page }) => {
        const emailInput = page.getByRole('textbox', { name: 'Email' });

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(emailInput).toBeFocused();

        await expect(emailInput).toHaveJSProperty('validationMessage', 'Please fill out this field.');
    });

    test('Login gagal ketika password kosong', async ({ page }) => {
        const passwordInput = page.getByRole('textbox', { name: 'Password' });

        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(passwordInput).toBeFocused();

        await expect(passwordInput).toHaveJSProperty('validationMessage', 'Please fill out this field.');
    });

    test('Login gagal ketika email dan password kosong', async ({ page }) => {
        const emailInput = page.getByRole('textbox', { name: 'Email' });

        await page.getByRole('button', { name: 'Login' }).click();

        // browser akan fokus ke field pertama yang invalid
        await expect(emailInput).toBeFocused();

        await expect(emailInput).toHaveJSProperty(
            'validationMessage',
            'Please fill out this field.'
        );
    });

    test('Validasi format email tidak valid', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill('email-salah');

        await page.getByRole('textbox', { name: 'Password' })
            .fill('Password123!');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByRole('alert')
        ).toContainText(/Email harus berupa alamat surel yang valid/i);
    });

    test('Password ter-mask sebagai type password', async ({ page }) => {
        const passwordField = page.getByRole('textbox', { name: 'Password' });

        await expect(passwordField).toHaveAttribute('type', 'password');
    });

    test('User tidak bisa akses halaman login setelah berhasil login', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/admin/);

        await page.goto('/admin/login');

        await expect(page).not.toHaveURL(/login/);
    });

    test('Session tetap aktif setelah refresh halaman', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/admin/);

        await page.reload();

        await expect(page).toHaveURL(/admin/);
    });

    // test('User dapat logout dengan sukses', async ({ page }) => {
    //     await page.getByRole('textbox', { name: 'Email' })
    //         .fill(process.env.KALURAHAN_EMAIL!);

    //     await page.getByRole('textbox', { name: 'Password' })
    //         .fill(process.env.KALURAHAN_PASSWORD!);

    //     await page.getByRole('button', { name: 'Login' }).click();

    //     await expect(page).toHaveURL(/admin/);

    //     await page.getByRole('button', { name: /logout/i }).click();

    //     await expect(page).toHaveURL(/login/);
    // });

    test('User tidak bisa akses halaman admin tanpa login', async ({ page }) => {
        await page.goto('/admin');

        await expect(page).toHaveURL(/login/);
    });

    test('Tekan Enter pada form login berhasil submit', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(process.env.KALURAHAN_EMAIL!);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.keyboard.press('Enter');

        await expect(page).toHaveURL(/admin/);
    });

    test('Input email trim whitespace otomatis', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(`  ${process.env.KALURAHAN_EMAIL!}  `);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(process.env.KALURAHAN_PASSWORD!);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/admin/);
    });

    test('Login gagal dengan SQL Injection sederhana', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Email' })
            .fill(`' OR 1=1 --`);

        await page.getByRole('textbox', { name: 'Password' })
            .fill(`' OR 1=1 --`);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByRole('alert')
        ).toBeVisible();
    });

});