import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',


    baseURL: 'https://sinkal.jogjaprov.go.id',
    // baseURL: 'http://sinkal.stechoq.com',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'setup-kalurahan',
      testMatch: 'tests/setup/kalurahan.setup.ts',
    },

    {
      name: 'kalurahan',
      testDir: './tests/kalurahan',
      testIgnore: '**/*.setup.ts',
      use: {
        storageState: 'storage-state/kalurahan.json',
      },
      dependencies: ['setup-kalurahan'],
    },

    {
      name: 'setup-kapanewon',
      testMatch: 'tests/setup/kapanewon.setup.ts',
    },

    {
      name: 'kapanewon',
      testDir: './tests/kapanewon',
      testIgnore: '**/*.setup.ts',
      use: {
        storageState: 'storage-state/kapanewon.json',
      },
      dependencies: ['setup-kapanewon'],
    },
    {
      name: 'setup-kabupaten',
      testMatch: 'tests/setup/kabupaten.setup.ts',
    },

    {
      name: 'kabupaten',
      testDir: './tests/kabupaten',
      testIgnore: '**/*.setup.ts',
      use: {
        storageState: 'storage-state/kabupaten.json',
      },
      dependencies: ['setup-kabupaten'],
    },
    {
      name: 'setup-inspektorat',
      testMatch: 'tests/setup/inspektorat.setup.ts',
    },

    {
      name: 'inspektorat',
      testDir: './tests/inspektorat',
      testIgnore: '**/*.setup.ts',
      use: {
        storageState: 'storage-state/inspektorat.json',
      },
      dependencies: ['setup-inspektorat'],
    },
    {
      name: 'setup-provinsi',
      testMatch: 'tests/setup/provinsi.setup.ts',
    },

    {
      name: 'provinsi',
      testDir: './tests/provinsi',
      testIgnore: '**/*.setup.ts',
      use: {
        storageState: 'storage-state/provinsi.json',
      },
      dependencies: ['setup-provinsi'],
    },

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
