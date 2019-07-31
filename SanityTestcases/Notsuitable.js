var protractorhelper = require('protractor-helper');
var status = require('../PageObjects/Notsuitableobj.js')
var inputdata = require('../InputData/Rmtdata.json')
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
describe("Navigate to RMT URL" , function(){
    //require('../Testcases/HiringManagerlogin.js')
    it('Login as HR',function(){
        browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.HMLogin.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.HMLogin.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(3000);
    })
    it("Candidate NotSuitable",function(){
        protractorhelper.clickWhenClickable(status.Resource);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(status.list);
        protractorhelper.clickWhenClickable(status.viewdetail);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(status.clickaction);
        browser.sleep(3000);
        browser.actions().mouseMove(status.AddRemarks).perform();
        protractorhelper.fillFieldWithTextWhenVisible(status.AddRemarks,inputdata.RmtData.notsuitable.remarks);
        browser.sleep(3000);
        protractorhelper.clickWhenClickable(loginobj.Dashboard);
        browser.sleep(5000);
        protractorhelper.clickWhenClickable(loginobj.Person);
       // browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
        browser.sleep(2000);
    })
})