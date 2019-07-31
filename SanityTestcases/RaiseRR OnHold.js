var approveobj = require('../PageObjects/DeptLeadobj.js')
var protractorhelper = require ('protractor-helper');
var inputdata = require ('../InputData/Rmtdata.json');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
describe("Navigate to RMT URL",function(){
   // require('../Testcases/DeptLeadlogin.js')
   it('Login as DeptLead',function(){
    browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.DeptLead.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.DeptLead.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(2000);
   })
    it("OnHold the RaisedRequest",function(){

 protractorhelper.clickWhenClickable(approveobj.Resource);
 protractorhelper.clickWhenClickable(approveobj.resourcerequest);
 protractorhelper.clickWhenClickable(approveobj.viewdetail);
 browser.sleep(2000);
 browser.actions().mouseMove(approveobj.remarks).perform();
 protractorhelper.fillFieldWithTextWhenVisible(approveobj.remarks,inputdata.RmtData.DeptLead.Onholdremarks);
 //protractorhelper.clickWhenClickable(approveobj.hold);
 browser.sleep(2000);
 protractorhelper.clickWhenClickable(loginobj.Dashboard);
 browser.sleep(2000);
 protractorhelper.clickWhenClickable(loginobj.Person);
 browser.sleep(2000);
 protractorhelper.clickWhenClickable(loginobj.Logout);
 browser.sleep(2000);


    })
})