var properties = require ('../Properties/Rmtlocators.json');
var roleobj = function(){

};
roleobj.prototype = Object.create({},{

    Settings:{
        get:function(){
    return element(by.xpath(properties.RequisitionToolLocators.AddRoles.clicksettings));

        }

    },
    Roles:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.clickroles));
        }
    },
    add:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.clickadd));
        }
    },
    Rolename:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.rolename));
        }
    },
    Description:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.desc));
        }
    },
    Permissions:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.permission));
        }
    },
    CheckRR:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.Checkresourcerequest));
        }
    },
    CheckRL:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.checkrequisitionlist));

        }
    },
    Submit:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AddRoles.submit));
        }
    }


  
});
module.exports = new roleobj();
