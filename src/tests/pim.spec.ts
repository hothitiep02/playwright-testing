import { test, expect } from '../fixtures/base.fixture';
import * as testData from '../utils/testData.json';

test.describe('PIM Module @pim', () => {
  test('TC-PIM-01-Add a new employee with all required fields @smoke', async ({ page, pimPage }) => {
    await pimPage.addEmployee(testData.employee.firstName, testData.employee.lastName, testData.employee.employeeId);
    await expect(page).toHaveURL(/.*viewPersonalDetails/);
    await pimPage.navigateToPIM();
    await pimPage.searchEmployeeById(testData.employee.employeeId);
    await expect(pimPage.tableRows.first()).toContainText(testData.employee.firstName);
    await expect(pimPage.tableRows.first()).toContainText(testData.employee.lastName);
  });

  test('TC-PIM-02-Add employee without first name @regression', async ({ pimPage }) => {
    await pimPage.addEmployee('', testData.employee.lastName, '99999');
    await expect(pimPage.firstNameValidationError).toBeVisible();
    await expect(pimPage.firstNameValidationError).toHaveText('Required');
  });

  test('TC-PIM-03-Search employee by exact name @regression', async ({ pimPage }) => {
    const fullName = `${testData.employee.firstName} ${testData.employee.lastName}`;
    await pimPage.searchEmployeeByName(fullName);
    await expect(pimPage.tableRows.first()).toContainText(testData.employee.firstName);
  });

  test('TC-PIM-04-Search employee by partial name @regression', async ({ pimPage }) => {
    await pimPage.searchEmployeeByName(testData.employee.firstName);
    await expect(pimPage.tableRows.first()).toBeVisible();
  });

  test('TC-PIM-05-Search employee with non-existent name @regression', async ({ pimPage }) => {
    await pimPage.searchEmployeeByName('NonExistentNameXYZ');
    await expect(pimPage.tableBody).toContainText('No Records Found');
  });

  test('TC-PIM-06-Edit employee job title and save @regression', async ({ pimPage }) => {
    await pimPage.updateJobTitle(testData.employee.employeeId, testData.adminModule.newJobTitle);
    await pimPage.navigateToPIM();
    await pimPage.searchEmployeeById(testData.employee.employeeId);
    await expect(pimPage.tableRows.first()).toContainText(testData.adminModule.newJobTitle);
  });

  test('TC-PIM-07-Delete an employee @regression', async ({ pimPage }) => {
    await pimPage.deleteEmployee(testData.employee.employeeId);
    await pimPage.searchEmployeeById(testData.employee.employeeId);
    await expect(pimPage.tableBody).toContainText('No Records Found');
  });
});