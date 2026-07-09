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
  - waiting for locator('button:has-text("In")') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Attendance" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: David Flag
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Timesheets
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Attendance
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Reports
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Project Info
              - generic [ref=e143]: 
          - button "" [ref=e145] [cursor=pointer]:
            - generic [ref=e146]: 
  - generic [ref=e147]:
    - generic [ref=e150]:
      - heading "Punch Out" [level=6] [ref=e151]
      - separator [ref=e152]
      - generic [ref=e154]:
        - generic [ref=e159]:
          - generic [ref=e161]:
            - generic [ref=e163]: Punched in time
            - paragraph [ref=e165]:
              - text: 2026-09-07 - 04:14 PM
              - generic [ref=e166]: (GMT +05:30)
          - generic [ref=e168]:
            - generic [ref=e170]: Punched In Note
            - paragraph [ref=e172]: Starting work for the day
          - generic [ref=e174]:
            - generic [ref=e176]: Date*
            - generic [ref=e179]:
              - textbox "yyyy-dd-mm" [ref=e180]: 2026-09-07
              - generic [ref=e181] [cursor=pointer]: 
          - generic [ref=e183]:
            - generic [ref=e185]: Time*
            - generic [ref=e188]:
              - textbox "hh:mm" [ref=e189]: 06:05 PM
              - generic [ref=e190] [cursor=pointer]: 
        - generic [ref=e194]:
          - generic [ref=e196]: Note
          - textbox "Type here" [ref=e198]: System auto punch out
        - separator [ref=e199]
        - generic [ref=e200]:
          - paragraph [ref=e201]: "* Required"
          - button "Out" [active] [ref=e202] [cursor=pointer]
    - generic [ref=e203]:
      - paragraph [ref=e204]: OrangeHRM OS 5.9
      - paragraph [ref=e205]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e206] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/base.fixture';
  2  | import testData from '../utils/testData.json';
  3  | 
  4  | test.describe('Attendance Module @attendance', () => {
  5  | 
  6  |   test('TC-ATT-01 Punch in without prior punch out @smoke', async ({ attendancePage }) => {
  7  |     await test.step('Setup: Ensure punched out state', async () => {
  8  |       await attendancePage.ensurePunchedOut(testData.attendance.autoPunchOutNote);
  9  |     });
  10 |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
> 11 |       await attendancePage.inButton.waitFor({ state: 'visible', timeout: 5000 });
     |                                     ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  12 |   });
  13 |     await test.step('Step 2: Punch in with a note', async () => {
  14 |       await attendancePage.punchIn(testData.attendance.punchInNote);
  15 |     });
  16 |     await test.step('Step 3: Verify success message is displayed', async () => {
  17 |       await expect(attendancePage.toastMessage).toBeVisible();
  18 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  19 |     });
  20 |     await test.step('Step 4: Verify title is Punch Out and Out button is visible', async () => {
  21 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  22 |       await expect(attendancePage.outButton).toBeVisible();
  23 |     });
  24 |   });
  25 | 
  26 |   test('TC-ATT-02 Punch out after punching in @smoke', async ({ page, attendancePage }) => {
  27 |     await test.step('Setup: Ensure punched in state', async () => {
  28 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  29 |     });
  30 |     await test.step('Step 1: Navigate to Punch In/Out page', async () => {
  31 |       await attendancePage.outButton.waitFor({ state: 'visible', timeout: 5000 });
  32 |     });
  33 |     await test.step('Step 2: Punch out with a note', async () => {
  34 |       await attendancePage.punchOut(testData.attendance.punchOutNote);
  35 |     });
  36 |     await test.step('Step 3: Verify success message is displayed', async () => {
  37 |       await expect(attendancePage.toastMessage).toBeVisible();
  38 |       await expect(attendancePage.toastMessage).toContainText(/Successfully/i);
  39 |     });
  40 |     await test.step('Step 4: Verify title returns to Punch In and In button is visible', async () => {
  41 |       await expect(attendancePage.pageTitle).toHaveText('Punch In');
  42 |       await expect(attendancePage.inButton).toBeVisible();
  43 |     });
  44 |     await test.step('Step 5: Verify attendance record displays calculated duration', async () => {
  45 |       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord');
  46 |       await page.waitForLoadState('networkidle');
  47 |       const lastRow = page.locator('.oxd-table-card').last();
  48 |       await lastRow.waitFor({ state: 'visible' });
  49 |       const durationCell = lastRow.locator('.oxd-table-cell').nth(3);
  50 |       
  51 |       await expect(durationCell).not.toBeEmpty();
  52 |     });
  53 |   });
  54 | 
  55 |   test('TC-ATT-03 Punch in when already punched in @regression', async ({ attendancePage }) => {
  56 |     await test.step('Setup: Ensure punched in state', async () => {
  57 |       await attendancePage.ensurePunchedIn(testData.attendance.autoPunchInNote);
  58 |     });
  59 |     await test.step('Step 1: Navigate to Punch In page while punched in', async () => {
  60 |       await attendancePage.navigateToPunchInOut();
  61 |     });
  62 |     await test.step('Step 2: Verify duplicate punch in is blocked (Punch Out interface shown)', async () => {
  63 |       await expect(attendancePage.pageTitle).toHaveText('Punch Out');
  64 |       await expect(attendancePage.outButton).toBeVisible();
  65 |       await expect(attendancePage.inButton).not.toBeVisible();
  66 |     });
  67 |   });
  68 | });
  69 | 
```