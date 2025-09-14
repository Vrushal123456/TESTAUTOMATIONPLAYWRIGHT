import {test,expect} from '@playwright/test';

test.describe('all mouse actions', ()=>{

test('hover action',async ({page})=>{

    await page.goto("https://www.amazon.in/")

    await page.locator('[data-csa-c-slot-id="nav-link-amazonprime"]').focus();
    await page.locator('[data-csa-c-slot-id="nav-link-amazonprime"]').hover();

    await page.locator(".a-button-text").dblclick();


    await expect(page.getByText('Prime Delivery')).toBeVisible();



})

test.only('drag and drop',async ({page})=>{

    await page.goto("https://practice.expandtesting.com/drag-and-drop")

    const source=await page.locator('#column-a');
    const dest=await page.locator('#column-b');
    
    
    await source.dragTo(dest);



})






});