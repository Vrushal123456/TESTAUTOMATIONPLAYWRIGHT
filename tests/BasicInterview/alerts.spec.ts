import { test, expect } from '@playwright/test';

test('Handle alert', async ({ page }) => {
  page.on('dialog', async dialog => {
    await dialog.accept(); // Accept the alert
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.click('text=Click for JS Alert');

  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

