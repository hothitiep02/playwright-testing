# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recruitment.spec.ts >> Recruitment Module @recruiment >> TC-RC-01 Create a new job vacancy @smoke
- Location: src\tests\recruitment.spec.ts:6:7

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

# Test source

```ts
  1   | import { Locator, Page } from '@playwright/test';
  2   | import { BasePage } from './BasePage'; 
  3   | 
  4   | export class RecruitmentPage extends BasePage {
  5   |   readonly menuRecruitment: Locator;
  6   |   readonly tabVacancies: Locator;
  7   |   readonly tabCandidates: Locator;
  8   |   readonly addBtn: Locator;
  9   |   readonly saveBtn: Locator;
  10  |   readonly formLoader: Locator;
  11  |   readonly vacancyNameInput: Locator;
  12  |   readonly vacancyJobTitleDropdown: Locator;
  13  |   readonly vacancyHiringManagerInput: Locator;
  14  |   readonly selectOptions: Locator;
  15  |   readonly autocompleteOptions: Locator;
  16  |   readonly candidateFirstName: Locator;
  17  |   readonly candidateLastName: Locator;
  18  |   readonly candidateEmail: Locator;
  19  |   readonly candidateVacancyDropdown: Locator;
  20  |   readonly shortlistBtn: Locator;
  21  |   readonly scheduleBtn: Locator;
  22  |   readonly transitionSaveBtn: Locator;
  23  |   readonly interviewTitleInput: Locator;
  24  |   readonly interviewerInput: Locator;
  25  |   readonly interviewDateInput: Locator;
  26  | 
  27  |   constructor(page: Page) {
  28  |     super(page); 
  29  |     this.menuRecruitment = page.getByRole('link', { name: 'Recruitment', exact: true });
  30  |     this.tabVacancies = page.locator('.oxd-topbar-body-nav-tab', { hasText: 'Vacancies' });
  31  |     this.tabCandidates = page.locator('.oxd-topbar-body-nav-tab', { hasText: 'Candidates' });
  32  |     this.addBtn = page.locator('button:has-text("Add")');
  33  |     this.saveBtn = page.locator('button[type="submit"]');
  34  |     this.formLoader = page.locator('.oxd-form-loader');
  35  |     this.vacancyNameInput = page.locator('.oxd-input-group:has-text("Vacancy Name") input');
  36  |     this.vacancyJobTitleDropdown = page.locator('.oxd-input-group:has-text("Job Title") .oxd-select-text');
  37  |     this.vacancyHiringManagerInput = page.locator('.oxd-input-group:has-text("Hiring Manager") input');
  38  |     this.selectOptions = page.locator('.oxd-select-dropdown .oxd-select-option');
  39  |     this.autocompleteOptions = page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option');
  40  |     this.candidateFirstName = page.locator('input[name="firstName"]');
  41  |     this.candidateLastName = page.locator('input[name="lastName"]');
  42  |     this.candidateEmail = page.locator('.oxd-input-group:has-text("Email") input');
  43  |     this.candidateVacancyDropdown = page.locator('.oxd-input-group:has-text("Vacancy") .oxd-select-text');
  44  |     this.shortlistBtn = page.locator('button:has-text("Shortlist")');
  45  |     this.scheduleBtn = page.locator('button:has-text("Schedule Interview")');
  46  |     this.transitionSaveBtn = page.locator('.orangehrm-card-container button[type="submit"]');
  47  |     this.interviewTitleInput = page.locator('.oxd-input-group:has-text("Interview Title") input');
  48  |     this.interviewerInput = page.locator('.oxd-input-group:has-text("Interviewer") input');
  49  |     this.interviewDateInput = page.locator('.oxd-date-input input');
  50  |   }
  51  | 
  52  |   async navigateToVacancies() {
  53  |     await this.click(this.menuRecruitment);
  54  |     await this.click(this.tabVacancies);
  55  |     await this.page.waitForLoadState('networkidle');
  56  |   }
  57  | 
  58  |   async navigateToCandidates() {
  59  |     await this.click(this.menuRecruitment);
  60  |     await this.click(this.tabCandidates);
  61  |     await this.page.waitForLoadState('networkidle');
  62  |   }
  63  | 
  64  |   async createVacancy(name: string, jobTitle: string, managerName: string) {
  65  |     await this.navigateToVacancies();
  66  |     await this.click(this.addBtn);
> 67  |     await this.page.waitForLoadState('networkidle');
      |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  68  |     await this.formLoader.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  69  |     await this.type(this.vacancyNameInput, name);
  70  |     await this.selectDropdownOption(this.vacancyJobTitleDropdown, this.selectOptions, jobTitle);
  71  |     const searchKey = managerName.split(' ')[0];
  72  |     await this.type(this.vacancyHiringManagerInput, searchKey);
  73  |     await this.page.waitForTimeout(2000); 
  74  |     await this.click(this.autocompleteOptions.first());
  75  |     await this.click(this.saveBtn);
  76  |     await this.page.waitForLoadState('networkidle');
  77  |   }
  78  | 
  79  |   async createCandidate(firstName: string, lastName: string, email: string, vacancyName: string) {
  80  |     await this.navigateToCandidates();
  81  |     await this.click(this.addBtn);
  82  |     await this.page.waitForLoadState('networkidle');
  83  |     await this.formLoader.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  84  |     await this.type(this.candidateFirstName, firstName);
  85  |     await this.type(this.candidateLastName, lastName);
  86  |     await this.type(this.candidateEmail, email);
  87  |     await this.selectDropdownOption(this.candidateVacancyDropdown, this.selectOptions, vacancyName);
  88  |     await this.click(this.saveBtn);
  89  |     await this.page.waitForLoadState('networkidle');
  90  |   }
  91  | 
  92  |   async shortlistCandidate() {
  93  |     await this.shortlistBtn.waitFor({ state: 'visible', timeout: 30000 });
  94  |     await this.click(this.shortlistBtn);
  95  |     await this.page.waitForURL(/.*changeCandidateVacancyStatus/);
  96  |     await this.page.locator('textarea').waitFor({ state: 'visible', timeout: 15000 });
  97  |     await this.formLoader.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  98  |     await this.click(this.transitionSaveBtn);
  99  |     await this.page.waitForLoadState('networkidle');
  100 |   }
  101 | 
  102 |   async scheduleInterview(title: string, interviewerName: string, date: string) {
  103 |     await this.scheduleBtn.waitFor({ state: 'visible', timeout: 30000 });
  104 |     await this.click(this.scheduleBtn);
  105 |     await this.page.locator('h6:has-text("Schedule Interview")').waitFor({ state: 'visible', timeout: 15000 });
  106 |     await this.formLoader.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  107 |     await this.type(this.interviewTitleInput, title);
  108 |     const searchKey = interviewerName.split(' ')[0];
  109 |     await this.type(this.interviewerInput, searchKey);
  110 |     await this.page.waitForTimeout(2000);
  111 |     await this.click(this.autocompleteOptions.first());
  112 |     await this.type(this.interviewDateInput, date);
  113 |     await this.page.keyboard.press('Escape');
  114 |     await this.click(this.saveBtn);
  115 |     await this.page.waitForLoadState('networkidle');
  116 |   }
  117 | }
```