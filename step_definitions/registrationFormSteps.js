var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
let flow = protractor.promise.controlFlow();

module.exports = function () {

    this.When(/^I input all the fields and register account$/, async function () {
        await actions.helperActions.createUserAccount();
    });

    this.When(/^I do not input "(state|first name|last name|address|zip code|mobile phone|password|city)" required field in "(user info|address)" part and click on register account$/, async function (field, fieldPart) {
        await actions.helperActions.inputUserAccountWithoutField(field, fieldPart);
        await actions.helperActions.clickOnNonAngularEl(pages.registrationFormPage.btnRegister());
    });

    //Then
    this.Then(/^I verify Sign Out button is not visible$/, async function () {
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            return pages.homePage.btnSignOut().getText().then(function(btnText) {
                console.log(`Text on the button is ${btnText}`);
                return expect(btnText).to.not.equal('Sign out');
            });
        });
        browser.ignoreSynchronization = false;
    })
}