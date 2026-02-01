import {test , expect} from '@playwright/test';
test ('Login', async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('username').fill('Admin');
await page.waitForTimeout(2000);
await page.getByPlaceholder('Password').fill('admin123'); 
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(10000);

});