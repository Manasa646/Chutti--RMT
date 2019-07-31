var adddeptlead = require("../PageObjects/adddeptlead.js");
var protractorhelper = require('protractor-helper');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
var inputdata = require ('../InputData/Rmtdata');
describe("Login as Admin" , function(){
   // require('../SmokeTestcases/Adminlogin.js')
   it(' Login as Aedmin',function(){
    browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    browser.sleep(2000);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.LoginData.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.LoginData.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(2000);
     
   })
  
    it("Select DeptLead for Department",function(){
    protractorhelper.clickWhenClickable(adddeptlead.Settings);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(adddeptlead.clickDept);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(adddeptlead.Edit);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(adddeptlead.Adddept);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(adddeptlead.selectlead);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(adddeptlead.submit);
    browser.sleep(10000);
    protractorhelper.clickWhenClickable(loginobj.Dashboard);
    browser.sleep(3000);
    protractorhelper.clickWhenClickable(loginobj.Person);
    browser.sleep(2000);
    protractorhelper.clickWhenClickable(loginobj.Logout);
    browser.sleep(2000)

    })
})
