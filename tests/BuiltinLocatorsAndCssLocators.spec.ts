import { test, expect, Locator } from '@playwright/test';

test("Verify Different Locators", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.title();

    await expect(page).toHaveTitle("Automation Testing Practice");

    await expect(page.getByRole("heading", { name: "Automation Testing Practice" })).toBeVisible();

    await expect(page.getByText("For Selenium, Cypress & Playwright")).toBeVisible();

    await expect(page.getByRole("link", { name: "Udemy Courses" })).toBeVisible();

    await page.getByPlaceholder("Enter Name").fill("Vraddhi");

    await page.getByRole("textbox", { name: "Enter EMail" }).fill("vraddhi@test.com");

    await page.goto("file:///F:/Playwright%20-%20Typescript%20course%20material/Day18/app.html");

    await page.getByLabel("Email Address:").fill("test@test.com");

    await expect(page.getByAltText("logo image")).toBeVisible();

    await expect(page.getByTitle("Home page link")).toHaveText("Home");

    await expect(page.getByTestId("edit-profile-btn")).toBeVisible();

    await page.getByTestId("edit-profile-btn").click();

    await page.getByRole("checkbox", { name: "Accept terms" }).check();

    await expect(page.getByRole("checkbox", { name: "Accept terms" })).toBeChecked();


    await page.goto("https://testautomationpractice.blogspot.com/");

    let xpathtablecell: Locator = page.locator("//table[@name='BookTable']//tr[2]//td[3]");
    // let tablecell1:any = await xpathtablecell.textContent();
    await expect(xpathtablecell).toHaveText("Selenium");

    let csstablecell: Locator = page.locator("table[name = 'BookTable'] tr:nth-child(3) td:nth-child(4)");
    // let tablecell2:any =  await csstablecell.textContent();
    await expect(csstablecell).toHaveText("500");


    await page.goto("https://testautomationpractice.blogspot.com/");

    let nameTextField: Locator = page.locator("#name");
    expect(nameTextField).toBeVisible();  // for checking if the text box is visible
    expect(nameTextField).toBeEnabled(); // for checking if the text box is enabled

    let length: any = await nameTextField.getAttribute("maxlength"); // storing attribute value

    expect(length).toBe("15");  // verifying the maxlength of text

    await nameTextField.fill("Vijay");  // for entering the value

    let entereddata = await nameTextField.inputValue();  // for getting entered value

    expect(entereddata).toBe("Vijay");

    let maleRadioButton: Locator = page.locator("#male");
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();

    await maleRadioButton.check();

    await expect(maleRadioButton).toBeChecked();

    let femaleRadioButton: Locator = page.locator("#female");
    await expect(femaleRadioButton).toBeVisible();
    await expect(femaleRadioButton).toBeEnabled();

    femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked()
    await expect(maleRadioButton).not.toBeChecked();

    let femalevalue: any = await femaleRadioButton.getAttribute("Value");

    expect(femalevalue).toBe("female");

    let genderLabelName: any = await femaleRadioButton.getAttribute("name");

    expect(genderLabelName).toBe("gender");

    let monCheck: Locator = page.locator("input[value = 'monday']");

    await monCheck.check();

    await expect(monCheck).toBeChecked();

    await monCheck.uncheck();

    await expect(monCheck).not.toBeChecked();

    /*
       let allcheckboxes:any = await page.locator("input[type= 'checkbox']").all();
    
       expect(allCheckboxes.length).toBe(13);

       for(let chk of allCheckboxes)
       {
         await chk.check();
         await expect(chk).toBeChecked(); 
       }
    
     

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const checkboxes = days.map(day => page.getByLabel(day));

    for (const checkbox of checkboxes.slice(-3)) {

        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
  */

    // check all 7 days check boxes

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    expect(days.length).toBe(7);

    for (let i=0; i<days.length; i++)
    {
       const wholeWeek = page.getByLabel(days[i])
       await wholeWeek.check();
       await expect(wholeWeek).toBeChecked();
    }

    // Uncheck last three days

    const lastThreeDays = days.slice(-3);

    for (const day of lastThreeDays) {

    const checkbox = page.getByLabel(day);

    await checkbox.uncheck();
    expect(checkbox).not.toBeChecked();
}
    
// Single select drop down where Select tag is present

let countryDropDown:Locator= page.locator("#country");

// By Visible Text

await countryDropDown.selectOption("India");

// By Value Attribute 

await countryDropDown.selectOption({value: 'uk'});

// By Label 

await countryDropDown.selectOption({label: 'Japan'});

// By Index 

await countryDropDown.selectOption({index: 3});

expect(await countryDropDown.inputValue()).toBe("germany")

 // Print all countries 
let countryOptions: Locator = page.locator("select[id='country'] option");

console.log("Total Items: " + await countryOptions.count());

const countries = await countryOptions.allTextContents();

const trimmedCountries = countries.map(country => country.trim());

console.log(trimmedCountries);

});

// Multi select drop down

test.only("Verify multi select dropdown", async ({page})=>
{

 await page.goto("https://testautomationpractice.blogspot.com/");

let colordrop:any  =  page.locator("#colors option");

await expect(colordrop).toHaveCount(7);

 let Thirdoption = await colordrop.nth(2);
 await Thirdoption.click()
 await page.waitForTimeout(5000);

/*for (let i=0; i<colordrop.count; i++)
{

  colordrop.nth(i).click();

}*/



});























