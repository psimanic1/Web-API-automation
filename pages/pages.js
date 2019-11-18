var homePage = require('./homePage.js');
var registrationFormPage = require('./registrationFormPage.js');

var pages = function () {
    this.homePage = new homePage();
    this.registrationFormPage = new registrationFormPage();
}

module.exports = pages;