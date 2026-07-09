import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export const AttendanceLocator = {
  menuTime: '.oxd-main-menu-item:has-text("Time")',
  navAttendanceTab: '.oxd-topbar-body-nav-tab',
  navPunchInOutOption: '.oxd-dropdown-menu >> text="Punch In/Out"',
  pageTitle: '.orangehrm-main-title',
  noteTextarea: 'textarea',
  toastMessage: '.oxd-toast-content'
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
    this.navAttendanceTab = page.locator(
      AttendanceLocator.navAttendanceTab,
      { hasText: 'Attendance' }
    );
    this.navPunchInOutOption = page.locator(
      AttendanceLocator.navPunchInOutOption
    );

    this.pageTitle = page.locator(AttendanceLocator.pageTitle);
    this.noteTextarea = page.locator(AttendanceLocator.noteTextarea);

    this.inButton = page.getByRole('button', { name: 'In' });
    this.outButton = page.getByRole('button', { name: 'Out' });

    this.toastMessage = page.locator(
      AttendanceLocator.toastMessage
    ).first();
  }

  async navigateToPunchInOut() {
    await this.click(this.menuTime);
    await this.click(this.navAttendanceTab);
    await this.click(this.navPunchInOutOption);

    await this.pageTitle.waitFor({
      state: 'visible'
    });
  }

  async isPunchedIn(): Promise<boolean> {
    await this.pageTitle.waitFor();

    return await this.outButton.isVisible();
  }

  async punchIn(note: string) {
    await this.type(this.noteTextarea, note);

    await this.click(this.inButton);

    await this.toastMessage.waitFor({
      state: 'visible',
      timeout: 10000
    });
  }

  async punchOut(note: string) {
    await this.type(this.noteTextarea, note);

    await this.click(this.outButton);

    await this.toastMessage.waitFor({
      state: 'visible',
      timeout: 10000
    });
  }

  async ensurePunchedOut(note: string) {
    await this.navigateToPunchInOut();

    if (await this.outButton.isVisible()) {
      await this.punchOut(note);
    }
  }

  async ensurePunchedIn(note: string) {
    await this.navigateToPunchInOut();

    if (await this.inButton.isVisible()) {
      await this.punchIn(note);
    }
  }
}