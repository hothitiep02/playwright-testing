# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Login & Session Management Tests @login >> TC-AUTH-01: Login with valid credentials @smoke
- Location: src\tests\auth\login.spec.ts:6:7

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  |   constructor(page: Page) {
  6  |     this.page = page;
  7  |   }
  8  |   async navigateTo(url: string = '') {
> 9  |     await this.page.goto(url);
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  10 |   }
  11 |   async click(locator: Locator) {
  12 |     await locator.waitFor({ state: 'visible' });
  13 |     await locator.click();
  14 |   }
  15 |   async type(locator: Locator, text: string) {
  16 |     await locator.waitFor({ state: 'visible' });
  17 |     await locator.fill(text);
  18 |   }
  19 |   async selectDropdownOption(dropdownLocator: Locator, optionText: string) {
  20 |     await this.click(dropdownLocator);
  21 |     const option = this.page.locator('.oxd-select-option').filter({ hasText: optionText });
  22 |     await this.click(option);
  23 |   }
  24 |   async uploadFile(inputSelector: string, filePath: string) {
  25 |     await this.page.setInputFiles(inputSelector, filePath);
  26 |   }
  27 |   async getValidationMessage(locator: Locator): Promise<string> {
  28 |     await locator.waitFor({ state: 'visible' });
  29 |     return (await locator.textContent()) || '';
  30 |   }
  31 | }
```