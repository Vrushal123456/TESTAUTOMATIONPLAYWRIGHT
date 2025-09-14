import { test, expect } from '@playwright/test';

test('test FileUpload and DownLoad', async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/upload");

  // Upload file
  await page.locator('#fileInput').setInputFiles('tests/sample.txt');

  

  // Submit file
  await page.locator('#fileSubmit').click();





});


//file download

test('File download', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Start waiting for the download
  const [download] = await Promise.all([
    page.waitForEvent('download'), // wait for the event
    page.click('a[href="download/some-file.txt"]') // action that initiates download
  ]);

  // Save the downloaded file to a custom path
  const downloadPath = path.join(__dirname, 'tests/sample.txt');
  await download.saveAs(downloadPath);

  console.log(`Downloaded file saved at: ${downloadPath}`);
});
