import test from "playwright/test";

test('edit lead from leaftaps', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.waitForTimeout(2000)
    await page.locator("(//input[@name='companyName'])[2]").fill("plint")
    await page.locator("(//input[@name='firstName'])[3]").fill("vignesh")
    await page.locator("(//input[@name='lastName'])[3]").fill("sekaran")
    await page.locator("//input[@value='Create Lead']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Edit']").click()
    await page.locator("(//input[@name='companyName'])[2]").fill("modifiedcompanyname")
    await page.locator("//input[@value='Update']").click()
    await page.waitForTimeout(2000)





})