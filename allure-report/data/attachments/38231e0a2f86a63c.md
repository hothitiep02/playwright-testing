# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-07-Delete an employee @regression
- Location: src\tests\pim.spec.ts:66:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-body')
Expected substring: "No Records Found"
Received string:    ""
Timeout: 10000ms

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.oxd-table-body')
    22 × locator resolved to <div role="rowgroup" data-v-8bca8bf7="" data-v-f2168256="" class="oxd-table-body"></div>
       - unexpected value ""

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
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: ABHISHEK R
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox: "10982"
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/base.fixture';
  2  | import * as testData from '../utils/testData.json';
  3  | import * as path from 'path';
  4  | 
  5  | test.describe('PIM Module @pim', () => {
  6  |   const dummyJpgPath = path.join(__dirname, '../src/utils/dummy.jpg');
  7  |   const dummyTxtPath = path.join(__dirname, '../src/utils/dummy.txt');
  8  | 
  9  |   test('TC-PIM-01-Add a new employee with all required fields @smoke', async ({ page, pimPage }) => {
  10 |     await pimPage.addEmployee(testData.employee.firstName, testData.employee.lastName, testData.employee.employeeId);
  11 |     await expect(page).toHaveURL(/.*viewPersonalDetails/);
  12 |     await pimPage.navigateToPIM();
  13 |     await pimPage.searchEmployeeById(testData.employee.employeeId);
  14 |     await expect(pimPage.tableRows.first()).toContainText(testData.employee.firstName);
  15 |     await expect(pimPage.tableRows.first()).toContainText(testData.employee.lastName);
  16 |   });
  17 | 
  18 |   test('TC-PIM-02-Add employee without first name @regression', async ({ pimPage }) => {
  19 |     await pimPage.addEmployee('', testData.employee.lastName, '99999');
  20 |     await expect(pimPage.firstNameValidationError).toBeVisible();
  21 |     await expect(pimPage.firstNameValidationError).toHaveText('Required');
  22 |   });
  23 | 
  24 |   test('TC-PIM-03-Search employee by exact name @regression', async ({ pimPage }) => {
  25 |     const fullName = `${testData.employee.firstName} ${testData.employee.lastName}`;
  26 |     await pimPage.searchEmployeeByName(fullName);
  27 |     await expect(pimPage.tableRows.first()).toContainText(testData.employee.firstName);
  28 |   });
  29 | 
  30 |   test('TC-PIM-04-Search employee by partial name @regression', async ({ pimPage }) => {
  31 |     await pimPage.searchEmployeeByName(testData.employee.firstName);
  32 |     await expect(pimPage.tableRows.first()).toBeVisible();
  33 |   });
  34 | 
  35 |   test('TC-PIM-05-Search employee with non-existent name @regression', async ({ pimPage }) => {
  36 |     await pimPage.searchEmployeeByName('NonExistentNameXYZ');
  37 |     await expect(pimPage.tableBody).toContainText('No Records Found');
  38 |   });
  39 | 
  40 |   test('TC-PIM-06-Edit employee job title and save @regression', async ({ pimPage }) => {
  41 |     await pimPage.updateJobTitle(testData.employee.employeeId, testData.adminModule.newJobTitle);
  42 |     await pimPage.navigateToPIM();
  43 |     await pimPage.searchEmployeeById(testData.employee.employeeId);
  44 |     await expect(pimPage.tableRows.first()).toContainText(testData.adminModule.newJobTitle);
  45 |   });
  46 | 
  47 |   test('TC-PIM-08-Upload profile photo (valid JPG, under 1 MB) @regression', async ({ page, pimPage }) => {
  48 |     await pimPage.uploadProfilePhoto(testData.employee.employeeId, dummyJpgPath);
  49 |     await expect(page.locator('div.oxd-toast')).toBeVisible().catch(() => {});
  50 |   });
  51 | 
  52 |   test('TC-PIM-09-Upload unsupported file type as profile photo @regression', async ({ pimPage }) => {
  53 |     await pimPage.uploadProfilePhoto(testData.employee.employeeId, dummyTxtPath);
  54 |     await expect(pimPage.fileUploadErrorMessage).toBeVisible();
  55 |     await expect(pimPage.fileUploadErrorMessage).toContainText(/File type not allowed|Invalid/i);
  56 |   });
  57 | 
  58 |   test('TC-PIM-10-Add emergency contact for employee @regression', async ({ pimPage }) => {
  59 |     const contact = testData.employee.emergencyContact;
  60 |     await pimPage.addEmergencyContact(testData.employee.employeeId, contact.name, contact.relationship, contact.mobile);
  61 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.name);
  62 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.relationship);
  63 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.mobile);
  64 |   });
  65 | 
  66 |   test('TC-PIM-07-Delete an employee @regression', async ({ pimPage }) => {
  67 |     await pimPage.deleteEmployee(testData.employee.employeeId);
  68 |     await pimPage.searchEmployeeById(testData.employee.employeeId);
> 69 |     await expect(pimPage.tableBody).toContainText('No Records Found');
     |                                     ^ Error: expect(locator).toContainText(expected) failed
  70 |   });
  71 | });
```