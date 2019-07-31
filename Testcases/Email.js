
  //var maillistener = new MailListener 
  var MailListener = require("mail-listener2");
  var mailListener = new MailListener ({...
describe("Sample test case", function () {

    beforeEach(function () {
        browser.get("https://www.gmail.com");
        browser.waitForAngular();
    });

    it("Login", function () {
       //getLastEmail.getLastEmail();
        element(by.id("identifierId")).sendKeys("testmanager@demo.cloudnowtech.com");
        element(by.id("identifierNext")).click();
        browser.sleep(2000);
        element(by.xpath("//input[@type='password']")).sendKeys("11test11");
        element(by.id("passwordNext")).click();
//browser.sleep(50000);
        browser.wait(browser.params.getLastEmail(mailListener),3000).then(function (mail) {
      console.log("Read first email")  
expect(mail.subject).toEqual("Chutti");
expect(mail.headers.to).toEqual("noreply@chutti.work");
         });
    });
}),
});
