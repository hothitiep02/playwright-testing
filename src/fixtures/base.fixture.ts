import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { DashboardPage } from '../pages/DashboardPage';

type PageFixtures = {
    loginPage: LoginPage;
    forgotPasswordPage: ForgotPasswordPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
});
export { expect } from '@playwright/test';
