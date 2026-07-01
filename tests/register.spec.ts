import { test, expect } from '@playwright/test';

test('Verify Register page title', async ({ page }) => {
  await page.goto('/Register.html');
  const title = await page.title();
  console.log('Title:', title);
  expect(title).toBe('Register');
});