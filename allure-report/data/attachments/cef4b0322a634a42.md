# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendance.spec.ts >> Attendance Module >> TC-ATT-01 Punch in without prior punch out @smoke
- Location: src\tests\attendance.spec.ts:6:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
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
              - paragraph [ref=e127]: Wesley Souza
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
        - generic [ref=e156]:
          - generic [ref=e158]:
            - generic [ref=e160]: Punched in time
            - paragraph [ref=e162]:
              - text: 2026-08-07 - 09:50 PM
              - generic [ref=e163]: (GMT +07:00)
          - generic [ref=e165]:
            - generic [ref=e167]: Punched In Note
            - paragraph [ref=e169]: System auto punch in
          - generic [ref=e171]:
            - generic [ref=e173]: Date*
            - generic [ref=e176]:
              - textbox "yyyy-dd-mm" [ref=e177]: 2026-08-07
              - generic [ref=e178] [cursor=pointer]: 
          - generic [ref=e180]:
            - generic [ref=e182]: Time*
            - generic [ref=e185]:
              - textbox "hh:mm" [ref=e186]: 09:50 PM
              - generic [ref=e187] [cursor=pointer]: 
        - generic [ref=e191]:
          - generic [ref=e193]: Note
          - textbox "Type here" [active] [ref=e195]: Automation Punch In
        - separator [ref=e196]
        - generic [ref=e197]:
          - paragraph [ref=e198]: "* Required"
          - button "Out" [ref=e199] [cursor=pointer]
    - generic [ref=e200]:
      - paragraph [ref=e201]: OrangeHRM OS 5.9
      - paragraph [ref=e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e203] [cursor=pointer]:
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
     |                   ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
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