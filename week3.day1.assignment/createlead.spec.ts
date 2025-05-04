import test from "playwright/test"

test('Create a lead in salesforce login', async({page})=>{

const firstname = "vignesh"
const lastname  = "G"
const expecttitle = firstname+" "+lastname+" | Lead | Salesforce"
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("vidyar@testleaf.com")
await page.locator("#password").fill("Sales@123")
await page.locator("#Login").click()
await page.waitForTimeout(5000)
await page.locator("//button[@title='App Launcher']/div").click()
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(2000)
await page.locator("//p[text()='Sales']").click()
await page.waitForTimeout(2000)
await page.locator("//span[text()='Leads']").click()
await page.locator("//div[@title='New']").click()
await page.locator("//button[@name='salutation']").click()
await page.locator("//span[text()='Dr.']").click()
await page.locator("//input[@name='firstName']").fill(firstname)
await page.locator("//input[@name='lastName']").fill(lastname)
await page.locator("//input[@name='Company']").fill("plintron")
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(2000)
const actualtitle = await page.title()
if(expecttitle === actualtitle){
    console.log("create lead is successful")
}
else{
    console.log("create lead is failed")
}



})