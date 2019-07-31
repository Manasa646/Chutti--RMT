var properties = require ('../Properties/Rmtlocators.json');
var Hrlead = function(){

};
 Hrlead.prototype = Object.create({},{

    CheckAR:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.HRRole.CheckassignRequest));
        }
    },
    Submit:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.HRRole.Btnsubmit));
        }
    }
    

 });
 module.exports = new Hrlead();