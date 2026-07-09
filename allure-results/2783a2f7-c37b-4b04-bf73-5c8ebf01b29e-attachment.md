# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendance.spec.ts >> Attendance Module >> TC-ATT-01 Punch in without prior punch out @smoke
- Location: src\tests\attendance.spec.ts:6:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('button:has-text("In")') to be visible
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut" navigation to finish...

```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/base.fixture';
  2  | import testData from '../utils/testData.json';
  3  | 
  4  | test.describe('Attendance Module @attendance', () => {
  5  |   test('TC-ATT-01 Punch in without prior punch out @smoke', async ({ attendancePage }) => {
  6  |     await test.step('Setup: Ensure punched out state', async () => {
  7  |       await attendancePage.ensurePunchedOut(testData.attendance.autoPunchOutNote);
  8  |     });
  9  | 
  10 |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
  11 |       await attendancePage.inButton.waitFor({ state: 'visible', timeout: 5000 });
> 12 |   });
     |                                     ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  13 | 
  14 |     await test.step('Step 2: Punch in with a note', async () => {
  15 |       await attendancePage.punchIn(testData.attendance.punchInNote);
  16 |     });
  17 | 
  18 |     await test.step('Step 3: Verify success message is displayed', async () => {
  19 |       await expect(attendancePage.toastMessage).toBeVisible();
  20 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  21 |     });
  22 | 
  23 |     await test.step('Step 4: Verify title is Punch Out and Out button is visible', async () => {
  24 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  25 |       await expect(attendancePage.outButton).toBeVisible();
  26 |     });
  27 |   });
  28 | 
  29 |   test('TC-ATT-02 Punch out after punching in @smoke', async ({ page, attendancePage }) => {
  30 |     await test.step('Setup: Ensure punched in state', async () => {
  31 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  32 |     });
  33 |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
  34 |       await attendancePage.outButton.waitFor({ state: 'visible', timeout: 5000 });
  35 |     });
  36 |     await test.step('Step 2: Punch out with a note', async () => {
  37 |       await attendancePage.punchOut(testData.attendance.punchOutNote);
  38 |     });
  39 |     await test.step('Step 3: Verify success message is displayed', async () => {
  40 |       await expect(attendancePage.toastMessage).toBeVisible();
  41 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  42 |     });
  43 |     await test.step('Step 4: Verify title returns to Punch In and In button is visible', async () => {
  44 |       await expect(attendancePage.pageTitle).toHaveText('Punch In');
  45 |       await expect(attendancePage.inButton).toBeVisible();
  46 |     });
  47 |     await test.step('Step 5: Verify attendance record displays calculated duration', async () => {
  48 |       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord');
  49 |       await page.waitForLoadState('networkidle');
  50 |       const lastRow = page.locator('.oxd-table-card').last();
  51 |       await lastRow.waitFor({ state: 'visible' });
  52 |       const durationCell = lastRow.locator('.oxd-table-cell').nth(3);
  53 |       
  54 |       await expect(durationCell).not.toBeEmpty();
  55 |     });
  56 |   });
  57 | 
  58 |   test('TC-ATT-03 Punch in when already punched in @regression', async ({ attendancePage }) => {
  59 |     await test.step('Setup: Ensure punched in state', async () => {
  60 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  61 |     });
  62 | 
  63 |     await test.step('Step 1: Navigate to Punch In page while punched in', async () => {
  64 |       await attendancePage.navigateToPunchInOut();
  65 |     });
  66 | 
  67 |     await test.step('Step 2: Verify duplicate punch in is blocked (Punch Out interface shown)', async () => {
  68 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  69 |       await expect(attendancePage.outButton).toBeVisible();
  70 |       await expect(attendancePage.inButton).not.toBeVisible();
  71 |     });
  72 |   });
  73 | });
```