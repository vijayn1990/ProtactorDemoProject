let homePage=function(){

    let firstNumTB= element(by.model('first'));
    let secondNumTB= element(by.model('second'));
    let goBtn= element(by.css('[ng-click="doAddition()"]'));

    this.get= function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstNumTB.sendKeys(firstNo);
    }

    this.secondNumber=  function(secondNo){
        secondNumTB.sendKeys(secondNo);
    }

    this.clickGo= function(){
        goBtn.click();
    }

    this.verifyResult= function(result){
        let res= element(by.cssContainingText('.ng-binding',result));
        expect(res.getText()).toEqual(result);
    }
    
}

module.exports= new homePage();