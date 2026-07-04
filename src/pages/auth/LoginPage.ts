import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly usernameValidationError: Locator;
    readonly passwordValidationError: Locator;
    readonly forgotPasswordLink: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text'); 
        this.usernameValidationError = page.locator('.oxd-input-group:has(input[name="username"]) .oxd-input-field-error-message');
        this.passwordValidationError = page.locator('.oxd-input-group:has(input[name="password"]) .oxd-input-field-error-message');
        this.forgotPasswordLink = page.locator('.orangehrm-login-forgot-header');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username || '');
        await this.passwordInput.fill(password || '');
        await this.loginButton.click();
    }
    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }
}