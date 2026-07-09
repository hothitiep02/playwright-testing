# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Login & Session Management Tests @login >> TC-AUTH-03: Login with blank username and password @regression
- Location: src\tests\auth\login.spec.ts:26:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-input-group:has(input[name="username"]) .oxd-input-field-error-message')
Expected: "Required"
Received: "需要"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-input-group:has(input[name="username"]) .oxd-input-field-error-message')
    23 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">需要</span>
       - unexpected value "需要"

```

```yaml
- text: 需要
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/base.fixture';
  2  | import { env } from '../../utils/env';
  3  | import * as testData from '../../utils/testData.json';
  4  | 
  5  | test.describe('Login & Session Management Tests @login', () => {
  6  |   
  7  |   test.beforeEach(async ({ loginPage }) => {
  8  |     await loginPage.navigateTo('/web/index.php/auth/login');
  9  |   });
  10 | 
  11 |   test('TC-AUTH-01: Login with valid credentials @smoke', async ({ page, loginPage, dashboardPage }) => {
  12 |     await loginPage.login(env.adminUsername, env.adminPassword);
  13 |     await expect(page).toHaveURL(/.*dashboard/);
  14 |     await expect(dashboardPage.dashboardHeader).toBeVisible();
  15 |   });
  16 | 
  17 |   test('TC-AUTH-02: Login with invalid password @regression', async ({ loginPage }) => {
  18 |     await loginPage.login(testData.invalidLogins[0].username, testData.invalidLogins[0].password);
  19 |     
  20 |     // Khung đỏ báo lỗi (.oxd-alert-content-text) hiển thị
  21 |     await expect(loginPage.errorMessage).toBeVisible();
  22 |     // Kiểm tra xem chữ trong khung đỏ đó có khớp với file JSON không
  23 |     await expect(loginPage.errorMessage).toHaveText(testData.invalidLogins[0].expectedError);
  24 |   });
  25 | 
  26 |   test('TC-AUTH-03: Login with blank username and password @regression', async ({ loginPage }) => {
  27 |     await loginPage.login('', '');
  28 |     
  29 |     // Chờ 2 dòng thông báo "Required" xuất hiện dưới ô Input tương ứng
  30 |     await expect(loginPage.usernameValidationError).toBeVisible();
  31 |     await expect(loginPage.passwordValidationError).toBeVisible();
> 32 |     await expect(loginPage.usernameValidationError).toHaveText('Required');
     |                                                     ^ Error: expect(locator).toHaveText(expected) failed
  33 |     await expect(loginPage.passwordValidationError).toHaveText('Required');
  34 |   });
  35 | 
  36 |   test('TC-AUTH-04: Login with username only (password blank) @regression', async ({ loginPage }) => {
  37 |     // Vẫn truyền dữ liệu từ JSON, mật khẩu để trống
  38 |     await loginPage.login(testData.invalidLogins[2].username, '');
  39 |     
  40 |     // Chỉ có ô password báo lỗi "Required" (hoặc lỗi mong đợi từ JSON)
  41 |     await expect(loginPage.passwordValidationError).toBeVisible();
  42 |     await expect(loginPage.passwordValidationError).toHaveText(testData.invalidLogins[2].expectedError);
  43 |   });
  44 | 
  45 |   test('TC-AUTH-05: Logout from the application @smoke', async ({ page, loginPage, dashboardPage }) => {
  46 |     await loginPage.login(env.adminUsername, env.adminPassword);
  47 |     await expect(page).toHaveURL(/.*dashboard/);
  48 |     
  49 |     // Logout sử dụng DashboardPage POM
  50 |     await dashboardPage.logout();
  51 |     await expect(page).toHaveURL(/.*login/);
  52 |     
  53 |     // Bấm Back trên trình duyệt và đảm bảo không bị log ngược lại vào trong
  54 |     await page.goBack();
  55 |     await expect(page).toHaveURL(/.*login/);
  56 |   });
  57 | });
```