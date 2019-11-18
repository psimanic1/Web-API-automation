exports.config = {
  getPageTimeout: 500000,
  allPagesTimeout: 5000000,
  allScriptsTimeout: 30000,
  framework: 'custom',
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: 'features/*.feature',
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions' : {
      'args': ['disable-infobars', '--disable-features=NetworkService'],
    },
    shardTestFiles: true,
    maxInstances: 1
  },
  onPrepare: function (config, capabilities) {
    var Actions = require('./actions/actions.js');
    var Pages = require('./pages/pages.js');
    global.actions = new Actions();
    global.pages = new Pages();
    global.email = null;
    global.statusCode = null;
    global.statusMessage = null;
  },
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:8000',
  cucumberOpts: {
    require: ['step_definitions/*'],
    tags: false,
    format: 'pretty',
    strict: true,
    showColors: true,
    profile: false,
    'no-source': true,
  },
};