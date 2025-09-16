import {test, expect} from '@playwright/test'
import loginData from './login.json';
import locators from './Locators.json';

test('Basic test to verify json file usage', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')           


await page.locator(locators.username).fill(loginData.username);
await page.locator(locators.password).fill(loginData.password);
await page.locator(locators.loginButton).click();

});