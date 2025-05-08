import test, { expect } from "playwright/test";

test('Modifying the lead information in leaf tap', async({page})=>{
       let fname = "vignesh"  
       let modfycmpyname = "testleafupdated"
       let modifydesc = "modified description"
       let modifydeprtmnt = "new dept"

        //login into leaf taps site
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
        await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await page.locator("//a[text()='Leads']").click()
        
        //find the lead information
        await page.locator("//a[text()='Find Leads']").click()
        await page.locator("#ext-gen248").fill(fname)
        await page.locator("#ext-gen334").click()

      //always click the first resulting lead ID
      await page.locator("(//div[@class='x-grid3-scroller']//td//a)[1]").click()

      //editing the existing information
      await page.locator("//a[text()='Edit']").click()
      await page.locator("#updateLeadForm_companyName").fill(modfycmpyname)
      await page.locator("#updateLeadForm_description").fill(modifydesc)
      await page.locator("#updateLeadForm_departmentName").fill(modifydeprtmnt)
      await page.locator("//input[@value='Update']").click()

      //validate entered value as same as exisiting value
      let cmpname = await page.locator("#viewLead_companyName_sp").innerText()
      const company = cmpname.replace(/[^a-zA-Z]/g, '')
      let deptname = await page.locator("#viewLead_departmentName_sp").innerText()
      let desc = await page.locator("#viewLead_description_sp").innerText()

      const title = await page.title()
          expect (company).toBe(modfycmpyname)
          expect (deptname).toBe(modifydeprtmnt)
          expect (desc).toBe(modifydesc)
          console.log("the tile of the page is : " +title)




})