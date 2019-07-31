const EC = protractor.ExpectedConditions;
const TIMEOUT_MS = 70000;


const selectDateFromCalendar = function (pageelement, textToEnter) {
    browser.sleep(5000);
   // this.clickWhenClickable(pageelement);
   pageelement.click();
    var Date = textToEnter;
    var splitdate = Date.split("/");
    month = splitdate[0].substring(0,2);
        day = splitdate[1].substring(0,2);
      year = splitdate[2];
    if (month == 01) { month = "JAN" }
    else if (month == 02) { month = "FEB" }
    else if (month == 03) { month = "MAR" }
    else if (month == 04) { month = "APR" }
    else if (month == 05) { month = "MAY" }
    else if (month == 06) { month = "JUN" }
    else if (month == 07) { month = "JUL" }
    else if (month == 08) { month = "AUG" }
    else if (month == 09) { month = "SEP" }
    else if (month == 10) { month = "OCT" }
    else if (month == 11) { month = "NOV" }
    else if (month == 12) { month = "DEC" }
     element(by.xpath("//button[@class='mat-calendar-period-button mat-button']")).click();
     element(by.xpath("//td/div[contains(.,"+year+")]")).click();
     element(by.xpath("//td/div[contains(.,'"+month+"')]")).click();
     element(by.xpath("//td/div[contains(text(),"+day+")]")).click();
};

const selectToDateFromCalendar = function (pageelement,textToEnter) {
    browser.sleep(5000);
    pageelement.click();
    var Date = textToEnter;
    var splitdate = Date.split("/");
    month = splitdate[0].substring(0,2);
        day = splitdate[1].substring(0,2);
      year = splitdate[2];
    if (month == 01) { month = "JAN" }
    else if (month == 02) { month = "FEB" }
    else if (month == 03) { month = "MAR" }
    else if (month == 04) { month = "APR" }
    else if (month == 05) { month = "MAY" }
    else if (month == 06) { month = "JUN" }
    else if (month == 07) { month = "JUL" }
    else if (month == 08) { month = "AUG" }
    else if (month == 09) { month = "SEP" }
    else if (month == 10) { month = "OCT" }
    else if (month == 11) { month = "NOV" }
    else if (month == 12) { month = "DEC" }
     element(by.xpath("//button[@class='mat-calendar-period-button mat-button']")).click();
     element(by.xpath("//td/div[contains(.,"+year+")]")).click();
     element(by.xpath("//td/div[contains(.,'"+month+"')]")).click();
     element(by.xpath("//td/div[contains(text(),"+day+")]")).click();
};
const Selectedfiles = function(pageelement,file){
    browser.wait(EC.visibilityOf(pageelement),TIMEOUT_MS);
    var path = require('path');
    var filepath = file;
    var fpath = path.resolve(filepath);
    pageelement.sendKeys(fpath);
}
module.exports = {
    selectDateFromCalendar,
    selectToDateFromCalendar,
    Selectedfiles
};