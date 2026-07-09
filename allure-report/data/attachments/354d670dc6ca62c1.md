# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Login & Session Management Tests @login >> TC-AUTH-05: Logout from the application @smoke
- Location: src\tests\auth\login.spec.ts:45:7

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "登錄" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: 使用者名稱
            - textbox "使用者名稱" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: 密碼
            - textbox "密碼" [active] [ref=e30]: admin123
          - button "登錄" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: 忘了密碼?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import { BasePage } from '../BasePage';
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |     readonly usernameInput: Locator;
  6  |     readonly passwordInput: Locator;
  7  |     readonly loginButton: Locator;
  8  |     readonly errorMessage: Locator; 
  9  |     readonly usernameValidationError: Locator; 
  10 |     readonly passwordValidationError: Locator; 
  11 |     readonly forgotPasswordLink: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         super(page);
  15 |         this.usernameInput = page.locator('input[name="username"]');
  16 |         this.passwordInput = page.locator('input[name="password"]');
  17 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  18 |         this.errorMessage = page.locator('.oxd-alert-content-text'); 
  19 |         this.usernameValidationError = page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('.oxd-input-field-error-message');
  20 |         this.passwordValidationError = page.locator('.oxd-input-group').filter({ hasText: 'Password' }).locator('.oxd-input-field-error-message');
  21 |         this.forgotPasswordLink = page.getByText('Forgot your password?');
  22 |     }
  23 | 
  24 |     async login(username: string, password: string) {
  25 |         await this.usernameInput.fill(username || '');
  26 |         await this.passwordInput.fill(password || '');
> 27 |         await this.loginButton.click();
     |                                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  28 |     }
  29 | 
  30 |     async loginExpectSuccess(username: string, password: string) {
  31 |         await this.login(username, password);
  32 |         await expect(this.page).toHaveURL(/dashboard/);
  33 |     }
  34 | 
  35 |     async loginExpectError(username: string, password: string) {
  36 |         await this.login(username, password);
  37 |         await expect(this.errorMessage).toBeVisible();
  38 |     }
  39 | 
  40 |     async clickForgotPassword() {
  41 |         await this.forgotPasswordLink.click();
  42 |     }
  43 | }
```