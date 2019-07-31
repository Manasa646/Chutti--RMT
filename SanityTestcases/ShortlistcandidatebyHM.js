var protractorhelper = require('protractor-helper');
var status = require('../PageObjects/shortlistobj.js')
var loginobj = require ('../PageObjects/loginobjects');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');

describe("Login as HiringManager" , function(){
   // require('../Testcases/HiringManagerlogin.js')
   it('Login as HM',function(){
    browser.get(properties.RequisitionToolLocators.URL);
    browser.driver.manage().window().maximize();
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.HMLogin.username);
    protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.HMLogin.password);
    protractorhelper.clickWhenClickable(loginobj.Signin);
    browser.sleep(3000);
   })

    it("Shortlist a candidate",function(){
        protractorhelper.clickWhenClickable(status.Resource);
        protractorhelper.clickWhenClickable(status.list);
        protractorhelper.clickWhenClickable(status.viewdetail);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(status.candidatelist);
        browser.sleep(2000);
        browser.actions().mouseMove(status.clickaction).perform();
        protractorhelper.clickWhenClickable(status.clickaction);
        browser.sleep(4000);
       //browser.actions().mouseMove(status.shortlist).perform();
        //protractorhelper.clickWhenClickable(status.shortlist);
        //browser.sleep(3000);
        protractorhelper.clickWhenClickable(loginobj.Dashboard);
        browser.sleep(4000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
        browser.sleep(2000);
    

    })
})