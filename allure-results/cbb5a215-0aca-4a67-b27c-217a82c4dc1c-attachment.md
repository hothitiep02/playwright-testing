# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: attendance.spec.ts >> Attendance Module @attendance >> TC-ATT-03-Punch in when already punched in @regression
- Location: src\tests\attendance.spec.ts:59:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
============================================================
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
              - paragraph [ref=e127]: Aqeel Hussain
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
            - generic [ref=e163]: Date*
            - generic [ref=e166]:
              - textbox "yyyy-dd-mm" [ref=e167]: 2026-08-07
              - generic [ref=e168] [cursor=pointer]: 
          - generic [ref=e170]:
            - generic [ref=e172]: Time*
            - generic [ref=e175]:
              - textbox "hh:mm" [ref=e176]: 08:47 PM
              - generic [ref=e177] [cursor=pointer]: 
        - generic [ref=e181]:
          - generic [ref=e183]: Note
          - textbox "Type here" [ref=e185]
        - separator [ref=e186]
        - generic [ref=e187]:
          - paragraph [ref=e188]: "* Required"
          - button "Out" [ref=e189] [cursor=pointer]
    - generic [ref=e190]:
      - paragraph [ref=e191]: OrangeHRM OS 5.9
      - paragraph [ref=e192]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e193] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class AttendancePage extends BasePage {
  5  |   readonly menuTime: Locator;
  6  |   readonly navAttendanceTab: Locator;
  7  |   readonly navPunchInOutOption: Locator;
  8  |   readonly pageTitle: Locator;
  9  |   readonly noteTextarea: Locator;
  10 |   readonly inButton: Locator;
  11 |   readonly outButton: Locator;
  12 |   readonly toastMessage: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page); 
  16 |     this.menuTime = page.getByRole('link', { name: 'Time' });
  17 |     this.navAttendanceTab = page.locator('.oxd-topbar-body-nav-tab', { hasText: 'Attendance' });
  18 |     this.navPunchInOutOption = page.locator('.oxd-dropdown-menu >> text="Punch In/Out"');
  19 |     this.pageTitle = page.locator('.orangehrm-main-title');
  20 |     this.noteTextarea = page.locator('textarea');
  21 |     this.inButton = page.getByRole('button', { name: 'In' });
  22 |     this.outButton = page.getByRole('button', { name: 'Out' });
  23 |     this.toastMessage = page.locator('.oxd-toast-content').first();
  24 |   }
  25 | 
  26 |   async navigateToPunchInOut() {
  27 |     await this.menuTime.waitFor({ state: 'visible' });
  28 |     await this.click(this.menuTime);
  29 |     await this.navAttendanceTab.waitFor({ state: 'visible' });
  30 |     await this.click(this.navAttendanceTab);
  31 |     await this.navPunchInOutOption.waitFor({ state: 'visible' });
  32 |     await this.click(this.navPunchInOutOption);
> 33 |     await this.page.waitForLoadState('networkidle');
     |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  34 |   }
  35 | 
  36 |   async isPunchedIn(): Promise<boolean> {
  37 |     await this.page.waitForLoadState('networkidle');
  38 |     const title = await this.pageTitle.innerText();
  39 |     return title.trim() === 'Punch Out';
  40 |   }
  41 | 
  42 |   async punchIn(note: string) {
  43 |     await this.type(this.noteTextarea, note);
  44 |     await this.click(this.inButton);
  45 |     await this.page.waitForLoadState('networkidle');
  46 |   }
  47 | 
  48 |   async punchOut(note: string) {
  49 |     await this.type(this.noteTextarea, note);
  50 |     await this.click(this.outButton);
  51 |     await this.page.waitForLoadState('networkidle');
  52 |   }
  53 | 
  54 |   async ensurePunchedOut() {
  55 |     await this.navigateToPunchInOut();
  56 |     if (await this.isPunchedIn()) {
  57 |       await this.punchOut('System auto punch out');
  58 |       await this.toastMessage.waitFor({ state: 'visible', timeout: 15000 });
  59 |       await this.page.waitForTimeout(2000);
  60 |     }
  61 |   }
  62 | 
  63 |   async ensurePunchedIn() {
  64 |     await this.navigateToPunchInOut();
  65 |     if (!(await this.isPunchedIn())) {
  66 |       await this.punchIn('System auto punch in');
  67 |       await this.toastMessage.waitFor({ state: 'visible', timeout: 15000 });
  68 |       await this.page.waitForTimeout(2000);
  69 |     }
  70 |   }
  71 | }
```