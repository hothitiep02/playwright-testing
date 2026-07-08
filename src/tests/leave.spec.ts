import { test, expect } from '../fixtures/base.fixture';
import { LeaveLocator } from '../pages/LeavePage'; 
import { RandomUtils } from '../utils/RandomUtils';

test.describe('Leave Module @leave', () => {
  // Chạy tuần tự: Test Case trước làm tiền đề dữ liệu cho Test Case sau
  test.describe.configure({ mode: 'serial' });

  // Định nghĩa tên nhân viên dùng chung cho cả file spec
  const empFirstName = RandomUtils.getUniqueName('QA_Leave');
  const empLastName = 'Lead_2026';
  const testFullName = `${empFirstName} ${empLastName}`;
  const empId = RandomUtils.getRandomEmployeeId();

  const getDynamicDateStrings = (startOffset: number, duration: number) => {
    const start = new Date();
    start.setDate(start.getDate() + startOffset);
    const end = new Date(start);
    end.setDate(start.getDate() + duration);
    return {
      startDate: start.toISOString().split('T')[0],
      endDate: end.toISOString().split('T')[0]
    };
  };

  test('TC-LV-00 - Pre-requisite: Create employee and assign entitlement balance', async ({ page, pimPage, leavePage }) => {
    await test.step('Action: Create a fresh test employee via PIM', async () => {
      await pimPage.addEmployee(empFirstName, empLastName, empId);
    });
    await test.step('Action: Assign 10 days leave entitlement to the new employee', async () => {
      await page.goto('/web/index.php/leave/addLeaveEntitlement');
      await leavePage.assignLeaveEntitlement(testFullName, '10');
    });
  });

  test.beforeEach(async ({ leavePage }) => {
    await leavePage.navigateToLeave();
  });

  test('TC-LV-01 - Apply for leave with valid date range @smoke', async ({ leavePage }) => {
    const period = getDynamicDateStrings(1, 0);
    await test.step('Action: Submit a valid 1-day leave request', async () => {
      await leavePage.applyLeaveAction(period.startDate, period.endDate);
    });
    await test.step('Verification: Confirm target success toast alert triggers', async () => {
      await expect(leavePage.toast).toBeVisible({ timeout: 10000 });
      await expect(leavePage.toast).toContainText(/Successfully Saved|Success/i);
    });
  });

  test('TC-LV-02 - Apply for leave with end date before start date @regression', async ({ leavePage }) => {
    await test.step('Action: Submit end date preceding the start date', async () => {
      await leavePage.applyLeaveAction('2026-10-15', '2026-10-14');
    });

    await test.step('Verification: Confirm layout validation message prevents submit', async () => {
      await expect(leavePage.dateErrorMessage.first()).toBeVisible();
      await expect(leavePage.dateErrorMessage.first()).toContainText(/To date should be after|cannot be before/i);
    });
  });

  test('TC-LV-04 - Admin approves a pending leave request @regression', async ({ leavePage }) => {
    const period = getDynamicDateStrings(3, 0);
    await test.step('Pre-condition: Create an isolated pending request', async () => {
      await leavePage.applyLeaveAction(period.startDate, period.endDate);
      await expect(leavePage.toast).toContainText(/Successfully Saved|Success/i);
    });

    await test.step('Action: Fetch list and click Approve on target record', async () => {
      await leavePage.searchLeaveRequestForEmployee(testFullName);
      const firstRow = leavePage.leaveTableRows.first();
      await expect(firstRow).toBeVisible();
      const approveBtn = firstRow.getByRole('button', { name: LeaveLocator.approveRole });
      await approveBtn.click();
    });
    await test.step('Verification: Verify state data update completes', async () => {
      await expect(leavePage.toast).toContainText(/Successfully Updated|Success/i);
    });
  });
});