var request = require('../PageObjects/RaiseRRobj');
var protractorhelper = require('protractor-helper');
var inputdata = require('../InputData/Rmtdata');
var loginobj = require ('../PageObjects/loginobjects');
var keyAction = require('../common/KeyActions.js');
let properties = require('../Properties/Rmtlocators.json');

describe("Navigate to RMT URL",function(){
   // require('../SmokeTestcases/HiringManagerlogin.js');
    it("Login as HiringManager",function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.HMLogin.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.HMLogin.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(3000);

    });

  
    it("Raise Requisition Request",function(){
        
        protractorhelper.clickWhenClickable(request.Resource);
        protractorhelper.clickWhenClickable(request.list);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(request.Add);
        protractorhelper.fillFieldWithTextWhenVisible(request.Jobtitle,inputdata.RmtData.requestdata.jobtitle);
        protractorhelper.fillFieldWithTextWhenVisible(request.projectname,inputdata.RmtData.requestdata.Projectname);
        protractorhelper.fillFieldWithTextWhenVisible(request.Exp,inputdata.RmtData.requestdata.Experience);
        protractorhelper.fillFieldWithTextWhenVisible(request.Primaryskill,inputdata.RmtData.requestdata.primaryskill);
        protractorhelper.clickWhenClickable(request.Qualification);
        protractorhelper.clickWhenClickable(request.Degree);
        protractorhelper.fillFieldWithTextWhenVisible(request.position,inputdata.RmtData.requestdata.Positions);
        protractorhelper.clickWhenClickable(request.Gender);
        protractorhelper.clickWhenClickable(request.selectgender);
        protractorhelper.clickWhenClickable(request.age);
        protractorhelper.clickWhenClickable(request.selectage);
        protractorhelper.fillFieldWithTextWhenVisible(request.CTC,inputdata.RmtData.requestdata.Ctc);
        browser.sleep(3000);
        keyAction.selectDateFromCalendar(request.Position,inputdata.RmtData.requestdata.date);
        protractorhelper.clickWhenClickable(request.EmploymentType);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(request.Jobtype);
        browser.sleep(3000);
        browser.actions().mouseMove(request.JD).perform();
        protractorhelper.clickWhenClickable(request.JD);
        browser.sleep(3000);
        protractorhelper.clickWhenClickable(loginobj.Dashboard);
        browser.sleep(4000);
        protractorhelper.clickWhenClickable(loginobj.Person);
        browser.sleep(2000);
        protractorhelper.clickWhenClickable(loginobj.Logout);

       
    })
    //var path = require('path');
    //it("upload a file",function(){
      //var fileToUpload = "../requisition-management/UploadFile/Java.txt";
       
//keyAction.Selectedfiles(request.choosefile,inputdata.RmtData.requestdata.file);
       //browser.sleep(2000);
       //absolutePath = path.resolve(fileToUpload);
      // browser.sleep(10000);
        //$("input[type='file']");
        //*[@id="filename"]/text()[1]
       // var spantag =element(by.cssContainingText("No file(s) Selected/text()[0]"));
//browser.actions().mouseMove(spantag).sendKeys(absolutePath).perform();
//spantag.sendKeys(absolutePath);
    //element(by.xpath("//*[@id='filename']")).sendKeys(absolutePath);
        //browser.sleep(5000);
        //element(by.xpath("//span[@class='btn btn-default btn-file']")).click();
        //console.log("upload a file");
       // protractorhelper.clickWhenClickable(request.choosefile);
       // protractorhelper.clickWhenClickable(request.choosefile);
        

    })
