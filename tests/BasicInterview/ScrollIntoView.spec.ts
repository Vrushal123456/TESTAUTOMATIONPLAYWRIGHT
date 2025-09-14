import{test, expect} from '@playwright/test';
import { describe } from 'node:test';

describe('scroll',()=>{

 test.skip('scroll scenarios',async ({page})=>{

        await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com")

        await page.locator("#user-name").type("standard_user")
        await  page.locator("#password").type("secret_sauce")

        await page.locator("#login-button").click();

        await page.locator("[data-test='social-linkedin']").click();


    })

    test.only('dropdown scenario',async ({page})=>{
    

        await page.goto("https://www.amazon.in/");

        await page.locator("#twotabsearchtextbox").click();
        await page.locator("#twotabsearchtextbox").fill("macbook")

        // dynamic dropdown
        await page.waitForSelector('div.s-suggestion');

       const options=await page.locator("div.s-suggestion").allInnerTexts();
       console.log("all option available",options);

      await page.locator("div.s-suggestion", { hasText : 'macbook m4' }).click();

      //li dropdown 

      await page.locator('[data-action="a-dropdown-button"]').click();

      await page.waitForSelector('[data-action="a-dropdown-options"]');

      const option2=await page.locator('[data-action="a-dropdown-options"]').allInnerTexts();
       
      for(const feature of option2){

       
          console.log("feature is",feature);
      


      }

      
        

        
    })







})

   

