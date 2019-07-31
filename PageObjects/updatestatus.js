var properties = require ('../Properties/Rmtlocators.json');

var updatestatus = function(){

};
updatestatus.prototype = Object.create({},{

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
    clickview:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.clickview));
        }
    },
    candidatelist:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.candidatelist));
        }
    },
    selectrecords:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.selectrecords));
        }
    },
    ClickActive:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.Active));
        }
    },
    Editinfo:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.Editinfo));
        }
    },
    generalinfo:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.generalinfo));
        }
    },
    selectstatus:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.selectstatus));
        }
    },
    statusasqualifiedfornextround:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.updatestatus));
        }
    },
    submit:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.updatestatus.submit));
        }
    }

});
module.exports = new updatestatus();