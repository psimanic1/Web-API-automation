var homePageActions = require('./homePageActions.js');
var helperActions = require('./helperActions.js');

var actions = function () {
    this.homePageActions = new homePageActions();
    this.helperActions = new helperActions();
}

module.exports = actions;