import { defineConfig, devices } from '@playwright/test';
import { env } from './src/utils/env'; 

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : 1,
    timeout: 60000,
    expect: {
        timeout: 10000
    },

    reporter: [
        ['html', { open: 'never' }],
        ['allure-playwright', {
            detail: true,
            outputFolder: 'allure-results'
        }]
    ],

    use: {
        baseURL: env.baseUrl, 
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        actionTimeout: 15000,
        navigationTimeout: 60000,
        launchOptions: {
            args: [
                '--ignore-certificate-errors',
                '--disable-web-security'
            ]
        }
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] }
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] }
        // }
    ]
});