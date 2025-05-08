import test, { expect } from "playwright/test";

test('should create a lead in leaftaps site', async({page})=>{
    let firstname = "vignesh"
    let lastname = "sekaran"
    let companyname = "plint"
    let status = "Assigned"

    //login into leaf taps site
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()

    //create lead module
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("(//input[@name='companyName'])[2]").waitFor()
    await page.locator("(//input[@name='companyName'])[2]").fill(companyname)
    await page.locator("(//input[@name='firstName'])[3]").fill(firstname)
    await page.locator("(//input[@name='lastName'])[3]").fill(lastname)
    await page.locator("#createLeadForm_personalTitle").fill("doctor")
    await page.locator("#createLeadForm_generalProfTitle").fill("Dr.")
    await page.locator("#createLeadForm_annualRevenue").fill('123456')
    await page.locator("#createLeadForm_departmentName").fill("department")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("123456789")
    await page.locator("//input[@value='Create Lead']").click()
    await page.waitForSelector('#viewLead_companyName_sp', { timeout: 2000 });

    //validate entered value as same as registered value
    let cmpname = await page.locator("#viewLead_companyName_sp").innerText()
    const company = cmpname.replace(/[^a-zA-Z]/g, '')
    const fname = await page.locator("#viewLead_firstName_sp").innerText()
    const lname = await page.locator("#viewLead_lastName_sp").innerText()
    const statuscheck = await page.locator("#viewLead_statusId_sp").innerText()
    const title = await page.title()
    expect (company).toBe(companyname)
    expect (fname).toBe(firstname)
    expect (lname).toBe(lastname)
    console.log("the tile of the page is : " +title)

    



    
})