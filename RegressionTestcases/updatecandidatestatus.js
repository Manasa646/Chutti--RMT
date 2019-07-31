var updatestatus = require('../PageObjects/updatestatus.js')
var protractorhelper = require('protractor-helper');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
var inputdata = require ('../InputData/Rmtdata');

describe("Login as Recruiter" , function(){
    //require('../SmokeTestcases/recruiterlogin.js')
    it('Login as Recruiter',function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.recruiter.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.recruiter.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
    })
   
    it("Update a status of a candidate",function(){
       // browser.sleep(2000);
        protractorhelper.clickWhenClickable(updatestatus.Resource);
        protractorhelper.clickWhenClickable(updatestatus.assignedrequest);
        protractorhelper.clickWhenClickable(updatestatus.clickview);
        protractorhelper.clickWhenClickable(updatestatus.candidatelist);
        browser.sleep(3000);
        protractorhelper.clickWhenClickable(updatestatus.selectrecords);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(updatestatus.ClickActive);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(updatestatus.Editinfo);
        protractorhelper.clickWhenClickable(updatestatus.generalinfo);
        browser.sleep(2000);
        browser.actions().mouseMove(updatestatus.selectstatus).perform();
        protractorhelper.clickWhenClickable(updatestatus.selectstatus);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(updatestatus.statusasqualifiedfornextround);
        browser.sleep(2000);
        browser.actions().mouseMove(updatestatus.submit).perform();
        protractorhelper.clickWhenClickable(updatestatus.submit);
        browser.sleep(5000);
        protractorhelper.clickWhenClickable(loginobj.Dashboard);
        browser.sleep(5000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
        browser.sleep(2000);
    })
})