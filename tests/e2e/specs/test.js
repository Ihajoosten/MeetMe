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

  "Test if button 'see all' exists on Homepage": browser => {
    browser
      .url('https://meet-me-cswp.herokuapp.com/')
      .waitForElementVisible("#app")
      .assert.visible('button[id=#seeAll]')
      .end();
  }
};
