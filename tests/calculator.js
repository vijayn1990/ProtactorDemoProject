let homePage= require('../pages/homePage');

describe('demo calculator tests', function(){
    it('addition test', function(){
        
        //to launch and navigate to the URL
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homePage.get('https://juliemr.github.io/protractor-demo/');
        
        //To slow execution
        browser.sleep(2000);
        homePage.enterFirstNumber('2');
        //To slow execution
        browser.sleep(2000);

        //element(by.model('second')).sendKeys('5');
        homePage.secondNumber('4');
        //To slow execution
        browser.sleep(2000);
        //element(by.css('[ng-click="doAddition()"]')).click();
        homePage.clickGo();
        browser.sleep(2000);
        //let res= element(by.cssContainingText('.ng-binding','7'));
        //console.log(expect(res.getText()).toEqual('7'));
        homePage.verifyResult('6');
        browser.sleep(2000);
    });

});
