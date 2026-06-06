import {test, expect, Locator} from '@playwright/test';

test ('Verify Dummy Ticket  Website Full Workflow', async ({page})=>{

await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

let radiooption =page.locator("#product_549");

await radiooption.check();

await expect(radiooption).toBeChecked();  // assertion

await page.getByLabel("Enter your coupon code").click();

let couponCodeTextBox =  page.getByPlaceholder("Coupon code");

expect(couponCodeTextBox).toBeVisible();  // Assertion

expect(couponCodeTextBox).toBeEnabled(); // Assertion

await couponCodeTextBox.fill("123456")

let EnteredCode = await couponCodeTextBox.inputValue();

expect(EnteredCode).toBe("123456");

await page.getByText("Apply coupon").click();

let couponError:String = await page.locator("#coupon-error-notice").innerText();

expect(couponError).toBe('Coupon "123456" cannot be applied because it does not exist.') //Assertions

await page.locator("#travname").fill("Akash");

await page.locator("input[name='travlastname']").fill("Ratore");

let DOBDatePicker = await page.locator("input[name='dob']");

DOBDatePicker.click();

let MonthDropDown = page.locator(".ui-datepicker-month");

await MonthDropDown.selectOption("Mar");

let YearDropDonw = page.locator(".ui-datepicker-year");

await YearDropDonw.selectOption("2001");

await page.locator("table.ui-datepicker-calendar tbody tr:first-child td:nth-child(6)").click();

let EnteredDOB = await DOBDatePicker.inputValue();

expect(EnteredDOB).toBe("02/03/2001"); // Assertion

let MaleRadio = page.locator("#sex_1");

MaleRadio.check();

expect(MaleRadio).toBeChecked(); //Assertion

await page.locator("#traveltype_1").check();

expect(page.locator("#traveltype_1").check()).toBeTruthy(); //Assertion

await page.locator("input[name = 'fromcity']").fill("Toronto");

await page.locator("#tocity").fill("Mumbai");

let DepartureDatePicker =page.locator("#departon");

await DepartureDatePicker.click();

let Departureyeardrop = page.locator(".ui-datepicker-year");

await Departureyeardrop.selectOption("2027");

let DepartureMonthdrop = page.locator(".ui-datepicker-month");

await DepartureMonthdrop.selectOption("Mar");

await page.locator(".ui-datepicker-calendar tbody tr:nth-child(3) td:nth-child(2)").click();

let EnteredDepartureDate = await DepartureDatePicker.inputValue();

expect(EnteredDepartureDate).toBe("15/03/2027");  //Assertion

await page.locator("#notes").fill("Need visa as soon as possible.");

await page.locator("#select2-reasondummy-container").click();

let SearchField = page.locator(".select2-search__field")

await SearchField.fill("Visa Extension");

await page.keyboard.press("Enter")

await page.locator("#deliverymethod_1").check();

await page.locator("#billname").fill("Akash Rathore");

await page.locator("#billing_phone").fill("+12345678956");

await page.locator("#billing_email").fill("abc.123@gmail.com");

let BiilingCountry= page.locator("#billing_country");

BiilingCountry.selectOption("Canada");

let BiilingCountryoptions:Locator[] = await page.locator("#billing_country option").all();

expect(BiilingCountryoptions.length).toBe(251); //Assertion

for (let option of BiilingCountryoptions)
{
    let countries = await option.innerText();

    console.log(countries);

}

await page.locator("#billing_address_1").fill("123 Scott Street, Niagara Falls");

await page.locator("#billing_city").fill("Niagara Falls");

await page.locator("#select2-billing_state-container").click();

let SearchField2 = page.locator(".select2-search__field")

await SearchField2.fill("Ontario");

await page.keyboard.press("Enter");

await page.locator("#billing_postcode").fill("L2C 6M1");

let ProductName = await page.locator(".cart_item").innerText();

let OrderTotalRow = await page.locator(".order-total").allInnerTexts();

OrderTotalRow.length;

console.log(OrderTotalRow[0]);

let amount = OrderTotalRow[0].split("₹")[1];

if(ProductName.includes("Dummy ticket for Visa Application"))
{
    expect(amount).toBe("1,200");  //Final Assertion

}
else if (ProductName.includes("Dummy return ticket"))
{
    expect(amount).toBe("990");  //Final Assertion
}

else
{
    console.log ("Product is different");
}

await page.waitForTimeout(5000);


});

