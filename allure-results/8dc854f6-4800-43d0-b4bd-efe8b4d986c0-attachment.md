# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Leave Module Testing >> TC-LV-04: Admin approves a pending leave request @smoke
- Location: src\tests\leave.spec.ts:141:7

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave", waiting until "load"

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
              - link "Leave" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e24]: Leave
            - listitem [ref=e25]:
              - link "Time" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e32]: Time
            - listitem [ref=e33]:
              - link "My Info" [ref=e34] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e40]: My Info
            - listitem [ref=e41]:
              - link "Performance" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e50]: Performance
            - listitem [ref=e51]:
              - link "Dashboard" [ref=e52] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e55]: Dashboard
            - listitem [ref=e56]:
              - link "Directory" [ref=e57] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e60]: Directory
            - listitem [ref=e61]:
              - link "Claim" [ref=e62] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e65]
                - generic [ref=e69]: Claim
            - listitem [ref=e70]:
              - link "Buzz" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e74]: Buzz
    - banner [ref=e75]:
      - generic [ref=e76]:
        - generic [ref=e77]:
          - text: 
          - heading "Leave" [level=6] [ref=e79]
        - list [ref=e81]:
          - listitem [ref=e82]:
            - generic [ref=e83] [cursor=pointer]:
              - img "profile picture" [ref=e84]
              - paragraph [ref=e85]: Test414647962 Employee414647962
              - generic [ref=e86]: 
      - navigation "Topbar Menu" [ref=e88]:
        - list [ref=e89]:
          - listitem [ref=e90] [cursor=pointer]:
            - link "Apply" [ref=e91]:
              - /url: "#"
          - listitem [ref=e92] [cursor=pointer]:
            - link "My Leave" [ref=e93]:
              - /url: "#"
          - listitem [ref=e94] [cursor=pointer]:
            - generic [ref=e95]:
              - text: Entitlements
              - generic [ref=e96]: 
          - listitem [ref=e97] [cursor=pointer]:
            - generic [ref=e98]:
              - text: Reports
              - generic [ref=e99]: 
          - button "" [ref=e101] [cursor=pointer]:
            - generic [ref=e102]: 
  - generic [ref=e103]:
    - generic [ref=e106]:
      - heading "Apply Leave" [level=6] [ref=e107]
      - separator [ref=e108]
      - generic [ref=e109]:
        - generic [ref=e114]:
          - generic [ref=e116]:
            - generic [ref=e118]: Leave Type*
            - generic [ref=e121] [cursor=pointer]:
              - generic [ref=e122]: "-- Select --"
              - generic [ref=e124]: 
          - generic [ref=e126]:
            - generic [ref=e128]: Leave Balance
            - paragraph [ref=e130]: 0.00 Day(s)
        - generic [ref=e132]:
          - generic [ref=e134]:
            - generic [ref=e136]: From Date*
            - generic [ref=e139]:
              - textbox "yyyy-dd-mm" [ref=e140]
              - generic [ref=e141] [cursor=pointer]: 
          - generic [ref=e143]:
            - generic [ref=e145]: To Date*
            - generic [ref=e148]:
              - textbox "yyyy-dd-mm" [ref=e149]
              - generic [ref=e150] [cursor=pointer]: 
        - generic [ref=e154]:
          - generic [ref=e156]: Comments
          - textbox [ref=e158]
        - separator [ref=e159]
        - generic [ref=e160]:
          - paragraph [ref=e161]: "* Required"
          - button "Apply" [ref=e162] [cursor=pointer]
    - generic [ref=e163]:
      - paragraph [ref=e164]: OrangeHRM OS 5.9
      - paragraph [ref=e165]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e166] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/base.fixture';
  2   | import testData from '../utils/testData.json';
  3   | import { Helper } from '../utils/helper';
  4   | import { Page } from '@playwright/test';
  5   | import { PIMPage } from '../pages/PIMPage';
  6   | import { LeavePage } from '../pages/LeavePage';
  7   | import { LoginPage } from '../pages/auth/LoginPage';
  8   | 
  9   | const DEFAULT_PASSWORD = 'Password123!';
  10  | 
  11  | type NewEmployee = {
  12  |   username: string;
  13  |   password: string;
  14  |   empFullName: string;
  15  | };
  16  | 
  17  | function generateUniqueId(): string {
  18  |   const timestampPart = Date.now().toString().slice(-6);
  19  |   const randomPart = Math.floor(Math.random() * 900 + 100);
  20  |   return `${timestampPart}${randomPart}`;
  21  | }
  22  | 
  23  | async function createEmployeeWithEntitlement(
  24  |   page: Page,
  25  |   pimPage: PIMPage,
  26  |   leavePage: LeavePage,
  27  |   loginPage: LoginPage
  28  | ): Promise<NewEmployee> {
  29  |   const uniqueId = generateUniqueId();
  30  |   const empId = `1${uniqueId}`.slice(0, 8);
  31  |   const username = `emp_${uniqueId}`;
  32  |   const password = DEFAULT_PASSWORD;
  33  |   const empFirstName = `Test${uniqueId}`;
  34  |   const empLastName = `Employee${uniqueId}`;
  35  |   const empFullName = `${empFirstName} ${empLastName}`;
  36  | 
  37  |   await pimPage.navigateToPIM();
  38  |   await pimPage.addEmployeeWithLogin(empFirstName, empLastName, username, password, empId);
  39  |   await page.locator('h6:has-text("Personal Details")').waitFor({ state: 'visible' });
  40  |   await page.goto('/web/index.php/leave/addLeaveEntitlement');
  41  |   await leavePage.waitForLoaderToDisappear();
  42  |   await leavePage.addEntitlement(empFullName, 'CAN - Bereavement', '10');
  43  | 
  44  |   await loginPage.logout();
  45  |   return { username, password, empFullName };
  46  | }
  47  | 
  48  | async function ensurePendingLeaveRequest(
  49  |   page: Page,
  50  |   pimPage: PIMPage,
  51  |   leavePage: LeavePage,
  52  |   loginPage: LoginPage
  53  | ): Promise<string> {
  54  |   const { username, password, empFullName } = await createEmployeeWithEntitlement(
  55  |     page,
  56  |     pimPage,
  57  |     leavePage,
  58  |     loginPage
  59  |   );
  60  | 
  61  |   await loginPage.login(username, password);
> 62  |   await page.goto('/web/index.php/leave/applyLeave');
      |              ^ Error: page.goto: net::ERR_ABORTED at https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave
  63  |   await leavePage.waitForLoaderToDisappear();
  64  |   await leavePage.selectLeaveType('CAN - Bereavement');
  65  |   await leavePage.fillLeaveForm(Helper.getFutureDate(1), Helper.getFutureDate(2));
  66  |   await leavePage.submitRequest();
  67  |   await expect(leavePage.toastMessage).toBeVisible();
  68  |   await loginPage.logout();
  69  |   await loginPage.login(testData.admin.username, testData.admin.password);
  70  |   return empFullName;
  71  | }
  72  | 
  73  | test.describe('Leave Module Testing', () => {
  74  | 
  75  |   test('TC-LV-01: Apply for leave with valid date range @smoke', async ({ page, pimPage, leavePage, loginPage }) => {
  76  |     let credentials = { username: '', password: '' };
  77  | 
  78  |     await test.step('Setup: Create employee and assign entitlements', async () => {
  79  |       const result = await createEmployeeWithEntitlement(page, pimPage, leavePage, loginPage);
  80  |       credentials = { username: result.username, password: result.password };
  81  |       await loginPage.login(credentials.username, credentials.password);
  82  |     });
  83  | 
  84  |     await test.step('Step 1: Navigate to Leave page', async () => {
  85  |       await page.goto('/web/index.php/leave/applyLeave');
  86  |       await leavePage.waitForLoaderToDisappear();
  87  |     });
  88  | 
  89  |     await test.step('Step 2: Select Leave Type', async () => {
  90  |       await leavePage.selectLeaveType('CAN - Bereavement');
  91  |     });
  92  | 
  93  |     await test.step('Step 3: Fill Leave Form', async () => {
  94  |       await leavePage.fillLeaveForm(Helper.getFutureDate(3), Helper.getFutureDate(4));
  95  |     });
  96  | 
  97  |     await test.step('Step 4: Submit Request', async () => {
  98  |       await leavePage.submitRequest();
  99  |       await expect(leavePage.toastMessage).toBeVisible();
  100 |       await expect(leavePage.toastMessage).toContainText(/Successfully/i);
  101 |     });
  102 | 
  103 |     await test.step('Step 5: Verify request status is Pending Approval', async () => {
  104 |       await page.goto('/web/index.php/leave/viewMyLeaveList');
  105 |       await leavePage.waitForLoaderToDisappear();
  106 |       await expect(leavePage.page.getByText('Pending Approval').first()).toBeVisible();
  107 |     });
  108 |   });
  109 | 
  110 |   test('TC-LV-02: Apply for leave with end date before start date @regression', async ({ page, pimPage, leavePage, loginPage }) => {
  111 |     let credentials = { username: '', password: '' };
  112 | 
  113 |     await test.step('Setup: Create employee and assign entitlements', async () => {
  114 |       const result = await createEmployeeWithEntitlement(page, pimPage, leavePage, loginPage);
  115 |       credentials = { username: result.username, password: result.password };
  116 |       await loginPage.login(credentials.username, credentials.password);
  117 |     });
  118 | 
  119 |     await test.step('Step 1: Navigate to Leave page', async () => {
  120 |       await page.goto('/web/index.php/leave/applyLeave');
  121 |       await leavePage.waitForLoaderToDisappear();
  122 |     });
  123 | 
  124 |     await test.step('Step 2: Select Leave Type', async () => {
  125 |       await leavePage.selectLeaveType('CAN - Bereavement');
  126 |     });
  127 | 
  128 |     await test.step('Step 3: Fill Leave Form with invalid dates', async () => {
  129 |       await leavePage.fillLeaveForm(Helper.getFutureDate(5), Helper.getFutureDate(3));
  130 |     });
  131 | 
  132 |     await test.step('Step 4: Submit Request', async () => {
  133 |       await leavePage.submitRequest();
  134 |     });
  135 | 
  136 |     await test.step('Step 5: Verify error message is visible', async () => {
  137 |       await expect(leavePage.errorMessage).toBeVisible();
  138 |     });
  139 |   });
  140 | 
  141 |   test('TC-LV-04: Admin approves a pending leave request @smoke', async ({ page, pimPage, leavePage, loginPage }) => {
  142 |     let empName = '';
  143 | 
  144 |     await test.step('Setup: Ensure pending leave request exists', async () => {
  145 |       empName = await ensurePendingLeaveRequest(page, pimPage, leavePage, loginPage);
  146 |     });
  147 | 
  148 |     await test.step('Step 1: Navigate to Leave List', async () => {
  149 |       await page.goto('/web/index.php/leave/viewLeaveList');
  150 |       await leavePage.waitForLoaderToDisappear();
  151 |     });
  152 | 
  153 |     await test.step('Step 2: Filter by Employee Name and Pending Status', async () => {
  154 |       await leavePage.filterByEmployee(empName);
  155 |       await leavePage.selectLeaveStatus('Pending Approval');
  156 |       await leavePage.searchLeave();
  157 |     });
  158 | 
  159 |     await test.step('Step 3: Approve request', async () => {
  160 |       await leavePage.approveFirstRequest();
  161 |     });
  162 | 
```