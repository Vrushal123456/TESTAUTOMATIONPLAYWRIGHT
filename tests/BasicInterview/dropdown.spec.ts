import {test,expect} from '@playwright/test';

test('dynamic dropdown scenario',async({page})=>{


await page.goto("https://www.amazon.in/stores/HomePage/page/C58B7752-438F-43BD-9312-9D25E2521219")

await page.locator("#twotabsearchtextbox").focus();
await page.locator("#twotabsearchtextbox").fill("macbook");

    page.locator('[role="button"]', { hasText: 'macbook m1' }).click();



})