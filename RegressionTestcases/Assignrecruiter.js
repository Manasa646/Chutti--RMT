var assign = require('../PageObjects/assignobj.js');
var protractorhelper = require ('protractor-helper');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');
var inputdata = require ('../InputData/Rmtdata');


describe('Login as HR',function(){
   // require ('../SmokeTestcases/HRlogin.js')
   it('Login as HR',function(){
    browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.Hrlogin.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.Hrlogin.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(2000);
   })
  
   it("Assign form to Recruiter",function(){
    browser.sleep(2000);
        protractorhelper.clickWhenClickable(assign.Resource);
        protractorhelper.clickWhenClickable(assign.assignrequest);
        protractorhelper.clickWhenClickable(assign.Assignrecruiter);
        browser.sleep(2000);
       // protractorhelper.clickWhenClickable(assign.selectrecruiter);
       // browser.sleep(2000);
       // protractorhelper.clickWhenClickable(assign.Recruiter);
        //browser.sleep(2000);
       // protractorhelper.clickWhenClickable(assign.assign);
        //browser.sleep(5000);
        browser.actions().mouseMove(assign.clickassign).perform();
        protractorhelper.clickWhenClickable(assign.clickassign);
        browser.sleep(10000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
        browser.sleep(2000)

    })
})