# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recruitment.spec.ts >> Recruitment Module @recruiment >> TC-RC-01 Create a new job vacancy @smoke
- Location: src\tests\recruitment.spec.ts:6:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*addJobVacancy\/\d+/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy"
Timeout: 10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    23 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy"

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
  - heading "Recruitment" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: UpdatedName UpdatedLastName
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Candidates":
          - /url: "#"
      - listitem:
        - link "Vacancies":
          - /url: "#"
      - button ""
- heading "Add Vacancy" [level=6]
- separator
- text: Vacancy Name*
- textbox: QA Automator Vacancy 1_8745
- text: Job Title* Software Engineer  Description
- textbox "Type description here"
- text: Hiring Manager*
- textbox "Type for hints...": Odis
- text: Invalid Number of Positions
- textbox
- paragraph: Active
- checkbox [checked]
- paragraph: Publish in RSS Feed and Web Page
- checkbox [checked]
- paragraph: "RSS Feed URL :"
- link "https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.rss":
  - /url: https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.rss
- paragraph: "Web Page URL :"
- link "https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html":
  - /url: https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/base.fixture'; 
  2  | import testData from '../utils/testData.json'; 
  3  | 
  4  | test.describe('Recruitment Module @recruiment', () => {
  5  | 
  6  |   test('TC-RC-01 Create a new job vacancy @smoke', async ({ page, recruitmentPage }) => {
  7  |     const vacancyData = testData.recruitment;
  8  |     const uniqueId = Date.now().toString().slice(-4);
  9  |     const vacancyName = `${vacancyData.vacancyName}_${uniqueId}`;
  10 |     const hiringManager = vacancyData.candidate.interviewer; 
  11 | 
  12 |     await test.step('Step 1: Create a job vacancy', async () => {
  13 |       await recruitmentPage.createVacancy(vacancyName, 'Software Engineer', hiringManager);
  14 |     });
  15 | 
  16 |     await test.step('Step 2: Verify vacancy is created successfully (redirected to edit vacancy)', async () => {
> 17 |       await expect(page).toHaveURL(/.*addJobVacancy\/\d+/);
     |                          ^ Error: expect(page).toHaveURL(expected) failed
  18 |     });
  19 | 
  20 |     await test.step('Step 3: Verify vacancy is visible in the list', async () => {
  21 |       await recruitmentPage.navigateToVacancies();
  22 |       await expect(page.locator('.oxd-table-card').filter({ hasText: vacancyName }).first()).toBeVisible();
  23 |     });
  24 |   });
  25 | 
  26 |   test('TC-RC-02 Add a candidate to a vacancy @regression', async ({ page, recruitmentPage }) => {
  27 |     const recruitmentData = testData.recruitment;
  28 |     const uniqueId = Date.now().toString().slice(-4);
  29 |     const vacancyName = `Vac_${uniqueId}`;
  30 |     const candidate = recruitmentData.candidate;
  31 | 
  32 |     await test.step('Setup: Create a vacancy to link', async () => {
  33 |       await recruitmentPage.createVacancy(vacancyName, 'Software Engineer', candidate.interviewer);
  34 |     });
  35 | 
  36 |     await test.step('Step 1: Add a candidate linked to the vacancy', async () => {
  37 |       await recruitmentPage.createCandidate(
  38 |         `${candidate.firstName}_${uniqueId}`, 
  39 |         candidate.lastName, 
  40 |         candidate.email, 
  41 |         vacancyName
  42 |       );
  43 |     });
  44 | 
  45 |     await test.step('Step 2: Verify candidate is added successfully (redirected to candidate profile)', async () => {
  46 |       await expect(page).toHaveURL(/.*addCandidate\/\d+/);
  47 |     });
  48 | 
  49 |     await test.step('Step 3: Verify candidate status is Application Initiated', async () => {
  50 |       await expect(page.getByText('Application Initiated')).toBeVisible();
  51 |       await expect(recruitmentPage.shortlistBtn).toBeVisible();
  52 |     });
  53 |   });
  54 | 
  55 |   test('TC-RC-03 Schedule an interview for a candidate @regression', async ({ page, recruitmentPage }) => {
  56 |     const recruitmentData = testData.recruitment;
  57 |     const uniqueId = Date.now().toString().slice(-4);
  58 |     const vacancyName = `Vac_${uniqueId}`;
  59 |     const candidate = recruitmentData.candidate;
  60 |     const candidateFirstName = `${candidate.firstName}_${uniqueId}`;
  61 | 
  62 |     await test.step('Setup: Create candidate and shortlist them', async () => {
  63 |       await recruitmentPage.createVacancy(vacancyName, 'Software Engineer', candidate.interviewer);
  64 |       await recruitmentPage.createCandidate(candidateFirstName, candidate.lastName, candidate.email, vacancyName);
  65 |       await recruitmentPage.shortlistCandidate();
  66 |     });
  67 | 
  68 |     await test.step('Step 1: Schedule an interview for the candidate', async () => {
  69 |       await recruitmentPage.scheduleInterview(
  70 |         candidate.interviewTitle, 
  71 |         candidate.interviewer, 
  72 |         candidate.interviewDate 
  73 |       );
  74 |     });
  75 | 
  76 |     await test.step('Step 2: Verify interview is scheduled successfully (redirected back to candidate profile)', async () => {
  77 |       await expect(page).toHaveURL(/.*addCandidate\/\d+/);
  78 |     });
  79 | 
  80 |     await test.step('Step 3: Verify candidate status is Interview Scheduled', async () => {
  81 |       await expect(page.getByText('Interview Scheduled')).toBeVisible();
  82 |     });
  83 |   });
  84 | });
```