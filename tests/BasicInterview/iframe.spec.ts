import{test,expect} from '@playwright/test';

test('iframe testing',async ({page})=>{

 

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const ifr=await page.frameLocator('frame[src="frame_2.html"]');

    await ifr.locator('[name="mytext2"]').fill('vrushal sagane')



})

test.only('iframe testing 2',async ({page})=>{


    await page.goto("https://demo.automationtesting.in/Frames.html")

const ifr = page.frameLocator('iframe[id="singleframe"]');

await ifr.locator('input[type="text"]').fill('vrushal sagane');


await page.getByText('Iframe with in an Iframe').click();

// Wait for the outer iframe to be available
const outerFrame = page.frameLocator('[src="MultipleFrames.html"]');
// Now select the inner iframe inside the outer iframe
const innerFrame = outerFrame.frameLocator('[src="SingleFrame.html"]');
await innerFrame.locator('input[type="text"]').fill('vrushal sagane');

});