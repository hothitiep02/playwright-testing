import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export const AttendanceLocator = {
  menuTime:'.oxd-main-menu-item:has-text("Time")',
  navAttendanceTab: '.oxd-topbar-body-nav-tab',
  navPunchInOutOption: '.oxd-dropdown-menu >> text="Punch In/Out"',
  pageTitle: '.orangehrm-main-title',
  noteTextarea: 'textarea',
  inButton: 'button:has-text("In")',
  outButton: 'button:has-text("Out")',
  toastMessage: '.oxd-toast-content',
};

export class AttendancePage extends BasePage {
  readonly menuTime: Locator;
  readonly navAttendanceTab: Locator;
  readonly navPunchInOutOption: Locator;
  readonly pageTitle: Locator;
  readonly noteTextarea: Locator;
  readonly inButton: Locator;
  readonly outButton: Locator;
  readonly toastMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.menuTime = page.locator(AttendanceLocator.menuTime);
    this.navAttendanceTab = page.locator(AttendanceLocator.navAttendanceTab, { hasText: 'Attendance' });
    this.navPunchInOutOption = page.locator(AttendanceLocator.navPunchInOutOption);
    this.pageTitle = page.locator(AttendanceLocator.pageTitle);
    this.noteTextarea = page.locator(AttendanceLocator.noteTextarea);
    this.inButton = page.locator(AttendanceLocator.inButton);
    this.outButton = page.locator(AttendanceLocator.outButton);
    this.toastMessage = page.locator(AttendanceLocator.toastMessage).first();
  }

  async navigateToPunchInOut() {
    await this.click(this.menuTime);
    await this.click(this.navAttendanceTab);
    await this.click(this.navPunchInOutOption);
    await this.page.waitForLoadState('networkidle');
  }

  async isPunchedIn(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    const title = await this.getValidationMessage(this.pageTitle);
    return title.trim() === 'Punch Out';
  }

  async punchIn(note: string) {
    await this.type(this.noteTextarea, note);
    await this.click(this.inButton);
    await this.page.waitForLoadState('networkidle');
  }

  async punchOut(note: string) {
    await this.type(this.noteTextarea, note);
    await this.click(this.outButton);
    await this.page.waitForLoadState('networkidle');
  }

  async ensurePunchedOut(autoNote: string) {
    await this.navigateToPunchInOut();
    if (await this.isPunchedIn()) {
      await this.punchOut(autoNote);
      await this.toastMessage.waitFor({ state: 'visible', timeout: 15000 });
      await this.page.waitForTimeout(2000);
    }
  }

  async ensurePunchedIn(autoNote: string) {
    await this.navigateToPunchInOut();
    if (!(await this.isPunchedIn())) {
      await this.punchIn(autoNote);
      await this.toastMessage.waitFor({ state: 'visible', timeout: 15000 });
      await this.page.waitForTimeout(2000);
    }
  }
}