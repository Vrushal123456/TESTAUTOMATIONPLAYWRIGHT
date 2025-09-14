import{test,expect} from '@playwright/test';

test('iframe testing',async ({page})=>{

 

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const ifr=await page.frameLocator('frame[src="frame_2.html"]');

    await ifr.locator('[name="mytext2"]').fill('vrushal sagane')



})