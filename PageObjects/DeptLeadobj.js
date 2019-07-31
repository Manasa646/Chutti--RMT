var properties = require ('../Properties/Rmtlocators.json');
var approveobj = function(){

};
approveobj.prototype = Object.create({},{

    Resource:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.ClickResource));
        }
    },

    resourcerequest:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Approve.clickresourcerequest));
        }
    },
    viewdetail:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Approve.viewdetail));
        }
    },
    approval:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.Approve.Approval));
        }
    },
    remarks:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.OnHold.remarks));
        }
    },
    hold:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.OnHold.clickonhold));
        }
    }

});
module.exports = new approveobj();