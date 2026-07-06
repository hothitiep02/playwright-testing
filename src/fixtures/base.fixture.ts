import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { env } from '../utils/env';

type PageFixtures = {
    loginPage: LoginPage;
    forgotPasswordPage: ForgotPasswordPage;
    dashboardPage: DashboardPage;
    pimPage: PIMPage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
    await use(loginPage);
    },
    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    pimPage: async ({ page, loginPage }, use) => {
        const pimPage = new PIMPage(page);
        await loginPage.login(env.adminUsername, env.adminPassword);
        await pimPage.navigateToPIM();
        await use(pimPage);
    }
});
export { expect } from '@playwright/test';
