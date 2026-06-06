import {test, expect, Locator} from '@playwright/test';


test ("Verify Dynamic Table", async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/");

let rows:Locator[] = await page.locator("#taskTable tbody tr").all();

// Row count
expect(rows.length).toBe(4);

// Print whole row data

for (let row of rows)
{
    let allrowdata = await row.locator("td").allInnerTexts();
    console.log(allrowdata);
}


});