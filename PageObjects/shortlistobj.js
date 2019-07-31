
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
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.clickRequisitionlist));
        }
    },
    viewdetail:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Shortlistcandidate.viewdetail));
        }
    },
    candidatelist:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Shortlistcandidate.candidatelist));
        }
    },
   
    clickaction:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Shortlistcandidate.sourceshortlist));
        }
    },
    shortlist:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.Shortlistcandidate.shortlist));
        }
    },
    

});
module.exports = new status();
