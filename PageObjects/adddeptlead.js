var properties = require ('../Properties/Rmtlocators.json');
var selectlead = function(){

};
selectlead.prototype = Object.create({},{

    Settings:{
        get:function(){
    return element(by.linkText(properties.RequisitionToolLocators.AddDeptLead.settings));

        }

    },
    clickDept:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddDeptLead.Departments));
        }
    },
    Edit:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddDeptLead.edit));
        }
    },
    Adddept:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddDeptLead.Deptlead));
        }
    },
    selectlead:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddDeptLead.selectlead));
        }

        
    },
    submit:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddDeptLead.submit));
        }
    }

});
module.exports = new selectlead();