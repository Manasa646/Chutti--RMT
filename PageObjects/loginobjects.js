var properties = require ('../Properties/Rmtlocators.json');
//var protractorhelper = require ('protractor-helper');
var LoginObj = function(){

};
LoginObj.prototype = Object.create({},{

    Username:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.AdminLogin.username));
        }
    },
    Password:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AdminLogin.password));
        }
    },
    Signin:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AdminLogin.signin));
        }
    },
    Person:{
        get:function(){
            return element(by.linkText(properties.RequisitionToolLocators.AdminLogin.clickperson));
        }
    },
    Logout:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.AdminLogin.logout));
        }
    },
    Dashboard:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.AdminLogin.Dashboard));
        }
    }

   
});
module.exports = new LoginObj();