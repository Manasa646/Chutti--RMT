var properties = require ('../Properties/Rmtlocators.json');
var assign = function(){

};
assign.prototype = Object.create({},{
    Resource:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.ClickResource));
        }
    },
    assignrequest:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Assignrecruiter.request));
        }
    },
    Assignrecruiter:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Assignrecruiter.assignrecruiter));
        }
    },
    selectrecruiter:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Assignrecruiter.recruiter));
        }
    },
    Recruiter:{
      get:function(){
          return element(by.xpath(properties.RequisitionToolLocators.Assignrecruiter.selectrecruiter));
      }
    },
    assign:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Assignrecruiter.Assign));
        }
    },
    clickassign:{
        get:function(){
            return element(by.buttonText(properties.RequisitionToolLocators.Assignrecruiter.clickassign));
        }
    }
   
});
module.exports = new assign();