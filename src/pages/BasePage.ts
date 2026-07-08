import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string = '') {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    await locator.click();
  }

  async type(locator: Locator, text: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  async selectDropdownOption(dropdownLocator: Locator, optionsListLocator: Locator, optionText: string) {
    await this.click(dropdownLocator);
    const targetOption = optionsListLocator.filter({ hasText: optionText });
    await this.click(targetOption);
  }

  async uploadFile(inputSelector: string, filePath: string) {
    await this.page.setInputFiles(inputSelector, filePath);
  }

  async getValidationMessage(locator: Locator): Promise<string> {
    await locator.waitFor({ state: 'visible' });
    return (await locator.textContent()) || '';
  }
}