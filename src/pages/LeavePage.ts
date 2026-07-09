import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export const LeaveLocator = {
  menuLeave: '.oxd-main-menu-item:has-text("Leave")', 
  fromDateInput: 'input[placeholder="yyyy-dd-mm"]',
  toDateInput: 'input[placeholder="yyyy-dd-mm"]',
  applyButton: 'button:has-text("Apply")',
  statusDropdown: '.oxd-select-text--active',
  searchButton: 'button:has-text("Search")',
  tableRows: '.oxd-table-card',
  toastMessage: '.oxd-toast-content',
  errorMessage: '.oxd-input-field-error-message',
  confirmButton: 'button:has-text("Yes, Approve")',
  applyTab: '.oxd-topbar-body-nav-tab',
  leaveTypeDropdown: '.oxd-input-group:has-text("Leave Type") .oxd-select-text',
  selectOptions: '.oxd-select-dropdown .oxd-select-option',
  searchEmpInput: '.oxd-autocomplete-text-input input',
  autocompleteOptions: '.oxd-autocomplete-dropdown .oxd-autocomplete-option',
  entitlementEmpInput: '.oxd-input-group:has-text("Employee Name") input',
  entitlementLeaveTypeDropdown: '.oxd-input-group:has-text("Leave Type") .oxd-select-text',
  entitlementInput: '.oxd-input-group:has-text("Entitlement") input',
  entitlementSubmitButton: 'button[type="submit"]',
  entitlementConfirmButton: 'button:has-text("Confirm"), button:has-text("Ok")',
  formLoader: '.oxd-form-loader'
} as const;

export class LeavePage extends BasePage {
  readonly menuLeave: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly applyButton: Locator;
  readonly statusDropdown: Locator;
  readonly searchButton: Locator;
  readonly tableRows: Locator;
  readonly toastMessage: Locator;
  readonly errorMessage: Locator;
  readonly confirmButton: Locator;
  readonly applyTab: Locator;
  readonly leaveTypeDropdown: Locator;
  readonly selectOptions: Locator;
  readonly searchEmpInput: Locator;
  readonly autocompleteOptions: Locator;
  readonly entitlementEmpInput: Locator;
  readonly entitlementLeaveTypeDropdown: Locator;
  readonly entitlementInput: Locator;
  readonly entitlementSubmitButton: Locator;
  readonly entitlementConfirmButton: Locator;
  readonly formLoader: Locator;

  constructor(page: Page) {
    super(page);
    this.menuLeave = page.locator(LeaveLocator.menuLeave);
    this.fromDateInput = page.locator(LeaveLocator.fromDateInput).first();
    this.toDateInput = page.locator(LeaveLocator.toDateInput).nth(1);
    this.applyButton = page.locator(LeaveLocator.applyButton);
    this.statusDropdown = page.locator(LeaveLocator.statusDropdown).first();
    this.searchButton = page.locator(LeaveLocator.searchButton);
    this.tableRows = page.locator(LeaveLocator.tableRows);
    this.toastMessage = page.locator(LeaveLocator.toastMessage).first();
    this.errorMessage = page.locator(LeaveLocator.errorMessage);
    this.confirmButton = page.locator(LeaveLocator.confirmButton);
    this.applyTab = page.locator(LeaveLocator.applyTab, { hasText: 'Apply' });
    this.leaveTypeDropdown = page.locator(LeaveLocator.leaveTypeDropdown);
    this.selectOptions = page.locator(LeaveLocator.selectOptions);
    this.searchEmpInput = page.locator(LeaveLocator.searchEmpInput);
    this.autocompleteOptions = page.locator(LeaveLocator.autocompleteOptions);
    this.entitlementEmpInput = page.locator(LeaveLocator.entitlementEmpInput);
    this.entitlementLeaveTypeDropdown = page.locator(LeaveLocator.entitlementLeaveTypeDropdown);
    this.entitlementInput = page.locator(LeaveLocator.entitlementInput);
    this.entitlementSubmitButton = page.locator(LeaveLocator.entitlementSubmitButton);
    this.entitlementConfirmButton = page.locator(LeaveLocator.entitlementConfirmButton);
    this.formLoader = page.locator(LeaveLocator.formLoader);
  }

  async waitForLoaderToDisappear() {
    await this.formLoader.waitFor({ state: 'detached', timeout: 5000 }).catch(() => {});
  }

  async navigateToLeave() {
    await this.click(this.menuLeave);
    await this.click(this.applyTab);
    await this.page.waitForLoadState('networkidle');
    await this.waitForLoaderToDisappear();
  }

  async selectLeaveType(type: string) {
    await this.waitForLoaderToDisappear();
    await this.selectDropdownOption(this.leaveTypeDropdown, this.selectOptions, type);
  }

  async fillLeaveForm(start: string, end: string) {
    await this.fromDateInput.focus();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.fromDateInput.fill(start);
    await this.toDateInput.focus();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.toDateInput.fill(end);
    await this.page.keyboard.press('Escape');
  }

  async submitRequest() {
    await this.click(this.applyButton);
  }

  async selectLeaveStatus(status: string) {
    await this.waitForLoaderToDisappear();
    await this.click(this.statusDropdown);
    await this.page.getByRole('option', { name: status, exact: true }).click();
  }

  async searchLeave() {
    await this.click(this.searchButton);
    await this.page.waitForLoadState('networkidle');
    await this.waitForLoaderToDisappear();
  }

  async approveFirstRequest() {
    await this.tableRows.first().waitFor({ state: 'visible' });
    const approveBtn = this.tableRows.first().getByRole('button', { name: 'Approve' });
    await this.click(approveBtn);
  }

  async rejectFirstRequest() {
    await this.tableRows.first().waitFor({ state: 'visible' });
    const rejectBtn = this.tableRows.first().getByRole('button', { name: 'Reject' });
    await this.click(rejectBtn);
  }

  async addEntitlement(empName: string, leaveType: string, amount: string) {
    await this.waitForLoaderToDisappear();
    await this.type(this.entitlementEmpInput, empName);
    await this.autocompleteOptions.first().waitFor({ state: 'visible', timeout: 5000 });
    await this.click(this.autocompleteOptions.first());
    await this.selectDropdownOption(this.entitlementLeaveTypeDropdown, this.selectOptions, leaveType);
    await this.type(this.entitlementInput, amount);
    await this.click(this.entitlementSubmitButton);
    if (await this.entitlementConfirmButton.isVisible({ timeout: 2000 })) {
      await this.click(this.entitlementConfirmButton);
    }
  }

  async filterByEmployee(empName: string) {
    await this.type(this.searchEmpInput, empName);
    await this.autocompleteOptions.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    if (await this.autocompleteOptions.count() > 0) {
      await this.click(this.autocompleteOptions.first());
    }
  }

  // ✅ HÀM MỚI THÊM: Trả về Locator chứa văn bản trạng thái ở dòng đầu tiên trong bảng kết quả
  async getFirstRowStatusLocator(statusText: string): Promise<Locator> {
    return this.tableRows.first().getByText(statusText, { exact: true });
  }
}