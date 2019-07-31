var Roleobj = require('../PageObjects/Roleobjs');
var protractorhelper = require('protractor-helper');
var loginobj = require ('../PageObjects/loginobjects');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');

describe("Navigate to Settings" , function(){
    //require('../SmokeTestcases/Adminlogin.js');
    it('Login as Admin',function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.LoginData.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.LoginData.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
    })
    
it("Add Roles",function(){
protractorhelper.clickWhenClickable(Roleobj.Settings);
protractorhelper.clickWhenClickable(Roleobj.Roles);
browser.sleep(6000);
protractorhelper.clickWhenClickable(Roleobj.add);
browser.sleep(2000);
protractorhelper.fillFieldWithTextWhenVisible(Roleobj.Rolename,inputdata.RmtData.Roledetails.rolename);
protractorhelper.fillFieldWithTextWhenVisible(Roleobj.Description,inputdata.RmtData.Roledetails.description);
protractorhelper.clickWhenClickable(Roleobj.Permissions);
protractorhelper.clickWhenClickable(Roleobj.CheckRR);
protractorhelper.clickWhenClickable(Roleobj.CheckRL);
browser.sleep(2000);
browser.actions().mouseMove(Roleobj.Submit).perform();
protractorhelper.clickWhenClickable(Roleobj.Submit);
browser.sleep(8000);
protractorhelper.clickWhenClickable(loginobj.Dashboard);
browser.sleep(5000);
protractorhelper.clickWhenClickable(loginobj.Person);
browser.sleep(2000);
protractorhelper.clickWhenClickable(loginobj.Logout);

browser.sleep(2000);

    })
})

