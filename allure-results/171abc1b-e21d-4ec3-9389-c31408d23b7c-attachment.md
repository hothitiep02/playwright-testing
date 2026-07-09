# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Leave Module Testing >> TC-LV-01: Apply for leave with valid date range @smoke
- Location: src\tests\leave.spec.ts:75:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: opensource-demo.orangehrmlive.com
      - text: unexpectedly closed the connection.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_CLOSED
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
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
  8  | import { AttendancePage } from '../pages/AttandancePage';
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
     |                ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
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
  42 |         await loginPage.login(
  43 |             env.adminUsername,
  44 |             env.adminPassword
  45 |         );
  46 |         await attendancePage.navigateToPunchInOut();
  47 |         await use(attendancePage);
  48 |    },
  49 | });
  50 | export { expect } from '@playwright/test';
  51 | 
```