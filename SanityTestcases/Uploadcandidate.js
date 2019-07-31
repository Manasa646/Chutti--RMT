var details = require('../PageObjects/uploadcandidateobj.js')
var protractorhelper = require('protractor-helper');
var inputdata = require ('../InputData/Rmtdata');
var KeyActions = require('../common/KeyActions.js');
var loginobj = require ('../PageObjects/loginobjects');
let properties = require('../Properties/Rmtlocators.json');

describe("Navigate to RMT URL" , function(){
    //require('../Testcases/recruiterlogin.js')
    it('Login as Recruiter',function(){
        browser.get(properties.RequisitionToolLocators.URL);
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Username,inputdata.RmtData.recruiter.username);
        protractorhelper.fillFieldWithTextWhenVisible(loginobj.Password,inputdata.RmtData.recruiter.password);
        protractorhelper.clickWhenClickable(loginobj.Signin);
        browser.sleep(2000);
    })

it("Upload a candidate",function(){
protractorhelper.clickWhenClickable(details.Resource);
protractorhelper.clickWhenClickable(details.assignedrequest);
protractorhelper.clickWhenClickable(details.viewdetail);
protractorhelper.clickWhenClickable(details.list);
browser.sleep(2000);
protractorhelper.clickWhenClickable(details.add);
protractorhelper.clickWhenClickable(details.info);
protractorhelper.fillFieldWithTextWhenVisible(details.firstname,inputdata.RmtData.candidateinfo.firstname);
protractorhelper.fillFieldWithTextWhenVisible(details.lastname,inputdata.RmtData.candidateinfo.lastname);
protractorhelper.fillFieldWithTextWhenVisible(details.email,inputdata.RmtData.candidateinfo.email);
protractorhelper.fillFieldWithTextWhenVisible(details.Primaryno,inputdata.RmtData.candidateinfo.primaryno);
 protractorhelper.fillFieldWithTextWhenVisible(details.currentlocation,inputdata.RmtData.candidateinfo.currentlocation);
 protractorhelper.fillFieldWithTextWhenVisible(details.preferedlocation,inputdata.RmtData.candidateinfo.preferedlocation);
 protractorhelper.fillFieldWithTextWhenVisible(details.primaryskill,inputdata.RmtData.candidateinfo.primaryskill);
 protractorhelper.fillFieldWithTextWhenVisible(details.secondaryskill,inputdata.RmtData.candidateinfo.secondaryskill);
 browser.actions().mouseMove(details.Noticeperiod).perform();
 protractorhelper.clickWhenClickable(details.Noticeperiod);
 protractorhelper.clickWhenClickable(details.select);
 protractorhelper.fillFieldWithTextWhenVisible(details.CTC,inputdata.RmtData.candidateinfo.currentctc);
 protractorhelper.fillFieldWithTextWhenVisible(details.Expectedctc,inputdata.RmtData.candidateinfo.expectedctc);
 browser.actions().mouseMove(details.Experience).perform();
 protractorhelper.clickWhenClickable(details.Experience);
 protractorhelper.fillFieldWithTextWhenVisible(details.Orgname,inputdata.RmtData.candidateinfo.orgname);
 protractorhelper.fillFieldWithTextWhenVisible(details.designation,inputdata.RmtData.candidateinfo.Designation);
 browser.sleep(2000);
KeyActions.selectDateFromCalendar(details.Experiencefrom,inputdata.RmtData.candidateinfo.Expfrom);
browser.sleep(2000);
KeyActions.selectToDateFromCalendar(details.ExperienceTo,inputdata.RmtData.candidateinfo.ExpTo);
protractorhelper.clickWhenClickable(details.AddExp);
 protractorhelper.clickWhenClickable(details.EducationalQualification);
 protractorhelper.fillFieldWithTextWhenVisible(details.university,inputdata.RmtData.candidateinfo.institution);
 protractorhelper.fillFieldWithTextWhenVisible(details.Qualification,inputdata.RmtData.candidateinfo.Degree);
 protractorhelper.clickWhenClickable(details.yearofpassing);
 protractorhelper.clickWhenClickable(details.selectyear);
 protractorhelper.clickWhenClickable(details.Add);
 protractorhelper.clickWhenClickable(details.Certifications);
 protractorhelper.fillFieldWithTextWhenVisible(details.certificationname,inputdata.RmtData.candidateinfo.name);
 protractorhelper.fillFieldWithTextWhenVisible(details.Institutionname,inputdata.RmtData.candidateinfo.nameoftheinstituion);
 protractorhelper.clickWhenClickable(details.certifiedyear);
 protractorhelper.clickWhenClickable(details.selectcertifiedyear);
 protractorhelper.clickWhenClickable(details.AddCertification);
 protractorhelper.clickWhenClickable(details.submit);
 browser.sleep(5000);
 protractorhelper.clickWhenClickable(loginobj.Dashboard);
 browser.sleep(8000);
 protractorhelper.clickWhenClickable(loginobj.Person);
 browser.sleep(2000);
 protractorhelper.clickWhenClickable(loginobj.Logout);
 browser.sleep(2000);
    })
})
