import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ForgotPasswordPage extends BasePage {
  readonly usernameInput: Locator;
  readonly resetButton: Locator;
  readonly successMessage: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.resetButton = page.getByRole('button', {name: 'Reset Password'});
    this.cancelButton = page.getByRole('button', {name: 'Cancel'});
    this.successMessage = page.locator('.orangehrm-forgot-password-title');}

    async resetPassword(username: string) {
        await this.usernameInput.fill(username);
        await this.resetButton.click();
    }
    async resetPasswordExpectSuccess(username: string) {
        await this.resetPassword(username);
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toContainText('Reset Password');
    }
    async clickCancel() {
        await this.cancelButton.click();
    }
}