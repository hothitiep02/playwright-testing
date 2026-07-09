import { test, expect } from '../fixtures/base.fixture';
import testData from '../utils/testData.json';

test.describe('Attendance Module @attendance', () => {
  test('TC-ATT-01 Punch in without prior punch out @smoke', async ({ attendancePage }) => {
    await test.step('Setup: Ensure punched out state', async () => {
      await attendancePage.ensurePunchedOut(testData.attendance.autoPunchOutNote);
    });

    await test.step('Step 1: Navigate to Punch In/Out page', async () => {
      await attendancePage.inButton.waitFor({ state: 'visible', timeout: 5000 });
  });

    await test.step('Step 2: Punch in with a note', async () => {
      await attendancePage.punchIn(testData.attendance.punchInNote);
    });

    await test.step('Step 3: Verify success message is displayed', async () => {
      await expect(attendancePage.toastMessage).toBeVisible();
      await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
    });

    await test.step('Step 4: Verify title is Punch Out and Out button is visible', async () => {
      await expect(attendancePage.pageTitle).toHaveText('Punch Out');
      await expect(attendancePage.outButton).toBeVisible();
    });
  });

  test('TC-ATT-02 Punch out after punching in @smoke', async ({ page, attendancePage }) => {
    await test.step('Setup: Ensure punched in state', async () => {
      await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
    });
    await test.step('Step 1: Navigate to Punch In/Out page', async () => {
      await attendancePage.outButton.waitFor({ state: 'visible', timeout: 5000 });
    });
    await test.step('Step 2: Punch out with a note', async () => {
      await attendancePage.punchOut(testData.attendance.punchOutNote);
    });
    await test.step('Step 3: Verify success message is displayed', async () => {
      await expect(attendancePage.toastMessage).toBeVisible();
      await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
    });
    await test.step('Step 4: Verify title returns to Punch In and In button is visible', async () => {
      await expect(attendancePage.pageTitle).toHaveText('Punch In');
      await expect(attendancePage.inButton).toBeVisible();
    });
    await test.step('Step 5: Verify attendance record displays calculated duration', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord');
      await page.waitForLoadState('networkidle');
      const lastRow = page.locator('.oxd-table-card').last();
      await lastRow.waitFor({ state: 'visible' });
      const durationCell = lastRow.locator('.oxd-table-cell').nth(3);
      
      await expect(durationCell).not.toBeEmpty();
    });
  });

  test('TC-ATT-03 Punch in when already punched in @regression', async ({ attendancePage }) => {
    await test.step('Setup: Ensure punched in state', async () => {
      await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
    });

    await test.step('Step 1: Navigate to Punch In page while punched in', async () => {
      await attendancePage.navigateToPunchInOut();
    });

    await test.step('Step 2: Verify duplicate punch in is blocked (Punch Out interface shown)', async () => {
      await expect(attendancePage.pageTitle).toHaveText('Punch Out');
      await expect(attendancePage.outButton).toBeVisible();
      await expect(attendancePage.inButton).not.toBeVisible();
    });
  });
});