var loginobj = require ('../PageObjects/loginobjects');
var protractorhelper = require ('protractor-helper');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');
//Buffer.allocUnsafe(size);
// new Buffer(string)            // Old
//Buffer.from(string)           // New

describe("Navigate to RMT URL" , function(){

    it("Login as Recruiter",function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.recruiter.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.recruiter.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
       
      
       
    })

})