export default {
  elements: {
    loginBtn: {
      selector: '//*[@id="siteNavMount"]/div/div[1]/div/div[4]/div[1]',
      locateStrategy: 'xpath'
    },
    loggedName: {
      selector: '//*[@id="siteNavMount"]/div/div[1]/div/div[4]/div[1]/span',
      locateStrategy: 'xpath'
    },
    freeTrialText: {
      selector: 'nytc---subscribenavbtn---navLabel'
    },
    recipeBoxNavBar: {
      selector: '#siteNavMount > div > div.nytc---sitenav---siteNav > div > div.nytc---sitenav---siteNavBtns > div.nytc---loginbtn---loginBtn.nytc---loginbtn---registered'
    },
    saveMainRecipe: {
      selector: '//*[@id="content"]/div[1]/article/div[2]/div[1]/div[1]',
      locateStrategy: 'xpath'
    },
    firstTimeSavePopover: {
      selector: '//*[@id="siteNavMount"]/div/div[1]/div/div[4]/div[1]/div[2]/p[1]',
      locateStrategy: 'xpath'
    },
    mainRecipeName: {
      selector: '.top-label > h3'
    },
    mainRecipeImage: {
      selector: '.image-link'
    },
    firstRecipeName: {
      selector: '.nytc---cardbase---name'
    }
  }
}
