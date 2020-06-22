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


  'logintestuser': browser => {
    const username = "test@test.com";
    //  const password = "test123";
    const query = '[id="textFieldUsername"]';

    browser
      .url("http://localhost:8080/#/login")
      .waitForElementVisible('#textFieldUsername')
      .setValue(query, username)
      .saveScreenshot('screenshots/loginusername.png')
  },
  'logintestpassword': browser => {
    const password = "test123";
    //  const password = "test123";
    const query = '[id="textFieldPassword"]';

    browser
      .url("http://localhost:8080/#/login")
      .waitForElementVisible('#textFieldPassword')
      .setValue(query, password)
      .saveScreenshot('screenshots/loginpass.png')
  },
  'registeruser': browser => {
    const username = "test@test.com";
    //  const password = "test123";
    const query = '[id="textFieldEmail"]';

    browser
      .url("http://localhost:8080/#/register")
      .waitForElementVisible('#textFieldEmail')
      .setValue(query, username)
      .saveScreenshot('screenshots/registerusername.png')
  },
  'registerpassword': browser => {
    const password = "test123";
    //  const password = "test123";
    const query = '[id="textFieldPassword"]';

    browser
      .url("http://localhost:8080/#/register")
      .waitForElementVisible('#textFieldPassword')
      .setValue(query, password)
      .saveScreenshot('screenshots/registerpassword.png')
  },


  'loginboth': browser => {
    const username = "user"
    const password = "test";
    //  const password = "test123";
    const query1 = '[id="textFieldUsername"]';
    const query2 = '[id="textFieldPassword"]';

    browser
      .url("http://localhost:8080/#/login")
      .waitForElementVisible('#textFieldUsername')
      .setValue(query1, username)
      .setValue(query2, password)
      .saveScreenshot('screenshots/loginboth.png')
  },
  'registerboth': browser => {
    const username = "newUser@test.com"
    const password = "test123!";
    //  const password = "test123";
    const query1 = '[id="textFieldEmail"]';
    const query2 = '[id="textFieldPassword"]';

    browser
      .url("http://localhost:8080/#/register")
      .waitForElementVisible('#textFieldEmail')
      .setValue(query1, username)
      .setValue(query2, password)
      .saveScreenshot('screenshots/registerboth.png')
  }
}