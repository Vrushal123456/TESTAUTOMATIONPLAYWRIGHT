import { test, expect } from "@playwright/test";


test.only('webTable Handling',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  

    const rows=page.locator('table[name="courses"] tbody tr');  

    const rowCount=await rows.count();
    console.log(rowCount);  
    
const columns=page.locator('table[name="courses"] thead tr th');

const colCount=await columns.count();
console.log(colCount);

console.log(await page.locator('//table/tbody/tr[1]/th[1]').textContent());


});