var properties = require ('../Properties/Rmtlocators.json');
var recordlist = function(){

};

recordlist.prototype = Object.create({},{
Resource:{
    get:function(){
        return element(by.id(properties.RequisitionToolLocators.Raiserequest.ClickResource));
    }
},
Candidatelist:{
    get:function(){
        return element(by.id(properties.RequisitionToolLocators.recordlist.candidatelist));
    }
},
Dropdownlist:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.recordlist.clickrecords));
    }
},
sourcedlist:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.recordlist.sourced));
    }
},

active:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.recordlist.active));
    }
},
Inactive:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.recordlist.inactive));
    }
},
search:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.recordlist.search));
    }
},
    });

module.exports = new recordlist();