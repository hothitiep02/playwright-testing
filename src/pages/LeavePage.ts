import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export const LeaveLocator = {
  leaveMenuItem: '.oxd-main-menu-item:has-text("Leave")',
  applyTab: 'a:has-text("Apply")',
  leaveListTab: 'a:has-text("Leave List")',
  myLeaveTab: 'a:has-text("My Leave")',
  leaveTypeSelect: '.oxd-input-group:has-text("Leave Type") .oxd-select-text',
  selectOptions: '.oxd-select-option',
  startDateInput: '.oxd-date-input input',
  applyBtn: 'button:has-text("Apply")',
  dateErrorMessage: '.oxd-input-group__message',
  toast: '.oxd-toast',
  employeeNameSearchInput: '.oxd-autocomplete-text-input input',
  autocompleteDropdown: '.oxd-autocomplete-dropdown',
  autocompleteOption: '.oxd-autocomplete-option',
  searchBtn: 'button[type="submit"]',
  leaveTableRows: '.oxd-table-body .oxd-table-card',
  approveRole: 'Approve',
  rejectRole: 'Reject',
  entitlementInput: '.oxd-input-group:has-text("Entitlement") input',
  confirmBtn: 'button:has-text("Confirm")',
  formLoader: '.oxd-form-loader',
};

export class LeavePage extends BasePage {
  readonly leaveMenuItem: Locator;
  readonly applyTab: Locator;
  readonly leaveListTab: Locator;
  readonly myLeaveTab: Locator;
  readonly leaveTypeSelect: Locator;
  readonly selectOptions: Locator;
  readonly startDateInput: Locator;
  readonly endDateInput: Locator;
  readonly applyBtn: Locator;
  readonly dateErrorMessage: Locator;
  readonly toast: Locator;
  readonly employeeNameSearchInput: Locator;
  readonly autocompleteDropdown: Locator;
  readonly autocompleteOption: Locator;
  readonly searchBtn: Locator;
  readonly leaveTableRows: Locator;
  readonly entitlementInput: Locator;
  readonly confirmBtn: Locator;
  readonly formLoader: Locator;

  constructor(page: Page) {
    super(page);
    this.leaveMenuItem = page.locator(LeaveLocator.leaveMenuItem);
    this.applyTab = page.locator(LeaveLocator.applyTab).first();
    this.leaveListTab = page.locator(LeaveLocator.leaveListTab).first();
    this.myLeaveTab = page.locator(LeaveLocator.myLeaveTab).first();
    this.leaveTypeSelect = page.locator(LeaveLocator.leaveTypeSelect);
    this.selectOptions = page.locator(LeaveLocator.selectOptions);
    this.startDateInput = page.locator(LeaveLocator.startDateInput).first();
    this.endDateInput = page.locator(LeaveLocator.startDateInput).nth(1);
    this.applyBtn = page.locator(LeaveLocator.applyBtn).first();
    this.dateErrorMessage = page.locator(LeaveLocator.dateErrorMessage);
    this.toast = page.locator(LeaveLocator.toast);
    this.employeeNameSearchInput = page.locator(LeaveLocator.employeeNameSearchInput).first();
    this.autocompleteDropdown = page.locator(LeaveLocator.autocompleteDropdown);
    this.autocompleteOption = page.locator(LeaveLocator.autocompleteOption);
    this.searchBtn = page.locator(LeaveLocator.searchBtn).first();
    this.leaveTableRows = page.locator(LeaveLocator.leaveTableRows);
    this.entitlementInput = page.locator(LeaveLocator.entitlementInput);
    this.confirmBtn = page.locator(LeaveLocator.confirmBtn);
    this.formLoader = page.locator(LeaveLocator.formLoader);
  }

  async waitForLoaderToDisappear() {
    await this.formLoader.waitFor({ state: 'detached', timeout: 15000 }).catch(() => {});
  }

  async navigateToLeave() {
    await this.click(this.leaveMenuItem);
    await this.page.waitForLoadState('networkidle');
    await this.waitForLoaderToDisappear();
  }

  async clearAndFillDate(inputLocator: Locator, dateValue: string) {
    await inputLocator.waitFor({ state: 'visible' });
    await inputLocator.click();
    await inputLocator.selectText();
    await this.page.keyboard.press('Backspace');
    await inputLocator.fill(dateValue);
    await this.page.keyboard.press('Tab'); 
  }

  async applyLeaveAction(startDate: string, endDate: string) {
    await this.click(this.applyTab);
    await this.waitForLoaderToDisappear();
    
    await this.leaveTypeSelect.waitFor({ state: 'visible' });
    await this.leaveTypeSelect.click();
    
    await this.selectOptions.nth(1).waitFor({ state: 'visible' });
    await this.selectOptions.nth(1).click();
    await this.waitForLoaderToDisappear(); 
    
    await this.clearAndFillDate(this.startDateInput, startDate);
    await this.clearAndFillDate(this.endDateInput, endDate);
    
    await this.applyBtn.waitFor({ state: 'visible' });
    await this.applyBtn.click();
  }

  async searchLeaveRequestForEmployee(employeeName: string) {
    await this.click(this.leaveListTab);
    await this.waitForLoaderToDisappear();
    
    await this.employeeNameSearchInput.waitFor({ state: 'visible' });
    await this.employeeNameSearchInput.fill(employeeName);
    await this.autocompleteDropdown.waitFor({ state: 'visible', timeout: 5000 });
    await this.autocompleteOption.first().click();

    await this.searchBtn.click();
    await this.waitForLoaderToDisappear();
    await this.leaveTableRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  }

  async assignLeaveEntitlement(employeeName: string, days: string) {
    await this.waitForLoaderToDisappear();
    await this.employeeNameSearchInput.waitFor({ state: 'visible' });
    await this.employeeNameSearchInput.fill(employeeName);
    await this.autocompleteDropdown.waitFor({ state: 'visible' });
    await this.autocompleteOption.first().click();
    
    await this.leaveTypeSelect.click();
    await this.selectOptions.nth(1).waitFor({ state: 'visible' });
    await this.selectOptions.nth(1).click();
    
    await this.entitlementInput.fill(days);
    await this.searchBtn.click();
    
    if (await this.confirmBtn.isVisible({ timeout: 2000 })) {
      await this.confirmBtn.click();
    }
    await this.waitForLoaderToDisappear();
  }
}