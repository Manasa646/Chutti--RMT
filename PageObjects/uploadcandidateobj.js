var properties = require ('../Properties/Rmtlocators.json');
var uploadcandidate = function(){

};
uploadcandidate.prototype = Object.create({},{
    Resource:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.ClickResource));
        }
    },
    assignedrequest:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.uploadcandidate.assignrequest));
        }
    },
    viewdetail:{
        get:function(){

            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.viewdetail));
        }
    },
    list:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.candidatelist));
        }
    },
    add:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.clickadd));
        }
    },
    info:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.generalinfo));
        }
    },
    firstname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.firstname));
        }
    },
    lastname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.lastname));
        }
    },
    email:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.email));
        }
    },
    Primaryno:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.primaryNo));
        }
    },
    currentlocation:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.currentlocation));
        }
    },
    preferedlocation:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Preferredlocation));
        }
    },
    primaryskill:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.primaryskill));
        }
    },
    secondaryskill:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.secondaryskill));
        }
    },
    Noticeperiod:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Noticeperiod));
        }
    },
    select:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.selectnoticeperiod));
        }
    },
    CTC:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.currentCTC));
        }
    },
    Expectedctc:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.expectedCTC));
        }
    },
    Experience:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.ExpSummary));
        }

    },
    Orgname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Organizationname));
        }
    },
    designation:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Designation));
        }
    },
    Experiencefrom:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Expfrom));
            
        }
    },
    ExperienceTo:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Expto));
        }
    },
    AddExp:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.AddExp));
        }
    },
    EducationalQualification:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.EducationalQualification));
        }
    },
    university:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.University));
        }
    },
    Qualification:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Qualification));
        }
    },
    yearofpassing:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Yearofpassing));
        }
    },
    selectyear:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.selectyear));

        }
    },
    Add:{
        get:function(){
            
                return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Add));
            }
        },
    Certifications:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Certifications));
        }
    },
    certificationname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.certificationname));
        }
    },
    Institutionname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.Institutionname));
        }
    },
    certifiedyear:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.certifiedyear));
        }
    },
    selectcertifiedyear:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.selectcertifiedyear));
        }
    },
    AddCertification:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.uploadcandidate.AddCertification));
        }
    },
    submit:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.uploadcandidate.submit));
        }
    }
    




});

module.exports = new uploadcandidate();