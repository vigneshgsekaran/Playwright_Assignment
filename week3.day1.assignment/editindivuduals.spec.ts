import test from "playwright/test";

test('edit individuals from sales force login', async({page})=>{

    let sname = "vignesh"
    let fname = "sekaran"
    const exptdtitle = fname+" "+sname+" | Salesforce"
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    await page.waitForTimeout(5000)
    await page.locator("//button[@title='App Launcher']/div").click()
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(2000)
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//input[@class='slds-input']").fill(sname)
    await page.locator("//input[@class='slds-input']").click()
    await page.locator("(//a[@title='"+sname+"'])[1]").click()
    await page.locator("//div[@title='Edit']").click()
    await page.waitForTimeout(2000)
    await page.locator("(//a[@role='combobox'])[1]").click()
    await page.locator("//a[text()='Mr.']").click()
    await page.getByPlaceholder("First Name").fill(fname)
    await page.locator("//button[@title='Save']").click()
    await page.waitForTimeout(2000)
    const actualtitle = await page.title()
    if(exptdtitle === actualtitle){
        console.log("edit indivudal is successful")
    }
    else{
        console.log("edit indivudal is failed")
    }




  
    

    

})