const loginCommands = {
  login(email, password) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      .click('@submitButton')
  }
};

const signupCommands = {
  signup(email, password) {
    return this
    .click('@signupLink')
    .waitForElementVisible('@signupEmailInput')
    .setValue('@signupEmailInput', email)
    .setValue('@signupPasswordInput', password)
    .setValue('@signupPasswordComfirmInput', password)
    .click('@submitButton')
  }
};

export default {
  commands: [loginCommands, signupCommands],
  elements: {
    loginModal:{
      selector: 'nytc---largepicturemodal---contentBody'
    },
    emailInput: {
      selector: 'input[name=userid]'
    },
    passwordInput: {
      selector: 'input[name=password]'
    },
    submitButton: {
      selector: '.nytc---regimodal---buttonContainer > span'
    },
    signupLink: {
      selector: '#app-container > div > div.nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG > div > div > div > div.nytc---largepicturemodal---sideContainer > div > div > div.nytc---regimodal---modalHeader > p > span'
    },
    signupEmailInput:{
      selector: 'input[name=email_address]'
    },
    signupPasswordInput: {
      selector: 'input[name=password1]'
    },
    signupPasswordComfirmInput: {
      selector: 'input[name=password2]'
    }
  }
};
