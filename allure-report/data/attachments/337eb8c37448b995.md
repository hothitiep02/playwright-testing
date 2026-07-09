# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Leave Module - Mandatory Suite @leave >> TC-LV-01-Apply for leave with valid date range @smoke
- Location: src\tests\leave.spec.ts:57:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast')
Expected pattern: /Successfully Saved|Success/i
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.oxd-toast')
    2 × locator resolved to <div data-v-35c8fe09="" aria-live="assertive" class="oxd-toast oxd-toast--warn oxd-toast-container--toast oxd-toast-list-enter-active oxd-toast-list-enter-to">…</div>
      - unexpected value "WarningFailed to Submit×"
    6 × locator resolved to <div data-v-35c8fe09="" aria-live="assertive" class="oxd-toast oxd-toast--warn oxd-toast-container--toast">…</div>
      - unexpected value "WarningFailed to Submit×"
    - locator resolved to <div data-v-35c8fe09="" aria-live="assertive" class="oxd-toast oxd-toast--warn oxd-toast-container--toast oxd-toast-list-leave-active oxd-toast-list-leave-to">…</div>
    - unexpected value "WarningFailed to Submit×"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: lbtool nomi
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Overlapping Leave Request(s) Found" [level=6]
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row "Date No. of Hours Leave Type Status Comments":
      - columnheader "Date"
      - columnheader "No. of Hours"
      - columnheader "Leave Type"
      - columnheader "Status"
      - columnheader "Comments"
  - rowgroup:
    - row "2026-07-08 8.00 CAN - Bereavement Pending Approval":
      - cell "2026-07-08"
      - cell "8.00"
      - cell "CAN - Bereavement"
      - cell "Pending Approval"
      - cell
- heading "Apply Leave" [level=6]
- separator
- text: Leave Type* CAN - Bereavement  Leave Balance 
- paragraph: 47.00 Day(s)
- text: From Date*
- textbox "yyyy-dd-mm": 2026-07-08
- text:  To Date*
- textbox "yyyy-dd-mm": 2026-07-08
- text:  Duration Full Day  Comments
- textbox
- separator
- paragraph: "* Required"
- button "Apply"
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/base.fixture';
  2   | import { env } from '../utils/env';
  3   | import { LoginPage } from '../pages/auth/LoginPage';
  4   | import { PIMPage } from '../pages/PIMPage';
  5   | import { LeavePage, LeaveLocator } from '../pages/LeavePage'; 
  6   | import * as testData from '../utils/testData.json';
  7   | 
  8   | test.describe('Leave Module - Mandatory Suite @leave', () => {
  9   |   test.describe.configure({ mode: 'serial' });
  10  | 
  11  |   const testEmpFirstName = testData.employee.firstName;
  12  |   const testEmpLastName = testData.employee.lastName;
  13  |   const testFullName = `${testEmpFirstName} ${testEmpLastName}`;
  14  |   const testEmpId = testData.employee.employeeId;
  15  | 
  16  |   const getDynamicDateStrings = (startOffset: number, duration: number) => {
  17  |     const start = new Date();
  18  |     start.setDate(start.getDate() + startOffset);
  19  |     const end = new Date(start);
  20  |     end.setDate(start.getDate() + duration);
  21  |     return {
  22  |       startDate: start.toISOString().split('T')[0],
  23  |       endDate: end.toISOString().split('T')[0]
  24  |     };
  25  |   };
  26  | 
  27  |   test.beforeAll(async ({ browser }) => {
  28  |     await test.step('Pre-condition: Clean up old data, create employee and assign Leave Entitlements', async () => {
  29  |       const context = await browser.newContext();
  30  |       const page = await context.newPage();
  31  |       const loginPage = new LoginPage(page);
  32  |       const pimPage = new PIMPage(page);
  33  |       const leavePage = new LeavePage(page);
  34  |       
  35  |       await page.goto(`${env.baseUrl}/web/index.php/auth/login`);
  36  |       await loginPage.login(testData.admin.username, testData.admin.password);
  37  |       
  38  |       await pimPage.navigateToPIM();
  39  |       await pimPage.deleteEmployee(testEmpId).catch(() => {});
  40  |       await pimPage.addEmployee(testEmpFirstName, testEmpLastName, testEmpId);
  41  | 
  42  |       await page.goto(`${env.baseUrl}/web/index.php/leave/addLeaveEntitlement`);
  43  |       await leavePage.assignLeaveEntitlement(testFullName, '10');
  44  |       
  45  |       await context.close();
  46  |     });
  47  |   });
  48  | 
  49  |   test.beforeEach(async ({ loginPage, leavePage }) => {
  50  |     await test.step('Pre-condition: Login to the system and navigate to the Leave Module', async () => {
  51  |       await loginPage.navigateTo('/web/index.php/auth/login');
  52  |       await loginPage.login(testData.admin.username, testData.admin.password);
  53  |       await leavePage.navigateToLeave();
  54  |     });
  55  |   });
  56  | 
  57  |   test('TC-LV-01-Apply for leave with valid date range @smoke', async ({ leavePage }) => {
  58  |     const period = getDynamicDateStrings(1, 0);
  59  | 
  60  |     await test.step('Action: Fill in valid details and submit the leave request', async () => {
  61  |       await leavePage.applyLeaveAction(period.startDate, period.endDate);
  62  |     });
  63  | 
  64  |     await test.step('Verification: Leave request is submitted successfully (Toast message displayed)', async () => {
  65  |       await expect(leavePage.toast).toBeVisible({ timeout: 10000 });
> 66  |       await expect(leavePage.toast).toContainText(/Successfully Saved|Success/i);
      |                                     ^ Error: expect(locator).toContainText(expected) failed
  67  |     });
  68  |   });
  69  | 
  70  |   test('TC-LV-02-Apply for leave with end date before start date @regression', async ({ leavePage }) => {
  71  |     await test.step('Action: Fill in a leave request where the end date precedes the start date', async () => {
  72  |       await leavePage.applyLeaveAction(testData.leave.startDate, testData.leave.invalidEndDate);
  73  |     });
  74  | 
  75  |     await test.step('Verification: System blocks submission and displays validation error under the date field', async () => {
  76  |       await expect(leavePage.dateErrorMessage.first()).toBeVisible();
  77  |       await expect(leavePage.dateErrorMessage.first()).toContainText(/To date should be after|cannot be before/i);
  78  |     });
  79  |   });
  80  | 
  81  |   test('TC-LV-04-Admin approves a pending leave request @regression', async ({ leavePage }) => {
  82  |     const period = getDynamicDateStrings(3, 0);
  83  | 
  84  |     await test.step('Pre-condition: Create an isolated leave request in Pending status', async () => {
  85  |       await leavePage.applyLeaveAction(period.startDate, period.endDate);
  86  |       await expect(leavePage.toast).toContainText(/Successfully Saved|Success/i);
  87  |     });
  88  | 
  89  |     await test.step('Action: Search for the created employee leave request', async () => {
  90  |       await leavePage.searchLeaveRequestForEmployee(testFullName);
  91  |     });
  92  | 
  93  |     await test.step('Action: Click Approve on the first matching record in the table', async () => {
  94  |       const firstRow = leavePage.leaveTableRows.first();
  95  |       await expect(firstRow, 'No records found in the leave list table!').toBeVisible();
  96  | 
  97  |       const approveBtn = firstRow.getByRole('button', { name: LeaveLocator.approveRole });
  98  |       await expect(approveBtn, 'Approve button is missing from the record row!').toBeVisible();
  99  |       await approveBtn.click();
  100 |     });
  101 | 
  102 |     await test.step('Verification: System successfully updates the leave request status', async () => {
  103 |       await expect(leavePage.toast).toContainText(/Successfully Updated|Success/i);
  104 |     });
  105 |   });
  106 | 
  107 |   test('TC-LV-05-Admin rejects a pending leave request @regression', async ({ leavePage }) => {
  108 |     const period = getDynamicDateStrings(5, 0);
  109 | 
  110 |     await test.step('Pre-condition: Create an isolated leave request specifically for the rejection case', async () => {
  111 |       await leavePage.applyLeaveAction(period.startDate, period.endDate);
  112 |       await expect(leavePage.toast).toContainText(/Successfully Saved|Success/i);
  113 |     });
  114 | 
  115 |     await test.step('Action: Search for the created employee leave request', async () => {
  116 |       await leavePage.searchLeaveRequestForEmployee(testFullName);
  117 |     });
  118 | 
  119 |     await test.step('Action: Click Reject on the first matching record in the table', async () => {
  120 |       const firstRow = leavePage.leaveTableRows.first();
  121 |       await expect(firstRow, 'No records found in the leave list table!').toBeVisible();
  122 | 
  123 |       const rejectBtn = firstRow.getByRole('button', { name: LeaveLocator.rejectRole });
  124 |       await expect(rejectBtn, 'Reject button is missing from the record row!').toBeVisible();
  125 |       await rejectBtn.click();
  126 |     });
  127 | 
  128 |     await test.step('Verification: System successfully records the rejection status', async () => {
  129 |       await expect(leavePage.toast).toContainText(/Successfully Updated|Success/i);
  130 |     });
  131 |   });
  132 | });
```