import {test , expect} from 'playwright/test';
test('Login' , async ({page}) => {
    await page.goto ('https://www.irctc.co.in/nget/train-search');
    await page.getByRole('searchbox' , {name :'Enter From station. Input is Mandatory.'}).fill('Madurai');
    await page. getByText(' MADURAI JN - MDU ').click();
    await page. getByRole('searchbox' , {name: 'Enter To station. Input is Mandatory.'}). fill('Chennai');
    await page. getByText (' CHENNAI EGMORE - MS ') .click();
    await page. locator('[type="text"]') . click();
    await page. getByText ('9') .click();
    await page. getByText ('All Classes') . selectOption ('AC First Class (1A) '); 





});
