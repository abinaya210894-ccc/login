import {test, expect} from '@playwright/test';
test('demoqa text box', async ({page}) => {
    await page.goto('https:.//demoqa.com/text-box');
    await page.waitForTimeout (2000);
    await page.getByPlaceholder('Full Name').fill('Abinaya');
})