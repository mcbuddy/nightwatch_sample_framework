// Basic loginTest for easier to use another test file if needed
export default {
  'User Login': (client) => {
    const homePage = client.page.homePage();
    const loginPage = client.page.loginPage();

    homePage
      .navigate(client.launch_url)
      .click('@loginBtn');

    loginPage
      .login(client.globals.email, client.globals.password)

    var expected_name = client.globals.email.substring(0, client.globals.email.lastIndexOf("@"));
    homePage.expect.element('@loggedName').text.to.contain(expected_name);

    client.end();
  }
};
