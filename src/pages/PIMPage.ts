import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export const PIMLocator = {
  pimMenuItem: '.oxd-main-menu-item:has-text("PIM")',
  addEmployeeBtn: 'button:has-text("Add")',
  firstNameInput: 'input[name="firstName"]',
  lastNameInput: 'input[name="lastName"]',
  employeeIdInput: '.oxd-input-group:has-text("Employee Id") input',
  saveBtn: 'button[type="submit"]',
  firstNameValidationError: '.oxd-input-group:has-text("Employee Full Name") .oxd-input-group__message',
  searchEmployeeNameInput: '.oxd-autocomplete-text-input input',
  searchEmployeeIdInput: '.oxd-input-group:has-text("Employee Id") input',
  searchBtn: 'button[type="submit"]',
  tableRows: '.oxd-table-body .oxd-table-card',
  tableBody: '.orangehrm-horizontal-padding', 
  deleteConfirmBtn: 'button:has-text("Yes, Delete")',
  trashIcon: '.bi-trash',
  pencilIcon: '.bi-pencil-fill',
  jobTab: '.orangehrm-tabs-item:has-text("Job")',
  jobTitleSelect: '.oxd-input-group:has-text("Job Title") .oxd-select-text',
  selectOptions: '.oxd-select-option',
  autocompleteDropdownOption: '.oxd-autocomplete-dropdown .oxd-autocomplete-option',
  resetBtn: 'button:has-text("Reset")',
  noRecordsText: 'text="No Records Found"'
};

export class PIMPage extends BasePage {
  readonly pimMenuItem: Locator;
  readonly addEmployeeBtn: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly saveBtn: Locator;
  readonly firstNameValidationError: Locator;
  readonly searchEmployeeNameInput: Locator;
  readonly searchEmployeeIdInput: Locator;
  readonly searchBtn: Locator;
  readonly tableRows: Locator;
  readonly tableBody: Locator;
  readonly deleteConfirmBtn: Locator;
  readonly firstRowDeleteBtn: Locator;
  readonly firstRowEditBtn: Locator;
  readonly jobTab: Locator;
  readonly jobTitleSelect: Locator;
  readonly selectOptions: Locator;
  readonly autocompleteDropdownOption: Locator;
  readonly resetBtn: Locator;
  readonly noRecordsText: Locator;

  constructor(page: Page) {
    super(page);
    this.pimMenuItem = page.locator(PIMLocator.pimMenuItem);
    this.addEmployeeBtn = page.locator(PIMLocator.addEmployeeBtn).first();
    this.firstNameInput = page.locator(PIMLocator.firstNameInput);
    this.lastNameInput = page.locator(PIMLocator.lastNameInput);
    this.employeeIdInput = page.locator(PIMLocator.employeeIdInput);
    this.saveBtn = page.locator(PIMLocator.saveBtn).first();
    this.firstNameValidationError = page.locator(PIMLocator.firstNameValidationError);
    this.searchEmployeeNameInput = page.locator(PIMLocator.searchEmployeeNameInput).first();
    this.searchEmployeeIdInput = page.locator(PIMLocator.searchEmployeeIdInput).first();
    this.searchBtn = page.locator(PIMLocator.searchBtn).first();
    this.tableRows = page.locator(PIMLocator.tableRows);
    this.tableBody = page.locator(PIMLocator.tableBody);
    this.deleteConfirmBtn = page.locator(PIMLocator.deleteConfirmBtn);
    this.firstRowDeleteBtn = this.tableRows.first().locator(PIMLocator.trashIcon);
    this.firstRowEditBtn = this.tableRows.first().locator(PIMLocator.pencilIcon);
    this.jobTab = page.locator(PIMLocator.jobTab);
    this.jobTitleSelect = page.locator(PIMLocator.jobTitleSelect);
    this.selectOptions = page.locator(PIMLocator.selectOptions);
    this.autocompleteDropdownOption = page.locator(PIMLocator.autocompleteDropdownOption);
    this.resetBtn = page.locator(PIMLocator.resetBtn);
    this.noRecordsText = this.tableBody.locator(PIMLocator.noRecordsText);
  }

  async navigateToPIM() {
    await this.click(this.pimMenuItem);
    await this.page.waitForLoadState('networkidle');
  }

  async addEmployee(firstName: string, lastName: string, empId?: string) {
    await this.click(this.addEmployeeBtn);
    if (firstName !== '') {
      await this.type(this.firstNameInput, firstName);
    } else {
      await this.firstNameInput.fill('');
    }
    await this.type(this.lastNameInput, lastName);
    if (empId) {
      await this.type(this.employeeIdInput, empId);
    }
    await this.click(this.saveBtn);
    await this.page.waitForLoadState('networkidle');
  }

  async searchEmployeeById(empId: string) {
    await this.type(this.searchEmployeeIdInput, empId);
    await this.click(this.searchBtn);
    await Promise.race([
      this.tableRows.first().waitFor({ state: 'visible' }),
      this.noRecordsText.waitFor({ state: 'visible' })
    ]).catch(() => {});
  }

  async searchEmployeeByName(name: string) {
    await this.type(this.searchEmployeeNameInput, name);
    await this.autocompleteDropdownOption.first().waitFor({ state: 'visible' });
    await this.autocompleteDropdownOption.first().click().catch(() => {});
    await this.click(this.searchBtn);
    await this.tableRows.first().waitFor({ state: 'visible' }).catch(() => {});
  }

  async verifyOrResetSearch(empId: string) {
    await this.searchEmployeeById(empId);
    const isNoRecord = await this.noRecordsText.isVisible();
    if (isNoRecord) {
      await this.click(this.resetBtn);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async deleteEmployee(empId: string) {
    await this.verifyOrResetSearch(empId);
    await this.click(this.firstRowDeleteBtn);
    await this.click(this.deleteConfirmBtn);
    await this.page.waitForLoadState('networkidle');
  }

  async updateJobTitle(empId: string, jobTitle: string) {
    await this.verifyOrResetSearch(empId);
    await this.click(this.firstRowEditBtn);
    await this.page.waitForLoadState('networkidle');
    await this.click(this.jobTab);
    await this.page.waitForLoadState('networkidle');
    await this.selectDropdownOption(this.jobTitleSelect, this.selectOptions, jobTitle);
    await this.click(this.saveBtn);
    await this.page.waitForLoadState('networkidle');
  }
}