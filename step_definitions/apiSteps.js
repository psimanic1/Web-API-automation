var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
let flow = protractor.promise.controlFlow();

module.exports = function () {

    //When
    this.When(/^I create API call to "(list users|register unsuccessful|delete|delayed response)"$/, async function (apiCall) {
        switch (apiCall) {
            case 'list users':
                await actions.homePageActions.listUsersAPICall();
                await browser.sleep(5000);
                return;
            case 'register unsuccessful':
                await actions.homePageActions.registerUnsuccessfulAPICall();
                await browser.sleep(5000);
                return;
            case 'delete':
                await actions.homePageActions.deleteUserAPICall();
                await browser.sleep(5000);
                return;
            case 'delayed response':
                await actions.homePageActions.delayedResponseAPICall();
                await browser.sleep(10000);
                return;
        }
    });

    //Then
    this.Then(/^I verify status code is "(200|204|400)" and status message is "(OK|Bad Request|No Content)"$/, async function (code, message) {
        chai.assert.equal(statusCode, code, `Status code from API call: ${statusCode} is equal to expected status code: ${code}`); 
        return chai.assert.equal(statusMessage, message, `Status message from API call: ${statusMessage} is equal to expected status message: ${message}`);
    });
}