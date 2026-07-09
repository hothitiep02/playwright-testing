# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recruitment.spec.ts >> Recruitment Module @recruiment >> TC-RC-03 Schedule an interview for a candidate @regression
- Location: src\tests\recruitment.spec.ts:55:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button[type="submit"]')
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-c0f2c7c8="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
          - heading "Recruitment" [level=6] [ref=e114]
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
            - link "Candidates" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "Vacancies" [ref=e135]:
              - /url: "#"
          - button "" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]: 
  - generic [ref=e139]:
    - generic [ref=e142]:
      - heading "Add Vacancy" [level=6] [ref=e143]
      - separator [ref=e144]
      - generic [ref=e145]:
        - generic [ref=e146]:
          - generic [ref=e148]:
            - generic [ref=e150]: Vacancy Name*
            - textbox [ref=e152]: Vac_0217
          - generic [ref=e154]:
            - generic [ref=e156]: Job Title*
            - generic [ref=e159] [cursor=pointer]:
              - generic [ref=e160]: Software Engineer
              - generic [ref=e162]: 
        - generic [ref=e165]:
          - generic [ref=e167]: Description
          - textbox "Type description here" [ref=e169]
        - generic [ref=e170]:
          - generic [ref=e172]:
            - generic [ref=e174]: Hiring Manager*
            - generic [ref=e176]:
              - textbox "Type for hints..." [active] [ref=e178]: Odis
              - listbox [ref=e179]:
                - option "Searching...." [ref=e180] [cursor=pointer]
          - generic [ref=e184]:
            - generic [ref=e186]: Number of Positions
            - textbox [ref=e188]
        - generic [ref=e190]:
          - paragraph [ref=e191]: Active
          - checkbox [checked] [ref=e194]
        - generic [ref=e197]:
          - paragraph [ref=e198]: Publish in RSS Feed and Web Page
          - checkbox [checked] [ref=e201]
        - generic [ref=e205]:
          - generic [ref=e206]:
            - paragraph [ref=e207]: "RSS Feed URL :"
            - link "https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.rss" [ref=e208] [cursor=pointer]:
              - /url: https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.rss
          - generic [ref=e209]:
            - paragraph [ref=e210]: "Web Page URL :"
            - link "https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html" [ref=e211] [cursor=pointer]:
              - /url: https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html
        - separator [ref=e212]
        - generic [ref=e213]:
          - paragraph [ref=e214]: "* Required"
          - button "Cancel" [ref=e215] [cursor=pointer]
          - button "Save" [ref=e216] [cursor=pointer]
    - generic [ref=e217]:
      - paragraph [ref=e218]: OrangeHRM OS 5.9
      - paragraph [ref=e219]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e220] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async navigateTo(url: string = '') {
  11 |     await this.page.goto(url);
  12 |   }
  13 | 
  14 |   async click(locator: Locator) {
  15 |     await locator.waitFor({ state: 'visible', timeout: 30000 });
> 16 |     await locator.click();
     |                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  17 |   }
  18 | 
  19 |   async type(locator: Locator, text: string) {
  20 |     await locator.waitFor({ state: 'visible' });
  21 |     await locator.fill(text);
  22 |   }
  23 | 
  24 |   async selectDropdownOption(dropdownLocator: Locator, optionsListLocator: Locator, optionText: string) {
  25 |     await this.click(dropdownLocator);
  26 |     const targetOption = optionsListLocator.filter({ hasText: optionText });
  27 |     await this.click(targetOption);
  28 |   }
  29 | 
  30 |   async uploadFile(inputSelector: string, filePath: string) {
  31 |     await this.page.setInputFiles(inputSelector, filePath);
  32 |   }
  33 | 
  34 |   async getValidationMessage(locator: Locator): Promise<string> {
  35 |     await locator.waitFor({ state: 'visible' });
  36 |     return (await locator.textContent()) || '';
  37 |   }
  38 | }
```