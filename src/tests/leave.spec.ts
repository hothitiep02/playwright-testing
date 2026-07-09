import { test, expect } from '../fixtures/base.fixture';
import testData from '../utils/testData.json';
import { Helper } from '../utils/helper';
import { Page } from '@playwright/test';
import { PIMPage } from '../pages/PIMPage';
import { LeavePage } from '../pages/LeavePage';
import { LoginPage } from '../pages/auth/LoginPage';

const DEFAULT_PASSWORD = 'Password123!';

type NewEmployee = {
  username: string;
  password: string;
  empFullName: string;
};

function generateUniqueId(): string {
  const timestampPart = Date.now().toString().slice(-6);
  const randomPart = Math.floor(Math.random() * 900 + 100);
  return `${timestampPart}${randomPart}`;
}

async function createEmployeeWithEntitlement(
  page: Page,
  pimPage: PIMPage,
  leavePage: LeavePage,
  loginPage: LoginPage
): Promise<NewEmployee> {
  const uniqueId = generateUniqueId();
  const empId = `1${uniqueId}`.slice(0, 8);
  const username = `emp_${uniqueId}`;
  const password = DEFAULT_PASSWORD;
  const empFirstName = `Test${uniqueId}`;
  const empLastName = `Employee${uniqueId}`;
  const empFullName = `${empFirstName} ${empLastName}`;

  await pimPage.navigateToPIM();
  await pimPage.addEmployeeWithLogin(empFirstName, empLastName, username, password, empId);
  
  // ✅ ĐÃ FIX: Đã bọc locator 'h6:has-text("Personal Details")' vào hàm của pimPage
  await pimPage.verifyPersonalDetailsHeaderIsVisible();
  
  await page.goto('/web/index.php/leave/addLeaveEntitlement');
  await leavePage.waitForLoaderToDisappear();
  await leavePage.addEntitlement(empFullName, 'CAN - Bereavement', '10');

  await loginPage.logout();
  return { username, password, empFullName };
}

async function ensurePendingLeaveRequest(
  page: Page,
  pimPage: PIMPage,
  leavePage: LeavePage,
  loginPage: LoginPage
): Promise<string> {
  const { username, password, empFullName } = await createEmployeeWithEntitlement(
    page,
    pimPage,
    leavePage,
    loginPage
  );

  await loginPage.login(username, password);
  await page.goto('/web/index.php/leave/applyLeave');
  await leavePage.waitForLoaderToDisappear();
  await leavePage.selectLeaveType('CAN - Bereavement');
  await leavePage.fillLeaveForm(Helper.getFutureDate(1), Helper.getFutureDate(2));
  await leavePage.submitRequest();
  await expect(leavePage.toastMessage).toBeVisible();
  await loginPage.logout();
  await loginPage.login(testData.admin.username, testData.admin.password);
  return empFullName;
}

test.describe('Leave Module Testing @leave', () => {

  test('TC-LV-01: Apply for leave with valid date range @smoke', async ({ page, pimPage, leavePage, loginPage }) => {
    let credentials = { username: '', password: '' };
    await test.step('Setup: Create employee and assign entitlements', async () => {
      const result = await createEmployeeWithEntitlement(page, pimPage, leavePage, loginPage);
      credentials = { username: result.username, password: result.password };
      await loginPage.login(credentials.username, credentials.password);
    });
    await test.step('Step 1: Navigate to Leave page', async () => {
      await page.goto('/web/index.php/leave/applyLeave');
      await leavePage.waitForLoaderToDisappear();
    });
    await test.step('Step 2: Select Leave Type', async () => {
      await leavePage.selectLeaveType('CAN - Bereavement');
    });
    await test.step('Step 3: Fill Leave Form', async () => {
      await leavePage.fillLeaveForm(Helper.getFutureDate(3), Helper.getFutureDate(4));
    });
    await test.step('Step 4: Submit Request', async () => {
      await leavePage.submitRequest();
      await expect(leavePage.toastMessage).toBeVisible();
      await expect(leavePage.toastMessage).toContainText(/Successfully/i);
    });
    await test.step('Step 5: Verify request status is Pending Approval', async () => {
      await page.goto('/web/index.php/leave/viewMyLeaveList');
      await leavePage.waitForLoaderToDisappear();
      
      // ✅ ĐÃ FIX: Thay thế getByText trực tiếp bằng hàm getFirstRowStatusLocator của leavePage
      const pendingStatus = await leavePage.getFirstRowStatusLocator('Pending Approval');
      await expect(pendingStatus).toBeVisible();
    });
  });

  test('TC-LV-02: Apply for leave with end date before start date @regression', async ({ page, pimPage, leavePage, loginPage }) => {
    let credentials = { username: '', password: '' };
    await test.step('Setup: Create employee and assign entitlements', async () => {
      const result = await createEmployeeWithEntitlement(page, pimPage, leavePage, loginPage);
      credentials = { username: result.username, password: result.password };
      await loginPage.login(credentials.username, credentials.password);
    });
    await test.step('Step 1: Navigate to Leave page', async () => {
      await page.goto('/web/index.php/leave/applyLeave');
      await leavePage.waitForLoaderToDisappear();
    });
    await test.step('Step 2: Select Leave Type', async () => {
      await leavePage.selectLeaveType('CAN - Bereavement');
    });
    await test.step('Step 3: Fill Leave Form with invalid dates', async () => {
      await leavePage.fillLeaveForm(Helper.getFutureDate(5), Helper.getFutureDate(3));
    });
    await test.step('Step 4: Submit Request', async () => {
      await leavePage.submitRequest();
    });
    await test.step('Step 5: Verify error message is visible', async () => {
      await expect(leavePage.errorMessage).toBeVisible();
    });
  });

  test('TC-LV-04: Admin approves a pending leave request @smoke', async ({ page, pimPage, leavePage, loginPage }) => {
    let empName = '';
    await test.step('Setup: Ensure pending leave request exists', async () => {
      empName = await ensurePendingLeaveRequest(page, pimPage, leavePage, loginPage);
    });
    await test.step('Step 1: Navigate to Leave List', async () => {
      await page.goto('/web/index.php/leave/viewLeaveList');
      await leavePage.waitForLoaderToDisappear();
    });
    await test.step('Step 2: Filter by Employee Name and Pending Status', async () => {
      await leavePage.filterByEmployee(empName);
      await leavePage.selectLeaveStatus('Pending Approval');
      await leavePage.searchLeave();
    });
    await test.step('Step 3: Approve request', async () => {
      await leavePage.approveFirstRequest();
    });
    await test.step('Step 4: Verify success toast message', async () => {
      await expect(leavePage.toastMessage).toBeVisible();
      await expect(leavePage.toastMessage).toContainText(/Successfully/i);
    });
  });

  test('TC-LV-05: Admin rejects a pending leave request @smoke', async ({ page, pimPage, leavePage, loginPage }) => {
    let empName = '';
    await test.step('Setup: Ensure pending leave request exists', async () => {
      empName = await ensurePendingLeaveRequest(page, pimPage, leavePage, loginPage);
    });
    await test.step('Step 1: Navigate to Leave List', async () => {
      await page.goto('/web/index.php/leave/viewLeaveList');
      await leavePage.waitForLoaderToDisappear();
    });
    await test.step('Step 2: Filter by Employee Name and Pending Status', async () => {
      await leavePage.filterByEmployee(empName);
      await leavePage.selectLeaveStatus('Pending Approval');
      await leavePage.searchLeave();
    });
    await test.step('Step 3: Reject request', async () => {
      await leavePage.rejectFirstRequest();
    });
    await test.step('Step 4: Verify success toast message', async () => {
      await expect(leavePage.toastMessage).toBeVisible();
      await expect(leavePage.toastMessage).toContainText(/Successfully/i);
    });
  });
});