var loginobj = require ('../PageObjects/loginobjects');

var protractorhelper = require ('protractor-helper');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');

describe("Navigate to URL",function(){

    it("Login as HR",function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.Hrlogin.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.Hrlogin.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);
       
       
       

    })
})