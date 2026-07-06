# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM Module @pim >> TC-PIM-09-Upload unsupported file type as profile photo @regression
- Location: src\tests\pim.spec.ts:61:7

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
    - banner [ref=e105]:
      - generic [ref=e106]:
        - generic [ref=e107]:
          - text: 
          - heading "PIM" [level=6] [ref=e109]
        - link "Upgrade" [ref=e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e112] [cursor=pointer]: Upgrade
        - list [ref=e118]:
          - listitem [ref=e119]:
            - generic [ref=e120] [cursor=pointer]:
              - img "profile picture" [ref=e121]
              - paragraph [ref=e122]: Shayma azhrani
              - generic [ref=e123]: 
      - navigation "Topbar Menu" [ref=e125]:
        - list [ref=e126]:
          - listitem [ref=e127] [cursor=pointer]:
            - generic [ref=e128]:
              - text: Configuration
              - generic [ref=e129]: 
          - listitem [ref=e130] [cursor=pointer]:
            - link "Employee List" [ref=e131]:
              - /url: "#"
          - listitem [ref=e132] [cursor=pointer]:
            - link "Add Employee" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "Reports" [ref=e135]:
              - /url: "#"
          - button "" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]: 
  - generic [ref=e139]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - generic [ref=e145]:
          - heading "John Doe" [level=6] [ref=e147]
          - img "profile picture" [ref=e150] [cursor=pointer]
        - tablist [ref=e151]:
          - tab "Personal Details" [ref=e152]:
            - link "Personal Details" [ref=e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/259
          - tab "Contact Details" [ref=e154]:
            - link "Contact Details" [ref=e155] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/259
          - tab "Emergency Contacts" [ref=e156]:
            - link "Emergency Contacts" [ref=e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/259
          - tab "Dependents" [ref=e158]:
            - link "Dependents" [ref=e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/259
          - tab "Immigration" [ref=e160]:
            - link "Immigration" [ref=e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/259
          - tab "Job" [ref=e162]:
            - link "Job" [ref=e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/259
          - tab "Salary" [ref=e164]:
            - link "Salary" [ref=e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/259
          - tab "Tax Exemptions" [ref=e166]:
            - link "Tax Exemptions" [ref=e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewUsTaxExemptions/empNumber/259
          - tab "Report-to" [ref=e168]:
            - link "Report-to" [ref=e169] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/259
          - tab "Qualifications" [ref=e170]:
            - link "Qualifications" [ref=e171] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/259
          - tab "Memberships" [ref=e172]:
            - link "Memberships" [ref=e173] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/259
      - generic [ref=e174]:
        - generic [ref=e175]:
          - heading "Personal Details" [level=6] [ref=e176]
          - separator [ref=e177]
          - generic [ref=e178]:
            - generic [ref=e179]:
              - generic [ref=e182]:
                - generic [ref=e184]: Employee Full Name*
                - generic [ref=e185]:
                  - textbox "First Name" [ref=e188]: John
                  - textbox "Middle Name" [ref=e191]
                  - textbox "Last Name" [ref=e194]: Doe
              - generic [ref=e197]:
                - generic [ref=e199]: Nickname
                - textbox [ref=e201]
            - separator [ref=e202]
            - generic [ref=e203]:
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Employee Id
                  - textbox [ref=e210]: "10982"
                - generic [ref=e212]:
                  - generic [ref=e214]: Other Id
                  - textbox [ref=e216]
              - generic [ref=e217]:
                - generic [ref=e219]:
                  - generic [ref=e221]: Driver's License Number
                  - textbox [ref=e223]
                - generic [ref=e225]:
                  - generic [ref=e227]: License Expiry Date
                  - generic [ref=e230]:
                    - textbox "yyyy-dd-mm" [ref=e231]
                    - generic [ref=e232] [cursor=pointer]: 
              - generic [ref=e233]:
                - generic [ref=e235]:
                  - generic [ref=e237]: SSN Number
                  - textbox [ref=e239]
                - generic [ref=e241]:
                  - generic [ref=e243]: SIN Number
                  - textbox [ref=e245]
            - separator [ref=e246]
            - generic [ref=e247]:
              - generic [ref=e248]:
                - generic [ref=e250]:
                  - generic [ref=e252]: Nationality
                  - generic [ref=e255] [cursor=pointer]:
                    - generic [ref=e256]: "-- Select --"
                    - generic [ref=e258]: 
                - generic [ref=e260]:
                  - generic [ref=e262]: Marital Status
                  - generic [ref=e265] [cursor=pointer]:
                    - generic [ref=e266]: "-- Select --"
                    - generic [ref=e268]: 
              - generic [ref=e269]:
                - generic [ref=e271]:
                  - generic [ref=e273]: Date of Birth
                  - generic [ref=e276]:
                    - textbox "yyyy-dd-mm" [ref=e277]
                    - generic [ref=e278] [cursor=pointer]: 
                - generic [ref=e280]:
                  - generic [ref=e282]: Gender
                  - generic [ref=e283]:
                    - generic [ref=e287] [cursor=pointer]:
                      - radio "Male" [ref=e288]
                      - text: Male
                    - generic [ref=e293] [cursor=pointer]:
                      - radio "Female" [ref=e294]
                      - text: Female
            - separator [ref=e296]
            - generic [ref=e298]:
              - generic [ref=e300]:
                - generic [ref=e302]: Military Service
                - textbox [ref=e304]
              - generic [ref=e306]:
                - generic [ref=e308]: Smoker
                - generic [ref=e311] [cursor=pointer]:
                  - checkbox " Yes" [ref=e312]
                  - generic [ref=e314]: 
                  - text: "Yes"
            - separator [ref=e315]
            - generic [ref=e316]:
              - paragraph [ref=e317]: "* Required"
              - button "Save" [ref=e318] [cursor=pointer]
        - generic [ref=e319]:
          - separator [ref=e320]
          - generic [ref=e321]:
            - heading "Custom Fields" [level=6] [ref=e322]
            - separator [ref=e323]
            - generic [ref=e324]:
              - generic [ref=e326]:
                - generic [ref=e328]:
                  - generic [ref=e330]: Blood Type
                  - generic [ref=e333] [cursor=pointer]:
                    - generic [ref=e334]: "-- Select --"
                    - generic [ref=e336]: 
                - generic [ref=e338]:
                  - generic [ref=e340]: Test_Field
                  - textbox [ref=e342]
              - separator [ref=e343]
              - button "Save" [ref=e345] [cursor=pointer]
        - generic [ref=e346]:
          - separator [ref=e347]
          - generic [ref=e349]:
            - heading "Attachments" [level=6] [ref=e350]
            - button " Add" [ref=e351] [cursor=pointer]:
              - generic [ref=e352]: 
              - text: Add
          - generic [ref=e353]:
            - separator [ref=e354]
            - generic [ref=e356]: No Records Found
          - table [ref=e358]:
            - rowgroup [ref=e359]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e360]:
                - columnheader "" [ref=e361]:
                  - generic [ref=e363] [cursor=pointer]:
                    - checkbox "" [ref=e364]
                    - generic [ref=e366]: 
                - columnheader "File Name" [ref=e367]
                - columnheader "Description" [ref=e368]
                - columnheader "Size" [ref=e369]
                - columnheader "Type" [ref=e370]
                - columnheader "Date Added" [ref=e371]
                - columnheader "Added By" [ref=e372]
                - columnheader "Actions" [ref=e373]
            - rowgroup
    - generic [ref=e374]:
      - paragraph [ref=e375]: OrangeHRM OS 5.8
      - paragraph [ref=e376]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e377] [cursor=pointer]:
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