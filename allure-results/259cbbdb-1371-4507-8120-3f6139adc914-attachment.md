# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Leave Module Testing >> TC-LV-05: Admin rejects a pending leave request @smoke
- Location: src\tests\leave.spec.ts:169:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-input-group:has-text("Leave Type") .oxd-select-text') to be visible

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async navigateTo(url: string = '') {
  11 |     await this.page.goto(url);
  12 |   }
  13 | 
  14 |   async click(locator: Locator) {
> 15 |     await locator.waitFor({ state: 'visible', timeout: 30000 });
     |                   ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  16 |     await locator.click();
  17 |   }
  18 | 
  19 |   async type(locator: Locator, text: string) {
  20 |     await locator.waitFor({ state: 'visible' });
  21 |     await locator.fill(text);
  22 |   }
  23 | 
  24 |   async selectDropdownOption(dropdownLocator: Locator, optionsListLocator: Locator, optionText: string) {
  25 |     await this.click(dropdownLocator);
  26 |     const targetOption = optionsListLocator.filter({ hasText: optionText });
  27 |     await this.click(targetOption);
  28 |   }
  29 | 
  30 |   async uploadFile(inputSelector: string, filePath: string) {
  31 |     await this.page.setInputFiles(inputSelector, filePath);
  32 |   }
  33 | 
  34 |   async getValidationMessage(locator: Locator): Promise<string> {
  35 |     await locator.waitFor({ state: 'visible' });
  36 |     return (await locator.textContent()) || '';
  37 |   }
  38 | }
```