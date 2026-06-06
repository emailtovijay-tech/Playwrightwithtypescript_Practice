import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('link', { name: 'Udemy Courses' })).toBeVisible();
  await page.getByRole('link', { name: 'Udemy Courses' }).click();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeChecked();
  await page.getByLabel('Country:').selectOption('australia');
  await expect(page.getByLabel('Country:')).toHaveValue('australia');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  await expect(page.locator('#demo')).toContainText('You pressed Cancel!');
  await page.getByRole('button', { name: 'Copy Text' }).dblclick();
  await expect(page.locator('#field2')).toHaveValue('Hello World!');
  await page.getByText('Samsung').click();
  await page.getByRole('link', { name: 'Apple' }).click();
  await expect(page.locator('.tile-link').first()).toBeVisible();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('laptop');
  await page.locator('input[type="submit"]').click();
  await expect(page.locator('#Wikipedia1_wikipedia-search-results')).toMatchAriaSnapshot(`
    - link "Laptop orchestra":
      - /url: https://en.wikipedia.org/wiki/Laptop_orchestra
    `);
});