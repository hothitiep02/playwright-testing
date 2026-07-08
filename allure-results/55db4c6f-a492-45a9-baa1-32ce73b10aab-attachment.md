# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Leave Module - Mandatory Suite @leave >> TC-LV-04-Admin approves a pending leave request @regression
- Location: src\tests\leave.spec.ts:81:7

# Error details

```
TimeoutError: page.waitForResponse: Timeout 15000ms exceeded while waiting for event "response"
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
          - heading "Leave" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: lbtool nomi
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - link "Apply" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "My Leave" [ref=e135]:
              - /url: "#"
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Entitlements
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Reports
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Configure
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Leave List" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Assign Leave" [ref=e148]:
              - /url: "#"
          - button "" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: 
  - generic [ref=e152]:
    - generic [ref=e154]:
      - generic [ref=e155]:
        - generic [ref=e156]:
          - heading "Leave List" [level=5] [ref=e158]
          - button "" [ref=e161] [cursor=pointer]:
            - generic [ref=e162]: 
        - separator [ref=e163]
        - generic [ref=e165]:
          - generic [ref=e167]:
            - generic [ref=e169]:
              - generic [ref=e171]: From Date
              - generic [ref=e174]:
                - textbox "yyyy-dd-mm" [ref=e175]: 2026-01-01
                - generic [ref=e176] [cursor=pointer]: 
            - generic [ref=e178]:
              - generic [ref=e180]: To Date
              - generic [ref=e183]:
                - textbox "yyyy-dd-mm" [ref=e184]: 2026-31-12
                - generic [ref=e185] [cursor=pointer]: 
            - generic [ref=e187]:
              - generic [ref=e189]: Show Leave with Status*
              - generic [ref=e191]:
                - generic [ref=e192] [cursor=pointer]:
                  - generic [ref=e193]: "-- Select --"
                  - generic [ref=e195]: 
                - generic [ref=e197]:
                  - text: Pending Approval
                  - generic [ref=e198] [cursor=pointer]: 
            - generic [ref=e200]:
              - generic [ref=e202]: Leave Type
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: "-- Select --"
                - generic [ref=e208]: 
          - generic [ref=e210]:
            - generic [ref=e212]:
              - generic [ref=e214]: Employee Name
              - textbox "Type for hints..." [ref=e218]: John Doe
              - generic [ref=e219]: Invalid
            - generic [ref=e221]:
              - generic [ref=e223]: Sub Unit
              - generic [ref=e226] [cursor=pointer]:
                - generic [ref=e227]: "-- Select --"
                - generic [ref=e229]: 
            - generic [ref=e230]:
              - paragraph [ref=e231]: Include Past Employees
              - checkbox [ref=e234]
          - separator [ref=e236]
          - generic [ref=e237]:
            - paragraph [ref=e238]: "* Required"
            - button "Reset" [ref=e239] [cursor=pointer]
            - button "Search" [active] [ref=e240] [cursor=pointer]
      - generic [ref=e241]:
        - generic [ref=e243]: (3) Records Found
        - table [ref=e245]:
          - rowgroup [ref=e246]:
            - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions" [ref=e247]:
              - columnheader "" [ref=e248]:
                - generic [ref=e250] [cursor=pointer]:
                  - checkbox "" [ref=e251]
                  - generic [ref=e253]: 
              - columnheader "Date" [ref=e254]
              - columnheader "Employee Name" [ref=e255]
              - columnheader "Leave Type" [ref=e256]
              - columnheader "Leave Balance (Days)" [ref=e257]
              - columnheader "Number of Days" [ref=e258]
              - columnheader "Status" [ref=e259]
              - columnheader "Comments" [ref=e260]
              - columnheader "Actions" [ref=e261]
          - rowgroup [ref=e262]:
            - row " 2026-07-10 lbtool 12345678 nomi CAN - Bereavement 47.00 1.00 Pending Approval (1.00) " [ref=e264]:
              - cell "" [ref=e265]:
                - generic [ref=e268] [cursor=pointer]:
                  - checkbox "" [ref=e269]
                  - generic [ref=e271]: 
              - cell "2026-07-10" [ref=e272]:
                - generic [ref=e273]: 2026-07-10
              - cell "lbtool 12345678 nomi" [ref=e274]:
                - generic [ref=e275]: lbtool 12345678 nomi
              - cell "CAN - Bereavement" [ref=e276]:
                - generic [ref=e277]: CAN - Bereavement
              - cell "47.00" [ref=e278]:
                - generic [ref=e279]: "47.00"
              - cell "1.00" [ref=e280]:
                - generic [ref=e281]: "1.00"
              - cell "Pending Approval (1.00)" [ref=e282]:
                - generic [ref=e283]: Pending Approval (1.00)
              - cell [ref=e284]
              - cell "" [ref=e285]:
                - listitem [ref=e287]:
                  - button "" [ref=e288] [cursor=pointer]:
                    - generic [ref=e289]: 
            - row " 2026-07-08 lbtool 12345678 nomi CAN - Bereavement 47.00 1.00 Pending Approval (1.00) " [ref=e291]:
              - cell "" [ref=e292]:
                - generic [ref=e295] [cursor=pointer]:
                  - checkbox "" [ref=e296]
                  - generic [ref=e298]: 
              - cell "2026-07-08" [ref=e299]:
                - generic [ref=e300]: 2026-07-08
              - cell "lbtool 12345678 nomi" [ref=e301]:
                - generic [ref=e302]: lbtool 12345678 nomi
              - cell "CAN - Bereavement" [ref=e303]:
                - generic [ref=e304]: CAN - Bereavement
              - cell "47.00" [ref=e305]:
                - generic [ref=e306]: "47.00"
              - cell "1.00" [ref=e307]:
                - generic [ref=e308]: "1.00"
              - cell "Pending Approval (1.00)" [ref=e309]:
                - generic [ref=e310]: Pending Approval (1.00)
              - cell [ref=e311]
              - cell "" [ref=e312]:
                - listitem [ref=e314]:
                  - button "" [ref=e315] [cursor=pointer]:
                    - generic [ref=e316]: 
            - row " 2026-07-07 lbtool 12345678 nomi CAN - Bereavement 47.00 1.00 Pending Approval (1.00) " [ref=e318]:
              - cell "" [ref=e319]:
                - generic [ref=e322] [cursor=pointer]:
                  - checkbox "" [ref=e323]
                  - generic [ref=e325]: 
              - cell "2026-07-07" [ref=e326]:
                - generic [ref=e327]: 2026-07-07
              - cell "lbtool 12345678 nomi" [ref=e328]:
                - generic [ref=e329]: lbtool 12345678 nomi
              - cell "CAN - Bereavement" [ref=e330]:
                - generic [ref=e331]: CAN - Bereavement
              - cell "47.00" [ref=e332]:
                - generic [ref=e333]: "47.00"
              - cell "1.00" [ref=e334]:
                - generic [ref=e335]: "1.00"
              - cell "Pending Approval (1.00)" [ref=e336]:
                - generic [ref=e337]: Pending Approval (1.00)
              - cell [ref=e338]
              - cell "" [ref=e339]:
                - listitem [ref=e341]:
                  - button "" [ref=e342] [cursor=pointer]:
                    - generic [ref=e343]: 
    - generic [ref=e345]:
      - paragraph [ref=e346]: OrangeHRM OS 5.8
      - paragraph [ref=e347]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e348] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  19  |   leaveTableRows: '.oxd-table-body .oxd-table-card',
  20  |   approveRole: 'Approve',
  21  |   rejectRole: 'Reject',
  22  |   entitlementInput: '.oxd-input-group:has-text("Entitlement") input',
  23  |   confirmBtn: 'button:has-text("Confirm")',
  24  |   formLoader: '.oxd-form-loader',
  25  | };
  26  | 
  27  | export class LeavePage extends BasePage {
  28  |   readonly leaveMenuItem: Locator;
  29  |   readonly applyTab: Locator;
  30  |   readonly leaveListTab: Locator;
  31  |   readonly myLeaveTab: Locator;
  32  |   readonly leaveTypeSelect: Locator;
  33  |   readonly selectOptions: Locator;
  34  |   readonly startDateInput: Locator;
  35  |   readonly endDateInput: Locator;
  36  |   readonly applyBtn: Locator;
  37  |   readonly dateErrorMessage: Locator;
  38  |   readonly toast: Locator;
  39  |   readonly employeeNameSearchInput: Locator;
  40  |   readonly autocompleteDropdown: Locator;
  41  |   readonly autocompleteOption: Locator;
  42  |   readonly searchBtn: Locator;
  43  |   readonly leaveTableRows: Locator;
  44  |   readonly entitlementInput: Locator;
  45  |   readonly confirmBtn: Locator;
  46  |   readonly formLoader: Locator;
  47  | 
  48  |   constructor(page: Page) {
  49  |     super(page);
  50  |     this.leaveMenuItem = page.locator(LeaveLocator.leaveMenuItem);
  51  |     this.applyTab = page.locator(LeaveLocator.applyTab).first();
  52  |     this.leaveListTab = page.locator(LeaveLocator.leaveListTab).first();
  53  |     this.myLeaveTab = page.locator(LeaveLocator.myLeaveTab).first();
  54  |     this.leaveTypeSelect = page.locator(LeaveLocator.leaveTypeSelect);
  55  |     this.selectOptions = page.locator(LeaveLocator.selectOptions);
  56  |     this.startDateInput = page.locator(LeaveLocator.startDateInput).first();
  57  |     this.endDateInput = page.locator(LeaveLocator.startDateInput).nth(1);
  58  |     this.applyBtn = page.locator(LeaveLocator.applyBtn).first();
  59  |     this.dateErrorMessage = page.locator(LeaveLocator.dateErrorMessage);
  60  |     this.toast = page.locator(LeaveLocator.toast);
  61  |     this.employeeNameSearchInput = page.locator(LeaveLocator.employeeNameSearchInput).first();
  62  |     this.autocompleteDropdown = page.locator(LeaveLocator.autocompleteDropdown);
  63  |     this.autocompleteOption = page.locator(LeaveLocator.autocompleteOption);
  64  |     this.searchBtn = page.locator(LeaveLocator.searchBtn).first();
  65  |     this.leaveTableRows = page.locator(LeaveLocator.leaveTableRows);
  66  |     this.entitlementInput = page.locator(LeaveLocator.entitlementInput);
  67  |     this.confirmBtn = page.locator(LeaveLocator.confirmBtn);
  68  |     this.formLoader = page.locator(LeaveLocator.formLoader);
  69  |   }
  70  | 
  71  |   async waitForLoaderToDisappear() {
  72  |     // Chờ cho loader biến mất hoàn toàn khỏi DOM trước khi tương tác bất kỳ UI nào
  73  |     await this.formLoader.waitFor({ state: 'detached', timeout: 15000 }).catch(() => {});
  74  |   }
  75  | 
  76  |   async navigateToLeave() {
  77  |     await this.click(this.leaveMenuItem);
  78  |     await this.page.waitForLoadState('networkidle');
  79  |     await this.waitForLoaderToDisappear();
  80  |   }
  81  | 
  82  |   async clearAndFillDate(inputLocator: Locator, dateValue: string) {
  83  |     await inputLocator.waitFor({ state: 'visible' });
  84  |     await inputLocator.click();
  85  |     await inputLocator.selectText();
  86  |     await this.page.keyboard.press('Backspace');
  87  |     await inputLocator.fill(dateValue);
  88  |     await this.page.keyboard.press('Tab'); 
  89  |   }
  90  | 
  91  |   async applyLeaveAction(startDate: string, endDate: string) {
  92  |     await this.click(this.applyTab);
  93  |     await this.waitForLoaderToDisappear();
  94  |     
  95  |     // Sử dụng trực tiếp api click của locator thay vì qua BasePage wrapper nếu wrapper bị vướng dính loader cũ
  96  |     await this.leaveTypeSelect.waitFor({ state: 'visible' });
  97  |     await this.leaveTypeSelect.click();
  98  |     
  99  |     await this.selectOptions.nth(1).waitFor({ state: 'visible' });
  100 |     await this.selectOptions.nth(1).click();
  101 |     await this.waitForLoaderToDisappear(); 
  102 |     
  103 |     await this.clearAndFillDate(this.startDateInput, startDate);
  104 |     await this.clearAndFillDate(this.endDateInput, endDate);
  105 |     
  106 |     await this.applyBtn.waitFor({ state: 'visible' });
  107 |     await this.applyBtn.click();
  108 |   }
  109 | 
  110 |   async searchLeaveRequestForEmployee(employeeName: string) {
  111 |     await this.click(this.leaveListTab);
  112 |     await this.waitForLoaderToDisappear();
  113 |     
  114 |     await this.employeeNameSearchInput.waitFor({ state: 'visible' });
  115 |     await this.employeeNameSearchInput.fill(employeeName);
  116 |     await this.autocompleteDropdown.waitFor({ state: 'visible', timeout: 5000 });
  117 |     await this.autocompleteOption.first().click();
  118 | 
> 119 |     const searchResponse = this.page.waitForResponse(
      |                                      ^ TimeoutError: page.waitForResponse: Timeout 15000ms exceeded while waiting for event "response"
  120 |       response => response.url().includes('/leave/list') && response.status() === 200
  121 |     );
  122 |     await this.searchBtn.click();
  123 |     await searchResponse;
  124 |     await this.waitForLoaderToDisappear();
  125 |   }
  126 | 
  127 |   async assignLeaveEntitlement(employeeName: string, days: string) {
  128 |     await this.waitForLoaderToDisappear();
  129 |     await this.employeeNameSearchInput.waitFor({ state: 'visible' });
  130 |     await this.employeeNameSearchInput.fill(employeeName);
  131 |     await this.autocompleteDropdown.waitFor({ state: 'visible' });
  132 |     await this.autocompleteOption.first().click();
  133 |     
  134 |     await this.leaveTypeSelect.click();
  135 |     await this.selectOptions.nth(1).waitFor({ state: 'visible' });
  136 |     await this.selectOptions.nth(1).click();
  137 |     
  138 |     await this.entitlementInput.fill(days);
  139 |     await this.searchBtn.click();
  140 |     
  141 |     if (await this.confirmBtn.isVisible({ timeout: 2000 })) {
  142 |       await this.confirmBtn.click();
  143 |     }
  144 |     await this.waitForLoaderToDisappear();
  145 |   }
  146 | }
```