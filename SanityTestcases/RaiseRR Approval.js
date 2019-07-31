var approveobj = require('../PageObjects/DeptLeadobj.js')
var protractorhelper = require ('protractor-helper');
var loginobj = require ('../PageObjects/loginobjects');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');
describe("Navigate to RMT URL",function(){
    //require('../Testcases/DeptLeadlogin.js')
    it('Login as DeptLead',function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.DeptLead.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.DeptLead.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
    })
    it("Approve the request",function(){

 protractorhelper.clickWhenClickable(approveobj.Resource);
 protractorhelper.clickWhenClickable(approveobj.resourcerequest);
 protractorhelper.clickWhenClickable(approveobj.viewdetail);
 browser.actions().mouseMove(approveobj.approval).perform();
 protractorhelper.clickWhenClickable(approveobj.approval);
 browser.sleep(7000);
 protractorhelper.clickWhenClickable(loginobj.Dashboard);
 browser.sleep(7000);
 protractorhelper.clickWhenClickable(loginobj.Person);
 browser.sleep(2000);
 protractorhelper.clickWhenClickable(loginobj.Logout);
 browser.sleep(2000);
})


    })


