# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-10-Add emergency contact for employee @regression
- Location: src\tests\pim.spec.ts:58:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.orangehrm-container')
Expected substring: "Jane Doe"
Error: strict mode violation: locator('.orangehrm-container') resolved to 2 elements:
    1) <div data-v-8146ff56="" class="orangehrm-container">…</div> aka locator('div').filter({ hasText: /^NameRelationshipHome TelephoneMobileWork TelephoneActions$/ }).first()
    2) <div data-v-eeb97be0="" class="orangehrm-container">…</div> aka locator('div').filter({ hasText: /^File NameDescriptionSizeTypeDate AddedAdded ByActions$/ }).first()

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.orangehrm-container')

```

# Page snapshot

```yaml
- generic [ref=e2]:
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
            - heading "PIM" [level=6] [ref=e114]
          - link "Upgrade" [ref=e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
          - list [ref=e123]:
            - listitem [ref=e124]:
              - generic [ref=e125] [cursor=pointer]:
                - img "profile picture" [ref=e126]
                - paragraph [ref=e127]: ABHISHEK R
                - generic [ref=e128]: 
        - navigation "Topbar Menu" [ref=e130]:
          - list [ref=e131]:
            - listitem [ref=e132] [cursor=pointer]:
              - generic [ref=e133]:
                - text: Configuration
                - generic [ref=e134]: 
            - listitem [ref=e135] [cursor=pointer]:
              - link "Employee List" [ref=e136]:
                - /url: "#"
            - listitem [ref=e137] [cursor=pointer]:
              - link "Add Employee" [ref=e138]:
                - /url: "#"
            - listitem [ref=e139] [cursor=pointer]:
              - link "Reports" [ref=e140]:
                - /url: "#"
            - button "" [ref=e142] [cursor=pointer]:
              - generic [ref=e143]: 
    - generic [ref=e144]:
      - generic [ref=e148]:
        - generic [ref=e149]:
          - generic [ref=e150]:
            - heading "John Doe" [level=6] [ref=e152]
            - img "profile picture" [ref=e155] [cursor=pointer]
          - tablist [ref=e156]:
            - tab "Personal Details" [ref=e157]:
              - link "Personal Details" [ref=e158] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPersonalDetails/empNumber/268
            - tab "Contact Details" [ref=e159]:
              - link "Contact Details" [ref=e160] [cursor=pointer]:
                - /url: /web/index.php/pim/contactDetails/empNumber/268
            - tab "Emergency Contacts" [ref=e161]:
              - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
                - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/268
            - tab "Dependents" [ref=e163]:
              - link "Dependents" [ref=e164] [cursor=pointer]:
                - /url: /web/index.php/pim/viewDependents/empNumber/268
            - tab "Immigration" [ref=e165]:
              - link "Immigration" [ref=e166] [cursor=pointer]:
                - /url: /web/index.php/pim/viewImmigration/empNumber/268
            - tab "Job" [ref=e167]:
              - link "Job" [ref=e168] [cursor=pointer]:
                - /url: /web/index.php/pim/viewJobDetails/empNumber/268
            - tab "Salary" [ref=e169]:
              - link "Salary" [ref=e170] [cursor=pointer]:
                - /url: /web/index.php/pim/viewSalaryList/empNumber/268
            - tab "Report-to" [ref=e171]:
              - link "Report-to" [ref=e172] [cursor=pointer]:
                - /url: /web/index.php/pim/viewReportToDetails/empNumber/268
            - tab "Qualifications" [ref=e173]:
              - link "Qualifications" [ref=e174] [cursor=pointer]:
                - /url: /web/index.php/pim/viewQualifications/empNumber/268
            - tab "Memberships" [ref=e175]:
              - link "Memberships" [ref=e176] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMemberships/empNumber/268
        - generic [ref=e177]:
          - generic [ref=e178]:
            - heading "Save Emergency Contact" [level=6] [ref=e179]
            - separator [ref=e180]
            - generic [ref=e181]:
              - generic [ref=e186]:
                - generic [ref=e188]:
                  - generic [ref=e190]: Name*
                  - textbox [ref=e192]: Jane Doe
                - generic [ref=e194]:
                  - generic [ref=e196]: Relationship*
                  - textbox [ref=e198]: Spouse
              - generic [ref=e200]:
                - generic [ref=e202]:
                  - generic [ref=e204]: Home Telephone
                  - textbox [ref=e206]
                - generic [ref=e208]:
                  - generic [ref=e210]: Mobile
                  - textbox [ref=e212]: "1234567890"
                - generic [ref=e214]:
                  - generic [ref=e216]: Work Telephone
                  - textbox [ref=e218]
              - generic [ref=e219]:
                - paragraph [ref=e220]: "* Required"
                - button "Cancel" [ref=e221] [cursor=pointer]
                - button "Save" [active] [ref=e222] [cursor=pointer]
          - separator [ref=e223]
          - generic [ref=e225]:
            - heading "Assigned Emergency Contacts" [level=6] [ref=e226]
            - button " Add" [ref=e227] [cursor=pointer]:
              - generic [ref=e228]: 
              - text: Add
          - generic [ref=e229]:
            - separator [ref=e230]
            - generic [ref=e232]: No Records Found
          - table [ref=e234]:
            - rowgroup [ref=e235]:
              - row " Name Relationship Home Telephone Mobile Work Telephone Actions" [ref=e236]:
                - columnheader "" [ref=e237]:
                  - generic [ref=e239] [cursor=pointer]:
                    - checkbox "" [ref=e240]
                    - generic [ref=e242]: 
                - columnheader "Name" [ref=e243]
                - columnheader "Relationship" [ref=e244]
                - columnheader "Home Telephone" [ref=e245]
                - columnheader "Mobile" [ref=e246]
                - columnheader "Work Telephone" [ref=e247]
                - columnheader "Actions" [ref=e248]
            - rowgroup
          - generic [ref=e250]:
            - separator [ref=e251]
            - generic [ref=e253]:
              - heading "Attachments" [level=6] [ref=e254]
              - button " Add" [ref=e255] [cursor=pointer]:
                - generic [ref=e256]: 
                - text: Add
            - generic [ref=e257]:
              - separator [ref=e258]
              - generic [ref=e260]: No Records Found
            - table [ref=e262]:
              - rowgroup [ref=e263]:
                - row " File Name Description Size Type Date Added Added By Actions" [ref=e264]:
                  - columnheader "" [ref=e265]:
                    - generic [ref=e267] [cursor=pointer]:
                      - checkbox "" [ref=e268]
                      - generic [ref=e270]: 
                  - columnheader "File Name" [ref=e271]
                  - columnheader "Description" [ref=e272]
                  - columnheader "Size" [ref=e273]
                  - columnheader "Type" [ref=e274]
                  - columnheader "Date Added" [ref=e275]
                  - columnheader "Added By" [ref=e276]
                  - columnheader "Actions" [ref=e277]
              - rowgroup
      - generic [ref=e278]:
        - paragraph [ref=e279]: OrangeHRM OS 5.8
        - paragraph [ref=e280]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e281] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e283] [cursor=pointer]:
    - generic [ref=e284]:
      - generic [ref=e287]: 
      - generic [ref=e288]:
        - paragraph [ref=e289]: Success
        - paragraph [ref=e290]: Successfully Saved
    - button "×" [ref=e292]
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
> 61 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.name);
     |                                                  ^ Error: expect(locator).toContainText(expected) failed
  62 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.relationship);
  63 |     await expect(pimPage.emergencyContactsTable).toContainText(contact.mobile);
  64 |   });
  65 | 
  66 |   test('TC-PIM-07-Delete an employee @regression', async ({ pimPage }) => {
  67 |     await pimPage.deleteEmployee(testData.employee.employeeId);
  68 |     await pimPage.searchEmployeeById(testData.employee.employeeId);
  69 |     await expect(pimPage.tableBody).toContainText('No Records Found');
  70 |   });
  71 | });
```