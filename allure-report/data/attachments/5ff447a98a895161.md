# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Login & Session Management Tests @login >> TC-AUTH-05: Logout from the application @smoke
- Location: src\tests\auth\login.spec.ts:45:7

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('a[role="menuitem"]:has-text("Logout")')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "搜索" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "系統管理員" [ref=e21]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: 系統管理員
            - listitem [ref=e25]:
              - link "人事管理" [ref=e26]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: 人事管理
            - listitem [ref=e41]:
              - link "休假" [ref=e42]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: 休假
            - listitem [ref=e46]:
              - link "時間" [ref=e47]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: 時間
            - listitem [ref=e54]:
              - link "招聘" [ref=e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: 招聘
            - listitem [ref=e62]:
              - link "我的信息" [ref=e63]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: 我的信息
            - listitem [ref=e70]:
              - link "表現" [ref=e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: 表現
            - listitem [ref=e80]:
              - link "儀表板" [ref=e81]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: 儀表板
            - listitem [ref=e85]:
              - link "Directory" [ref=e86]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "激動" [ref=e106]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: 激動
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "儀表板" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Norah A
              - generic [ref=e128]: 
            - menu [ref=e129]:
              - listitem [ref=e130]:
                - menuitem "關於" [ref=e131]
              - listitem [ref=e132]:
                - menuitem "Support" [ref=e133]
              - listitem [ref=e134]:
                - menuitem "更改密碼" [ref=e135]
              - listitem [ref=e136]:
                - menuitem "登出" [ref=e137]
      - navigation "Topbar Menu" [ref=e139]:
        - list [ref=e140]:
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e151]: 
          - paragraph [ref=e152]: Time at Work
        - separator [ref=e153]
        - generic [ref=e155]:
          - generic [ref=e156]:
            - img "profile picture" [ref=e158]
            - generic [ref=e159]:
              - paragraph [ref=e160]: Punched Out
              - paragraph [ref=e161]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=e162]:
            - generic [ref=e163]: 0h 0m Today
            - button "" [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: 
          - separator [ref=e166]
          - generic [ref=e167]:
            - generic [ref=e168]:
              - paragraph [ref=e169]: This Week
              - paragraph [ref=e170]: Jun 29 - Jul 05
            - generic [ref=e171]:
              - generic [ref=e172]: 
              - paragraph [ref=e173]: 0h 0m
      - generic [ref=e177]:
        - generic [ref=e179]:
          - generic [ref=e180]: 
          - paragraph [ref=e181]: My Actions
        - separator [ref=e182]
        - generic [ref=e184]:
          - generic [ref=e185]:
            - button [ref=e186] [cursor=pointer]
            - paragraph [ref=e192] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e193]:
            - button [ref=e194] [cursor=pointer]
            - paragraph [ref=e203] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e205]:
        - generic [ref=e207]:
          - generic [ref=e208]: 
          - paragraph [ref=e209]: Quick Launch
        - separator [ref=e210]
        - generic [ref=e212]:
          - generic [ref=e213]:
            - button "指定休假" [ref=e214] [cursor=pointer]
            - generic "指定休假" [ref=e217]:
              - paragraph [ref=e218]: 指定休假
          - generic [ref=e219]:
            - button "休假列表" [ref=e220] [cursor=pointer]
            - generic "休假列表" [ref=e227]:
              - paragraph [ref=e228]: 休假列表
          - generic [ref=e229]:
            - button "時程表" [ref=e230] [cursor=pointer]
            - generic "時程表" [ref=e236]:
              - paragraph [ref=e237]: 時程表
          - generic [ref=e238]:
            - button "申請休假" [ref=e239] [cursor=pointer]
            - generic "申請休假" [ref=e242]:
              - paragraph [ref=e243]: 申請休假
          - generic [ref=e244]:
            - button "我的休假" [ref=e245] [cursor=pointer]
            - generic "我的休假" [ref=e250]:
              - paragraph [ref=e251]: 我的休假
          - generic [ref=e252]:
            - button "我的時間表" [ref=e253] [cursor=pointer]
            - generic "我的時間表" [ref=e256]:
              - paragraph [ref=e257]: 我的時間表
      - generic [ref=e259]:
        - generic [ref=e261]:
          - generic [ref=e262]: 
          - paragraph [ref=e263]: Buzz Latest Posts
        - separator [ref=e264]
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268] [cursor=pointer]:
              - img "profile picture" [ref=e270]
              - generic [ref=e271]:
                - paragraph [ref=e272]: Norah A A
                - paragraph [ref=e273]: 2026-04-07 09:53 AM
            - separator [ref=e274]
            - paragraph [ref=e275]: Testing Buzz Post dari automation Selenium 1783133626
          - generic [ref=e276]:
            - generic [ref=e277] [cursor=pointer]:
              - img "profile picture" [ref=e279]
              - generic [ref=e280]:
                - paragraph [ref=e281]: Norah A A
                - paragraph [ref=e282]: 2026-04-07 09:52 AM
            - separator [ref=e283]
            - paragraph [ref=e284]: Testing Buzz Post dari automation Selenium 1783133519
          - generic [ref=e285]:
            - generic [ref=e286] [cursor=pointer]:
              - img "profile picture" [ref=e288]
              - generic [ref=e289]:
                - paragraph [ref=e290]: Norah A A
                - paragraph [ref=e291]: 2026-04-07 09:50 AM
            - separator [ref=e292]
            - paragraph [ref=e293]: Testing Buzz Post dari automation Selenium
          - generic [ref=e294]:
            - generic [ref=e295] [cursor=pointer]:
              - img "profile picture" [ref=e297]
              - generic [ref=e298]:
                - paragraph [ref=e299]: Norah A A
                - paragraph [ref=e300]: 2020-08-10 10:38 AM
            - separator [ref=e301]
            - paragraph [ref=e302]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=e303]:
            - generic [ref=e304] [cursor=pointer]:
              - img "profile picture" [ref=e306]
              - generic [ref=e307]:
                - paragraph [ref=e308]: Sania Shaheen
                - paragraph [ref=e309]: 2020-08-10 10:38 AM
            - separator [ref=e310]
            - paragraph [ref=e311]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
      - generic [ref=e313]:
        - generic [ref=e314]:
          - paragraph [ref=e319]: Employees on Leave Today
          - generic [ref=e320] [cursor=pointer]: 
        - separator [ref=e321]
        - generic [ref=e323]:
          - img "No Content" [ref=e324]
          - paragraph [ref=e325]: No Employees are on Leave Today
      - generic [ref=e327]:
        - generic [ref=e329]:
          - generic [ref=e330]: 
          - paragraph [ref=e331]: Employee Distribution by Sub Unit
        - separator [ref=e332]
        - list [ref=e337]:
          - listitem [ref=e338] [cursor=pointer]:
            - generic "Engineering" [ref=e340]
          - listitem [ref=e341] [cursor=pointer]:
            - generic "Human Resources" [ref=e343]
          - listitem [ref=e344] [cursor=pointer]:
            - generic "Administration" [ref=e346]
          - listitem [ref=e347] [cursor=pointer]:
            - generic "Client Services" [ref=e349]
          - listitem [ref=e350] [cursor=pointer]:
            - generic "Unassigned" [ref=e352]
      - generic [ref=e354]:
        - generic [ref=e356]:
          - generic [ref=e357]: 
          - paragraph [ref=e358]: Employee Distribution by Location
        - separator [ref=e359]
        - list [ref=e364]:
          - listitem [ref=e365] [cursor=pointer]:
            - generic "Texas R&D" [ref=e367]
          - listitem [ref=e368] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e370]
          - listitem [ref=e371] [cursor=pointer]:
            - generic "Unassigned" [ref=e373]
    - generic [ref=e374]:
      - paragraph [ref=e375]: OrangeHRM OS 5.8
      - paragraph [ref=e376]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e377]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class DashboardPage extends BasePage {
  5  |     readonly dashboardHeader: Locator;
  6  |     readonly userDropdown: Locator;
  7  |     readonly logoutLink: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         super(page);
  11 |         this.dashboardHeader = page.locator('.oxd-topbar-header-title h6');
  12 |         this.userDropdown = page.locator('.oxd-userdropdown-tab');
  13 |         this.logoutLink = page.locator('a[role="menuitem"]:has-text("Logout")');
  14 |     }
  15 | 
  16 |     async logout() {
  17 |         await this.userDropdown.click();
> 18 |         await this.logoutLink.click();
     |                               ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  19 |     }
  20 | }
```