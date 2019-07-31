var properties = require ('../Properties/Rmtlocators.json');
var RRobj = function(){

};
RRobj.prototype = Object.create({},{
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
    Add:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.clickadd));
        }

    },
    Jobtitle:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.jobtitle));
        }
    },
    projectname:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Projectname));
        }
    },
    Exp:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Experience));
        }
    },
    Primaryskill:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Primaryskill));
        }
    },
    Qualification:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Qualification));
            
        }
    },
    Degree:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.Degree));
        }
    },
    position:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Noofpositions));
        }
    },
    Gender:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Gender));
        }
    },
    selectgender:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.selectgender));
        }
    },
    age:{
        get:function(){
            return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.AgeGroup));
        }
    },
    selectage:{
        get:function(){
            return element(by.id(properties.RequisitionToolLocators.Raiserequest.selectage));
        }
    },
CTC:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.ApproxCTC));
    }
},
Position:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.position));
    }
},
senddate:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.senddate));
       
    }
},

EmploymentType:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.EmploymentType));
    }
},
Jobtype:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.JobType));
    }
},
JD:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.JD));
    }
},
choosefile:{
    get:function(){
        return element(by.className(properties.RequisitionToolLocators.Raiserequest.choosefile));
    }
},
ExistingJD:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Existingjob));
    }
},
Selectexisting:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.selectjobfromexisting));
    }
},
JobRole:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.Jobrole));
    }
},
submit:{
    get:function(){
        return element(by.xpath(properties.RequisitionToolLocators.Raiserequest.submit));
    }
}



});
module.exports = new RRobj();