# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendance.spec.ts >> Attendance Module @attendance >> TC-ATT-01 Punch in without prior punch out @smoke
- Location: src\tests\attendance.spec.ts:6:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'In' }) to be visible
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
  9  |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
  10 |       await attendancePage.inButton.waitFor({ state: 'visible', timeout: 5000 });
> 11 |   });
     |                                     ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  12 |     await test.step('Step 2: Punch in with a note', async () => {
  13 |       await attendancePage.punchIn(testData.attendance.punchInNote);
  14 |     });
  15 |     await test.step('Step 3: Verify success message is displayed', async () => {
  16 |       await expect(attendancePage.toastMessage).toBeVisible();
  17 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  18 |     });
  19 |     await test.step('Step 4: Verify title is Punch Out and Out button is visible', async () => {
  20 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  21 |       await expect(attendancePage.outButton).toBeVisible();
  22 |     });
  23 |   });
  24 | 
  25 |   test('TC-ATT-02 Punch out after punching in @smoke', async ({ page, attendancePage }) => {
  26 |     await test.step('Setup: Ensure punched in state', async () => {
  27 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  28 |     });
  29 |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
  30 |       await attendancePage.outButton.waitFor({ state: 'visible', timeout: 5000 });
  31 |     });
  32 |     await test.step('Step 2: Punch out with a note', async () => {
  33 |       await attendancePage.punchOut(testData.attendance.punchOutNote);
  34 |     });
  35 |     await test.step('Step 3: Verify success message is displayed', async () => {
  36 |       await expect(attendancePage.toastMessage).toBeVisible();
  37 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  38 |     });
  39 |     await test.step('Step 4: Verify title returns to Punch In and In button is visible', async () => {
  40 |       await expect(attendancePage.pageTitle).toHaveText('Punch In');
  41 |       await expect(attendancePage.inButton).toBeVisible();
  42 |     });
  43 |     await test.step('Step 5: Verify attendance record displays calculated duration', async () => {
  44 |       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord');
  45 |       await page.waitForLoadState('networkidle');
  46 |       const lastRow = page.locator('.oxd-table-card').last();
  47 |       await lastRow.waitFor({ state: 'visible' });
  48 |       const durationCell = lastRow.locator('.oxd-table-cell').nth(3);
  49 |       
  50 |       await expect(durationCell).not.toBeEmpty();
  51 |     });
  52 |   });
  53 | 
  54 |   test('TC-ATT-03 Punch in when already punched in @regression', async ({ attendancePage }) => {
  55 |     await test.step('Setup: Ensure punched in state', async () => {
  56 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  57 |     });
  58 |     await test.step('Step 1: Navigate to Punch In page while punched in', async () => {
  59 |       await attendancePage.navigateToPunchInOut();
  60 |     });
  61 |     await test.step('Step 2: Verify duplicate punch in is blocked (Punch Out interface shown)', async () => {
  62 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  63 |       await expect(attendancePage.outButton).toBeVisible();
  64 |       await expect(attendancePage.inButton).not.toBeVisible();
  65 |     });
  66 |   });
  67 | });
  68 | 
```