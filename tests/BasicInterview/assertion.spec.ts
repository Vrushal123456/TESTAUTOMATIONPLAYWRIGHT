import {test,expect} from '@playwright/test'

test('assetrtion in playwright', async ({ page,context }) =>{

    //await page.setViewportSize({ width: 1920, height: 1080 });

// verify check box
        await page.goto("https://www.amazon.in/");
        await page.setViewportSize({ width: 1920, height: 1080 });
        
       await page.getByRole('link', { name: 'Refrigerators' }).click();

       await page.getByRole('link', { name: 'Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue,2023 Model)', exact: true }).click();

       

// Click on a link that opens a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // waits for new tab
    page.click('a[target="_blank"]') // example element that opens new tab
  ]);

  // Switch to new tab and wait until loaded
  await newPage.waitForLoadState();
  console.log('New Tab URL:', newPage.url());

  // Do something in new tab
  await expect(newPage).toHaveTitle(/.*/);

  // You can switch back to first page any time
  console.log('First Tab URL:', page.url());

  await newPage.getByRole('button', { name: 'Add to Cart' }).isEnabled();

  await newPage.getByRole('button', { name: 'Add to Cart' }).click()
       
 

          
       



    });