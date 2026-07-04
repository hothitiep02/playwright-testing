import { test, expect } from '../../fixtures/base.fixture';
import * as testData from '../../utils/testData.json';

test.describe('Forgot Password Tests @forgotpassword', () => {
    test('TC-AUTH-06: Forgot password with registered email @regression',async ({page, loginPage,forgotPasswordPage}) => {
            await loginPage.clickForgotPassword();
            await expect(page).toHaveURL(/.*requestPasswordResetCode/);
            await forgotPasswordPage.resetPasswordExpectSuccess(testData.forgotPassword.registeredEmail);
        }
    );
    test('TC-AUTH-07: Forgot password with unregistered email @regression',async ({page,loginPage,forgotPasswordPage}) => {
            await loginPage.clickForgotPassword();
            await expect(page).toHaveURL(/.*requestPasswordResetCode/);
            await forgotPasswordPage.resetPasswordExpectSuccess(testData.forgotPassword.unregisteredEmail);
        }
    );
});