var Roleobj = require('../PageObjects/Roleobjs');
var protractorhelper = require('protractor-helper');
var inputdata = require ('../InputData/Rmtdata');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
describe("Navigate to settings",function(){
    //require('../SmokeTestcases/Adminlogin.js');
    it("Login as Admin",function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.LoginData.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.LoginData.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
    })
   
    it("Add role for Hiring Manager",function(){
        
        protractorhelper.clickWhenClickable(Roleobj.Settings);
        protractorhelper.clickWhenClickable(Roleobj.Roles);
        browser.sleep(6000);
        protractorhelper.clickWhenClickable(Roleobj.add);
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(Roleobj.Rolename,inputdata.RmtData.HiringManager.rolename);
        protractorhelper.fillFieldWithTextWhenVisible(Roleobj.Description,inputdata.RmtData.HiringManager.description);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(Roleobj.Permissions);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(Roleobj.CheckRL);
        browser.sleep(3000);
        browser.actions().mouseMove(Roleobj.Submit).perform();
        protractorhelper.clickWhenClickable(Roleobj.Submit);
        browser.sleep(5000);
        protractorhelper.clickWhenClickable(loginobj.Dashboard);
        browser.sleep(5000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
        browser.sleep(2000);


    })
})