# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-05-Search employee with non-existent name @regression
- Location: src\tests\pim.spec.ts:31:7

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
  6  | import { LeavePage } from '../pages/LeavePage';
  7  | import { env } from '../utils/env';
  8  | import { AttendancePage } from '../pages/AttendancePage';
  9  | 
  10 | type PageFixtures = {
  11 |     loginPage: LoginPage;
  12 |     forgotPasswordPage: ForgotPasswordPage;
  13 |     dashboardPage: DashboardPage;
  14 |     pimPage: PIMPage;
  15 |     leavePage: LeavePage;
  16 |     attendancePage: AttendancePage;
  17 | };
  18 | 
  19 | export const test = base.extend<PageFixtures>({
  20 |     loginPage: async ({ page }, use) => {
  21 |     const loginPage = new LoginPage(page);
> 22 |     await page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
     |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  23 |     await use(loginPage);
  24 |     },
  25 |     forgotPasswordPage: async ({ page }, use) => {
  26 |         await use(new ForgotPasswordPage(page));
  27 |     },
  28 |     dashboardPage: async ({ page }, use) => {
  29 |         await use(new DashboardPage(page));
  30 |     },
  31 |     pimPage: async ({ page, loginPage }, use) => {
  32 |         const pimPage = new PIMPage(page);
  33 |         await loginPage.login(env.adminUsername, env.adminPassword);
  34 |         await pimPage.navigateToPIM();
  35 |         await use(pimPage);
  36 |     },
  37 |     leavePage: async ({ page}, use) => {
  38 |         await use(new LeavePage(page));
  39 |     },
  40 |     attendancePage: async ({ page, loginPage }, use) => {
  41 |         const attendancePage = new AttendancePage(page);
  42 |         await loginPage.login(env.adminUsername,env.adminPassword);
  43 |         await attendancePage.navigateToPunchInOut();
  44 |         await use(attendancePage);
  45 |    },
  46 | });
  47 | export { expect } from '@playwright/test';
  48 | 
```