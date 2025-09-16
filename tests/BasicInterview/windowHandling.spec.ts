import { test } from "@playwright/test";


test.skip('window handling', async ({ page }) => {

await page.goto("https://demoqa.com/browser-windows");

const [newpage]=await Promise.all([

    page.waitForEvent('popup'),
    page.locator("#windowButton").click()
]);

const title=await newpage.title();
console.log(title);
await newpage.getByText("This is a sample page").isVisible();
await newpage.waitForLoadState();
console.log(await newpage.locator("#sampleHeading").textContent());
});


test('window handling 2', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const [newpage]=await Promise.all([

        page.waitForEvent('popup'),
        page.locator('#openwindow').click()
    ]);

    await newpage.waitForLoadState();

    console.log(newpage.url());
    console.log(await newpage.title());
    await newpage.getByText("Access all our Courses").isVisible();

     await newpage.close();

    await page.locator('[value="radio1"]').check();

    const t = await page.locator('[value="radio1"]').isChecked();
    console.log(t);

    
});


test.only('window handling 3', async ({ page}) => {
    await page.goto("https://www.amazon.in/");

await page.locator("#twotabsearchtextbox").fill('iphone 14 pro max');
await page.locator("#nav-search-submit-button").click();


const [newpage]=await Promise.all([
 page.waitForEvent('popup'),

 await page.getByText('Apple iPhone 15 (128 GB) - Black').click()



])

await newpage.waitForLoadState();
console.log(newpage.url());
console.log(await newpage.title()); 

await newpage.getByRole('heading', { name: 'Apple iPhone 15 (128 GB) -' }).locator('#productTitle').isVisible();

});