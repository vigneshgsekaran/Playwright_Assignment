import test, { expect } from "playwright/test";

test('should create a new account in salesforce', async({page})=>{

//Enter username and password using getbylabel method    
await page.goto("https://login.salesforce.com/")
await page.getByLabel("Username").fill("vidyar@testleaf.com")
await page.getByLabel("Password").fill("Sales@123")
await page.locator("#Login").click()
await page.waitForTimeout(3000)

//verify title and current url using assertion
await expect(page).toHaveTitle("Home | Salesforce")
await expect(page).toHaveURL("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")


await page.locator(".slds-icon-waffle").click()
await page.waitForTimeout(3000)
await page.getByText("View All").click()
await page.getByPlaceholder("Search apps or items...").fill("service")
await page.locator("(//mark[text()='Service'])[1]").click()
await page.waitForSelector("//a[@title='Accounts']", { timeout: 5000 });
await page.locator("//a[@title='Accounts']").click()
await page.getByRole('button', { name: 'New'}).click()
await page.locator("//input[@name='Name']").fill("vignesh")
await page.locator("//button[text()='Save']").click()

//verify toast messge is displayed
const test =await  page.locator("//div[@data-key='success']").innerText()
if(test.length!= 0){
    console.log("success toast message is displayed")
}
else(
    console.log("success toast message is not displayed")
)




})