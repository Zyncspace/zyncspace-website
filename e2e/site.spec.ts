import { test, expect } from '@playwright/test';

test.describe('Unified site', () => {
  test('homepage loads services sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('nav.navbar')).toBeVisible();
  });

  test('product page loads', async ({ page }) => {
    await page.goto('/features');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('blog index loads', async ({ page }) => {
    await page.goto('/blogs');
    await expect(page.locator('h1')).toContainText(/blog/i);
  });
});
