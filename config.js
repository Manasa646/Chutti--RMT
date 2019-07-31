exports.config={

    framework: 'jasmine',
   
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //getPageTimeout: 30000,
    //allScriptsTimeout: 30000,
   // specs: ['RegressionTestcases/Adddeptlead.js'],
  
    suites: {
       
smoke:[

         'SmokeTestcases/Adminlogin.js',
         'SmokeTestcases/DeptLeadlogin.js',
         'SmokeTestcases/HiringManagerlogin.js',
         'SmokeTestcases/HRlogin.js',
         'SmokeTestcases/recruiterlogin.js',
         'SmokeTestcases/raiserequisitionrequest.js',
         'SmokeTestcases/RRRwithexisting.js'

    ],
   
    sanity:[

    'SanityTestcases/Activelist.js',
    'SanityTestcases/Inactivelist.js',
    'SanityTestcases/Notsuitable.js',
    'SanityTestcases/RaiseRR Approval.js',
    'SanityTestcases/RaiseRR OnHold.js',
    'SanityTestcases/ShortlistcandidatebyHM.js',
    'SanityTestcases/sourcelist.js',
    'SanityTestcases/Uploadcandidate.js'
    ],
    
   Regression: [
        'RegressionTestcases/Adddeptlead.js',
        'RegressionTestcases/Assignrecruiter.js',
        'RegressionTestcases/DepartmentLeadrole.js',
        'RegressionTestcases/HiringManagerrole.js',
        'RegressionTestcases/HRLead.js',
        'RegressionTestcases/updatecandidatestatus.js'
   ],
       
      },     
   
    capabilities: {
        browserName: 'chrome',
       //chromeOptions: {
            //args: [
                //"--headless",
               // "--disable-gpu"
                //"--window-size=1024,768"
            //]
            
       // chromeOptions: {
                    //'args': ['disable-infobars']
              //  }
            
        
    },
    chromeOnly: true,
    directConnect: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 190000,
   },
  
    onPrepare: function()
    {
       browser.ignoreSynchronization=false;
       browser.waitForAngularEnabled(false);
       browser.manage().window().setSize(1600, 1000);
       var AllureReporter = require('jasmine-allure-reporter');
       jasmine.getEnv().addReporter(new AllureReporter({
           resultsDir: 'allure-results'
       }));
       jasmine.getEnv().afterEach(function(done){
           browser.takeScreenshot().then(function(png){
               allure.createAttachment('Screenshot',function(){
                   return new Buffer(png,'base64')
               }, 'image/png') ();
               done();
               })
            });

            //var MailListener = require("mail-listener2");
            //var mailListener = new MailListener ({
                //username:"testmanager@demo.cloudnowtech.com",
                //password:"11test11",
                //host:"183.83.48.101",
                //port: 3000,
                //tls:true,
                //tlsOptions:{rejectUnauthorised:false },
                //mailbox: "INBOX",
                //searchFilter: ["UNSEEN" , "FLAGGED"],
                //markseen:true,
                //fetchUnreadOnstart: true,
                //mailParserOptions :{streamattachments:true},
                //attachments: true,
                //attachmentOptions:{directory :"attachments/"}

            //});
            //mailListener.start();
            //mailListener.on("server:connected",function(){
              //  console.log("Mail Listener Intialized");
            //});
            //mailListener.stop();
           //mailListener.on("server:disconnected",function(){
             //  console.log("IMAP Disconnected")
           //});
         
           //global.mailListener = mailListener;
          
            
    //},
//params :{
     //getLastEmail : function() {
       // var deferred = protractor.promise.defer();
        //console.log("Waiting for an email...");
    
        //mailListener.on("mail", function(mail){
          //  deferred.fulfill(mail);
        //});
        //return deferred.promise;
    //}

}
   
}

