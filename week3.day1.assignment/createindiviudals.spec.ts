import test from "playwright/test";

test('create individuals from sales force login', async({page})=>{

    let lname = "vignesh"
    const exptdtitle = lname+" | Salesforce"
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    await page.waitForTimeout(5000)
    await page.locator("//button[@title='App Launcher']/div").click()
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(2000)
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//span[text()='Recently Viewed']").click()
    await page.locator("//span[text()='All Individuals']").click()
    await page.locator("//div[@title='New']").click()
    await page.getByPlaceholder("Last Name").fill(lname)
    await page.locator("//button[@title='Save']").click()
    await page.waitForTimeout(2000)
    const actualtitle = await page.title()
    if(exptdtitle === actualtitle){
        console.log("create indivudal is successful")
    }
    else{
        console.log("create indivudal is failed")
    }


    

})