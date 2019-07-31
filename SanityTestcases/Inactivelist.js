var protractorhelper = require ('protractor-helper');
var records =require('../PageObjects/Recordlist.js');
var loginobj = require ('../PageObjects/loginobjects');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');

describe('Navigate to RMT URL',function(){
   // require ('../Testcases/HRlogin.js')
   it('Login as HR',function(){
    browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.Hrlogin.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.Hrlogin.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(2000);
   })
   it("Check for Inactivelist records",function(){
       protractorhelper.clickWhenClickable(records.Resource);
       protractorhelper.clickWhenClickable(records.Candidatelist);
       browser.sleep(6000);
       protractorhelper.clickWhenClickable(records.Dropdownlist);
       //browser.sleep(2000);
       protractorhelper.clickWhenClickable(records.Inactive);
      protractorhelper.clickWhenClickable(records.search);
       browser.sleep(3000);
       protractorhelper.clickWhenClickable(loginobj.Person);
       browser.sleep(2000);
       protractorhelper.clickWhenClickable(loginobj.Logout);
       browser.sleep(2000);
   })
})