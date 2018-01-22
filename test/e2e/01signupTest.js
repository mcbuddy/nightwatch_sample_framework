// user signup test no need before and after hook
// since there is no local mock data require to run test

export default {
  'User Sign Up': (client) => {
    //  generate timestamp for unique user email
    var currentTime = new Date;

    // create new email suing timestamp above to get unique user email every time test execute
    // and then assign both newEmail and newPassword to global variable
    var newEmail = client.globals.email.split('@')[0] + '+' + currentTime.getTime().toString() + '@' + client.globals.email.split('@')[1];
    client.globals.tempObj.newEmail = newEmail;

    var newPassword = client.globals.password;
    client.globals.tempObj.newPassword = newPassword;

    const homePage = client.page.homePage();
    const loginPage = client.page.loginPage();

    homePage
      .navigate(client.launch_url)
      .click('@loginBtn');

    loginPage
      .signup(newEmail, newPassword);

    // extract only name from email and validate
    var expected_name = client.globals.email.split('@')[0];
    homePage.expect.element('@loggedName').text.to.contain(expected_name);

    // Validate the current url after signup equal with global variable
    client.url(function(response) {
      this.assert.equal(response.value, client.globals.urlAfterSignUp);
    });

    // find the NYT-S cookie and store to global variable so we can use for next test
    client.getCookies(function(response) {
      var myCookie = []
      for (var i = 0; i < response.value.length; i++) {
        if(response.value[i]['name'] == 'NYT-S') {
          client.globals.tempObj.cookies = response.value[i]['value']
        }
      }
    });

    client.end();
  }
};
