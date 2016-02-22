/**
 * Created by Nimin on 2/21/16.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['TestAngularJSSpec.js'],


    // set to "custom" instead of cucumber.
    framework: 'jasmine2'

    /*,

    // path relative to the current config file
    frameworkPath: 'node_modules/protractor-cucumber-framework',

    // relevant cucumber command line options
    cucumberOpts: {
        format: "summary"
    },


onPrepare: function() {
        browser.driver.manage().window().maximize();
       // return browser.get('http://www.jetblue.com/'); // Added return statement here
    },

    mochaOpts: {
        reporter: "spec",
        slow: 1000
    }*/
};


