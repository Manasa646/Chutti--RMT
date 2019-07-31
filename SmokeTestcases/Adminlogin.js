var loginobj = require ('../PageObjects/loginobjects');
var protractorhelper = require ('protractor-helper');
var inputdata = require ('../InputData/Rmtdata');
let properties = require('../Properties/Rmtlocators.json');


describe("Navigate to RMT URL" , function(){

    it("Open Login Page",function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.LoginData.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.LoginData.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);

        browser.sleep(2000);
     
       
    })

})


    