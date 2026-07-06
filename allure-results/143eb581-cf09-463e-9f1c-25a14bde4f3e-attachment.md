# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-08-Upload profile photo (valid JPG, under 1 MB) @regression
- Location: src\tests\pim.spec.ts:47:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('.employee-image-action') to be visible

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
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Shayma azhrani
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
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/214
          - tab "Contact Details" [ref=e159]:
            - link "Contact Details" [ref=e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/214
          - tab "Emergency Contacts" [ref=e161]:
            - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/214
          - tab "Dependents" [ref=e163]:
            - link "Dependents" [ref=e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/214
          - tab "Immigration" [ref=e165]:
            - link "Immigration" [ref=e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/214
          - tab "Job" [ref=e167]:
            - link "Job" [ref=e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/214
          - tab "Salary" [ref=e169]:
            - link "Salary" [ref=e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/214
          - tab "Tax Exemptions" [ref=e171]:
            - link "Tax Exemptions" [ref=e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewUsTaxExemptions/empNumber/214
          - tab "Report-to" [ref=e173]:
            - link "Report-to" [ref=e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/214
          - tab "Qualifications" [ref=e175]:
            - link "Qualifications" [ref=e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/214
          - tab "Memberships" [ref=e177]:
            - link "Memberships" [ref=e178] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/214
      - generic [ref=e179]:
        - generic [ref=e180]:
          - heading "Personal Details" [level=6] [ref=e181]
          - separator [ref=e182]
          - generic [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e187]:
                - generic [ref=e189]: Employee Full Name*
                - generic [ref=e190]:
                  - textbox "First Name" [ref=e193]: John
                  - textbox "Middle Name" [ref=e196]
                  - textbox "Last Name" [ref=e199]: Doe
              - generic [ref=e202]:
                - generic [ref=e204]: Nickname
                - textbox [ref=e206]
            - separator [ref=e207]
            - generic [ref=e208]:
              - generic [ref=e209]:
                - generic [ref=e211]:
                  - generic [ref=e213]: Employee Id
                  - textbox [ref=e215]: "10982"
                - generic [ref=e217]:
                  - generic [ref=e219]: Other Id
                  - textbox [ref=e221]
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Driver's License Number
                  - textbox [ref=e228]
                - generic [ref=e230]:
                  - generic [ref=e232]: License Expiry Date
                  - generic [ref=e235]:
                    - textbox "yyyy-dd-mm" [ref=e236]
                    - generic [ref=e237] [cursor=pointer]: 
              - generic [ref=e238]:
                - generic [ref=e240]:
                  - generic [ref=e242]: SSN Number
                  - textbox [ref=e244]
                - generic [ref=e246]:
                  - generic [ref=e248]: SIN Number
                  - textbox [ref=e250]
            - separator [ref=e251]
            - generic [ref=e252]:
              - generic [ref=e253]:
                - generic [ref=e255]:
                  - generic [ref=e257]: Nationality
                  - generic [ref=e260] [cursor=pointer]:
                    - generic [ref=e261]: "-- Select --"
                    - generic [ref=e263]: 
                - generic [ref=e265]:
                  - generic [ref=e267]: Marital Status
                  - generic [ref=e270] [cursor=pointer]:
                    - generic [ref=e271]: "-- Select --"
                    - generic [ref=e273]: 
              - generic [ref=e274]:
                - generic [ref=e276]:
                  - generic [ref=e278]: Date of Birth
                  - generic [ref=e281]:
                    - textbox "yyyy-dd-mm" [ref=e282]
                    - generic [ref=e283] [cursor=pointer]: 
                - generic [ref=e285]:
                  - generic [ref=e287]: Gender
                  - generic [ref=e288]:
                    - generic [ref=e292] [cursor=pointer]:
                      - radio "Male" [ref=e293]
                      - text: Male
                    - generic [ref=e298] [cursor=pointer]:
                      - radio "Female" [ref=e299]
                      - text: Female
            - separator [ref=e301]
            - generic [ref=e303]:
              - generic [ref=e305]:
                - generic [ref=e307]: Military Service
                - textbox [ref=e309]
              - generic [ref=e311]:
                - generic [ref=e313]: Smoker
                - generic [ref=e316] [cursor=pointer]:
                  - checkbox " Yes" [ref=e317]
                  - generic [ref=e319]: 
                  - text: "Yes"
            - separator [ref=e320]
            - generic [ref=e321]:
              - paragraph [ref=e322]: "* Required"
              - button "Save" [ref=e323] [cursor=pointer]
        - generic [ref=e324]:
          - separator [ref=e325]
          - generic [ref=e326]:
            - heading "Custom Fields" [level=6] [ref=e327]
            - separator [ref=e328]
            - generic [ref=e329]:
              - generic [ref=e331]:
                - generic [ref=e333]:
                  - generic [ref=e335]: Blood Type
                  - generic [ref=e338] [cursor=pointer]:
                    - generic [ref=e339]: "-- Select --"
                    - generic [ref=e341]: 
                - generic [ref=e343]:
                  - generic [ref=e345]: Test_Field
                  - textbox [ref=e347]
              - separator [ref=e348]
              - button "Save" [ref=e350] [cursor=pointer]
        - generic [ref=e351]:
          - separator [ref=e352]
          - generic [ref=e354]:
            - heading "Attachments" [level=6] [ref=e355]
            - button " Add" [ref=e356] [cursor=pointer]:
              - generic [ref=e357]: 
              - text: Add
          - generic [ref=e358]:
            - separator [ref=e359]
            - generic [ref=e361]: No Records Found
          - table [ref=e363]:
            - rowgroup [ref=e364]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e365]:
                - columnheader "" [ref=e366]:
                  - generic [ref=e368] [cursor=pointer]:
                    - checkbox "" [ref=e369]
                    - generic [ref=e371]: 
                - columnheader "File Name" [ref=e372]
                - columnheader "Description" [ref=e373]
                - columnheader "Size" [ref=e374]
                - columnheader "Type" [ref=e375]
                - columnheader "Date Added" [ref=e376]
                - columnheader "Added By" [ref=e377]
                - columnheader "Actions" [ref=e378]
            - rowgroup
    - generic [ref=e379]:
      - paragraph [ref=e380]: OrangeHRM OS 5.8
      - paragraph [ref=e381]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e382] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  |   constructor(page: Page) {
  6  |     this.page = page;
  7  |   }
  8  |   async navigateTo(url: string = '') {
  9  |     await this.page.goto(url);
  10 |   }
  11 |   async click(locator: Locator) {
> 12 |     await locator.waitFor({ state: 'visible' });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  13 |     await locator.click();
  14 |   }
  15 |   async type(locator: Locator, text: string) {
  16 |     await locator.waitFor({ state: 'visible' });
  17 |     await locator.fill(text);
  18 |   }
  19 |   async selectDropdownOption(dropdownLocator: Locator, optionText: string) {
  20 |     await this.click(dropdownLocator);
  21 |     const option = this.page.locator('.oxd-select-option').filter({ hasText: optionText });
  22 |     await this.click(option);
  23 |   }
  24 |   async uploadFile(inputSelector: string, filePath: string) {
  25 |     await this.page.setInputFiles(inputSelector, filePath);
  26 |   }
  27 |   async getValidationMessage(locator: Locator): Promise<string> {
  28 |     await locator.waitFor({ state: 'visible' });
  29 |     return (await locator.textContent()) || '';
  30 |   }
  31 | }
```