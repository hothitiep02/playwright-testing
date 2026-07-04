import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    readonly dashboardHeader: Locator;
    readonly userDropdown: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.dashboardHeader = page.locator('.oxd-topbar-header-title h6');
        this.userDropdown = page.locator('.oxd-userdropdown-tab');
        this.logoutLink = page.locator('a[role="menuitem"]:has-text("Logout")');
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutLink.click();
    }
}