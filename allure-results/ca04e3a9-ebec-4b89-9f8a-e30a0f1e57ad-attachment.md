# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendance.spec.ts >> Attendance Module >> TC-ATT-02 Punch out after punching in @smoke
- Location: src\tests\attendance.spec.ts:30:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Out")') to be visible

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
          - generic [ref=e113]:
            - heading "Attendance" [level=6] [ref=e114]
            - heading "/ Attendance" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: Wesley Souza
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: Timesheets
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Attendance
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Project Info
              - generic [ref=e144]: 
          - button "" [ref=e146] [cursor=pointer]:
            - generic [ref=e147]: 
  - generic [ref=e148]:
    - generic [ref=e151]:
      - heading "Punch In" [level=6] [ref=e152]
      - separator [ref=e153]
      - generic [ref=e155]:
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]: Date*
            - generic [ref=e164]:
              - textbox "yyyy-dd-mm" [ref=e165]: 2026-08-07
              - generic [ref=e166] [cursor=pointer]: 
          - generic [ref=e168]:
            - generic [ref=e170]: Time*
            - generic [ref=e173]:
              - textbox "hh:mm" [ref=e174]: 09:44 PM
              - generic [ref=e175] [cursor=pointer]: 
        - generic [ref=e179]:
          - generic [ref=e181]: Note
          - textbox "Type here" [active] [ref=e183]: Automation Punch Out
        - separator [ref=e184]
        - generic [ref=e185]:
          - paragraph [ref=e186]: "* Required"
          - button "In" [ref=e187] [cursor=pointer]
    - generic [ref=e188]:
      - paragraph [ref=e189]: OrangeHRM OS 5.9
      - paragraph [ref=e190]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e191] [cursor=pointer]:
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
> 15 |     await locator.waitFor({ state: 'visible', timeout: 30000 });
     |                   ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  16 |     await locator.click();
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