var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
const fs = require('fs');
let flow = protractor.promise.controlFlow();

module.exports = function () {
    this.setDefaultTimeout(400 * 1000);
    
    this.Before(async function () {
        await browser.driver.manage().window().maximize();
    });
    //Given
    this.Given(/^I navigate to automation practice home page$/, async function () {
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            browser.get('http://automationpractice.com');
            return browser.ignoreSynchronization = false;
        });
        await browser.sleep(5000);
    });

    //When
    this.When(/^I open Sign In form$/, async function () {
        await actions.helperActions.clickOnNonAngularEl(pages.homePage.btnSignIn());
    });

    this.When(/^I enter email$/, async function () {
        await browser.sleep(3000);
        const emailNumber = Math.floor(Math.random() * 100000); 
        email = `testemail${emailNumber}@yopmail.com`;
        console.log(`Email used for test ${email}`);
        await actions.helperActions.sendKeysToNonAngularEl(
            pages.homePage.inputFieldEmail(),
            email
        );
    });

    this.When(/^I click on create account$/, async function () {
        await browser.sleep(3000);
        await actions.helperActions.clickOnNonAngularEl(pages.homePage.btnCreateAccount());
    });

    this.When(/^I navigate back to home page$/, async function () {
        await browser.sleep(2000);
        await actions.helperActions.clickOnNonAngularEl(pages.homePage.btnHome());
    });

    this.When(/^I search for Printed dresses$/, async function () {
        await browser.sleep(2000);
        await actions.helperActions.sendKeysToNonAngularEl(pages.homePage.inputFieldSearch(), 'Printed dresses');
        await actions.helperActions.clickOnNonAngularEl(pages.homePage.btnSearch());
    });
    //Then
    this.Then(/^I verify Sign Out button is visible$/, async function () {
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            browser.wait(EC.visibilityOf(pages.homePage.btnSignOut()), 5000);
            return pages.homePage.btnSignOut().getText().then(function(btnText) {
                console.log(`Text on the button is ${btnText}`);
                return expect(btnText).to.equal('Sign out');
            });
        });
        browser.ignoreSynchronization = false;
    });

    this.Then(/^I verify "(popular|best seller)" has 7 products$/, async function (productType) {
        if(productType === "best seller") {
            await actions.helperActions.clickOnNonAngularEl(pages.homePage.btnBestSeller());
        }
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            return pages.homePage.listOfProductItems().then(function (numOfItems) {
                console.log(`Number of ${productType} items is ${numOfItems.length}`);
                return expect(numOfItems.length).to.equal(7);
            });
        });
        browser.ignoreSynchronization = false;
    });

    this.Then(/^I verify correct dresses are shown and save it to text file$/, async function () {
        const path = 'printedDresses.txt';
        try {
            fs.unlinkSync(path);
        } catch(err) {
            console.error(`No file found, nothing to unlink!`);
        }
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            return pages.homePage.listOfProductNames().then(function (items) {
                return items.forEach(item => {
                    return item.getText().then(function(itemName) {
                        fs.appendFile('printedDresses.txt', `${itemName}\n`, function (err) {
                            if (err) throw err;
                            console.log(`Saved ${itemName} to file!`);
                        });
                        return console.log(itemName);
                    });
                });
            });
        });
        browser.ignoreSynchronization = false;
        await browser.sleep(5000);
    });

    this.After(async function () {
        await browser.restart();
    });
}