import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const KEY_ROUTES = [
  { path: '/', name: 'homepage' },
  { path: '/features', name: 'features' },
  { path: '/blogs', name: 'blogs' },
  { path: '/pricing', name: 'pricing' },
  { path: '/trust-center', name: 'trust center' },
  { path: '/services', name: 'services' },
] as const;

test.describe('Unified site', () => {
  test('homepage loads key sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#about')).toBeVisible();
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

  for (const route of KEY_ROUTES) {
    test(`${route.name} has no critical accessibility violations`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.locator('h1').first()).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['color-contrast'])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
