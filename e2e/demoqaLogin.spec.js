import {test , expect} from '@playwright/test';
test('demoqa , async ({page}) ==> {
     await page.goto ('https://demoqa.com/');
await page.waitfortimeout(2000); 
await page.getbyplaceholder('Full Name').fill('Abinaya');
await page.getbyplaceholder('name@example.com').fill('abc@gmail.com');
});
