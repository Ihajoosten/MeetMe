// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
    "Homepage E2E test": browser => {
      browser
        .url('https://meet-me-cswp.herokuapp.com/')
        .waitForElementVisible("#app")
        .assert.elementPresent(".container")
        .assert.titleContains('meet-me')
        .end();
    },

  "Button 'see all' exists on Homepage": browser => {
    browser
      .url('https://meet-me-cswp.herokuapp.com/')
      .waitForElementVisible("#app")
      .waitForElementVisible('#seeAll')
      .end();
  },

  "Go to see all meeting page": browser => {
    browser
      .url('https://meet-me-cswp.herokuapp.com/')
      .waitForElementVisible("#app")
      .waitForElementVisible('#seeAll')
      .click('#seeAll')
      .end();
  }
};


