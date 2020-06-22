// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .end()
  },
  'checkpaginavisable': browser => {
    browser
      .url("http://localhost:8080/login")
      .waitForElementVisible('#app')
      .end()
  },

  'checkpaginavisable2': browser => {
    browser
      .url("http://localhost:8080/about")
      .waitForElementVisible('#app')
      .end()
  },
  'checkpaginavisable3': browser => {
    browser
      .url("http://localhost:8080/register")
      .waitForElementVisible('#app')
      .end()
  },
  'checkpaginavisable4': browser => {
    browser
      .url("http://localhost:8080/products")
      .waitForElementVisible('#app')
      .end()
  },

}