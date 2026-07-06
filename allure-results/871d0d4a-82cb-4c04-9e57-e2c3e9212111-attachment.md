# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-10-Add emergency contact for employee @regression
- Location: src\tests\pim.spec.ts:67:7

# Error details

```
Test timeout of 60000ms exceeded while setting up "loginPage".
```

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | import { LoginPage } from '../pages/auth/LoginPage';
  3  | import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
  4  | import { DashboardPage } from '../pages/DashboardPage';
  5  | import { PIMPage } from '../pages/PIMPage';
  6  | import { env } from '../utils/env';
  7  | 
  8  | type PageFixtures = {
  9  |     loginPage: LoginPage;
  10 |     forgotPasswordPage: ForgotPasswordPage;
  11 |     dashboardPage: DashboardPage;
  12 |     pimPage: PIMPage;
  13 | };
  14 | 
  15 | export const test = base.extend<PageFixtures>({
  16 |     loginPage: async ({ page }, use) => {
  17 |     const loginPage = new LoginPage(page);
> 18 |     await page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
     |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  19 |     await use(loginPage);
  20 |     },
  21 |     forgotPasswordPage: async ({ page }, use) => {
  22 |         await use(new ForgotPasswordPage(page));
  23 |     },
  24 |     dashboardPage: async ({ page }, use) => {
  25 |         await use(new DashboardPage(page));
  26 |     },
  27 |     pimPage: async ({ page, loginPage }, use) => {
  28 |         const pimPage = new PIMPage(page);
  29 |         // const loginPage = new LoginPage(page);
  30 |         // await loginPage.navigateTo('/web/index.php/auth/login');
  31 |         await loginPage.login(env.adminUsername, env.adminPassword);
  32 |         // await page.waitForURL('**/dashboard/index', { timeout: 30000 });
  33 |         await pimPage.navigateToPIM();
  34 |         await use(pimPage);
  35 |     }
  36 | });
  37 | export { expect } from '@playwright/test';
  38 | 
```