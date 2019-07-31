var properties = require ('../Properties/Rmtlocators.json');

var status = function(){

};
status.prototype = Object.create({},{

    Resource:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.ClickResource));
        }
    },
    list:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.recordlist.clickRequisitionlist));
        }
    },
    viewdetail:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Notshortlisted.viewdetail));
        }
    },
    candidatelist:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Notshortlisted.candidatelist));
        }
    },
    clickaction:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Notshortlisted.actions));
        }
    },
    AddRemarks:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Notshortlisted.Remarks));
        }
    },
    Notsuitable:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.Notshortlisted.notsuitable));
        }
    }
});
    module.exports = new status();