import { test, expect } from '@playwright/test';

test('@smoke Login with valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#login');

  await expect(page).toHaveURL(/dashboard/);
});

test('@regression Login with invalid credentials', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#login');

  await expect(page.locator('.error')).toBeVisible();
});
