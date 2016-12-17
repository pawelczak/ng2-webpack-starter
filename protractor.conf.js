require('ts-node/register');

exports.config = {
    baseUrl: 'http://localhost:3000',

    exclude: [],

    allScriptsTimeout: 110000,
    getPageTimeout: 10000,

    /* CucumberJS: */
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    specs: [
        'test/e2e/**/*.feature'
    ],
    cucumberOpts: {
        require: [
            'test/e2e/**/*.ts'
        ],
        format: 'pretty'
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        // check if works again with angular2
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },

    // seleniumAddress: 'http://10.100.3.33:4444/wd/hub',
    seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar",

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true,
      capabilities: {
          browserName: 'chrome',
          chromeOptions: {
              args: ['--no-sandbox']
          }
      }
};
