import { test, expect } from '../../fixtures/base.fixture';
import { env } from '../../utils/env';
import * as testData from '../../utils/testData.json';

test.describe('Login & Session Management Tests @login', () => {
  test('TC-AUTH-01: Login with valid credentials @smoke', async ({ page, loginPage, dashboardPage }) => {
    await loginPage.login(env.adminUsername, env.adminPassword);
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(dashboardPage.dashboardHeader).toBeVisible();
  });

  test('TC-AUTH-02: Login with invalid password @regression', async ({ loginPage }) => {
    await loginPage.login(testData.invalidLogins[0].username, testData.invalidLogins[0].password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(testData.invalidLogins[0].expectedError);
  });

  test('TC-AUTH-03: Login with blank username and password @regression', async ({ loginPage }) => {
    await loginPage.login('', '');
    await expect(loginPage.usernameValidationError).toBeVisible();
    await expect(loginPage.passwordValidationError).toBeVisible();
    await expect(loginPage.usernameValidationError).toHaveText('Required');
    await expect(loginPage.passwordValidationError).toHaveText('Required');
  });

  test('TC-AUTH-04: Login with username only (password blank) @regression', async ({ loginPage }) => {
    await loginPage.login(testData.invalidLogins[2].username, '');
    await expect(loginPage.passwordValidationError).toBeVisible();
    await expect(loginPage.passwordValidationError).toHaveText(testData.invalidLogins[2].expectedError);
  });

  test('TC-AUTH-05: Logout from the application @smoke', async ({ page, loginPage, dashboardPage }) => {
    await loginPage.login(env.adminUsername, env.adminPassword);
    await expect(page).toHaveURL(/.*dashboard/);
    await dashboardPage.logout();
    await expect(page).toHaveURL(/.*login/);
    await page.goBack();
    await expect(page).toHaveURL(/.*login/);
  });
});