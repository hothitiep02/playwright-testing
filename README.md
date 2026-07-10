# OrangeHRM Automation Mock Project
An end-to-end test automation framework built to validate the core modules of the OrangeHRM demo application. This project transitionally utilizes Playwright with TypeScript implementing the Page Object Model (POM) architecture, cross-browser execution, and automated CI/CD integration.

## Project Quick Links
* **Application Under Test (AUT):** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)

## Tech Stack & Prerequisites
* **Language:** TypeScript
* **Automation Framework:** Playwright Test 
* **Design Pattern:** Page Object Model (POM)
* **Environment Management:** `dotenv`
* **CI/CD:**  Jenkins

## Folder Structure
PLAYWRIGHT-TESTING/
├── src/                                      # Main source code for the automation project
│   ├── fixtures/                             # Custom Playwright fixtures for initializing Page Objects
│   │   └── base.fixture.ts
│   │
│   ├── pages/                                # Page Object Model (POM) classes containing locators and page actions
│   │   ├── auth/                             # Authentication-related pages
│   │   │   ├── LoginPage.ts
│   │   │   └── ForgotPasswordPage.ts
│   │   ├── DashboardPage.ts
│   │   ├── AttendancePage.ts
│   │   ├── PIM.ts
│   │   └── BasePage.ts                       # Base class with common reusable methods (click, type, wait, etc.)
│   │
│   ├── tests/                                # Test specification files (.spec.ts)
│   │   ├── auth/                             # Authentication test suite
│   │   │   └── login.spec.ts
│   │   ├── attendance.spec.ts
│   │   ├── pim.spec.ts
│   │
│   └── utils/                                # Utility classes and helper functions
│       ├── env.ts                            # Environment configuration (Base URL, credentials, etc.)
│       └── testData.ts                       # Shared test data constants
│
├── allure-results/                           # Raw Allure result files (should be added to .gitignore)
├── playwright-report/                        # Default Playwright HTML report
├── test-results/                             # Screenshots, videos, and traces generated during test execution
│
├── node_modules/                             # Installed project dependencies
├── .env                                      # Local environment variables (do not commit to Git)
├── .gitignore                                # Files and folders excluded from version control
├── package.json                              # Project dependencies, scripts, and metadata
├── playwright.config.ts                      # Global Playwright configuration
└── tsconfig.json                             # TypeScript compiler configuration