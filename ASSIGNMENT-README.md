Please see the following challenge which is design to assess a candidate on various skills such as development skills, test framework design principles, documentation, etc. 

## Project Description

You have to automate following given user scenarios using Nodejs selenium framework. It can be either using nightwatch.js or webdriver.io. 

### User scenarios

Base URL: https://cooking.nytimes.com/

**1) Verify Creating New User**
  * Navigate to base url & click 'Login' button located on top left navigation bar
  * In login modal, click 'Sign up'
  * Fill in all the details and hit 'Create Account'
  * Verify your username appears on top right
  * Verify home page is loaded (please verify bare minimum DOM elements)

**2) Verify Saving Recipe**
* Login using previously created user credentials 
* Save any recipe from homepage 
* Click on 'Your Recipe Box' on top right navigation bar
* Click on 'Saved Recipes' located on left vertical navigation bar 
* Verify the recipe saved from homepage appears here 

**3) Verify Unsaving Recipe (Optional: Bonus point if you do it)**
* Save recipe by following (Verify Saving Recipe) user scenario mentioned above
* Call API to unsave recipe which was recently saved by following above point
* Verify recipe is unsaved and no longer appears in recipe box

**Hint:**
* API to unsave can be traced by networking tool
* API will require passing cookie while making request, cookie name is `NYT-S`
* API will require passing user id in api call for e.g `cooking.nytimes.com/api/v2/users/$user_id/`
* User id can be obtained by passing `window.initState.user.id` in browser console, it will be six digit number such as `82301438`

## Submission instructions

1) Extract the tar.gz file given to you, folder will contain a git repo (.git). 
2) You should branch from master and return the zip file including the .git directory with your branch. 
3) Please have your branch name as firstName-lastName-leadChallenge (e.g john-wright-leadChallenge). 

## Evaluation

Following criteria will be used to grade your submission. 

1. Working solution is submitted by following given guidelines. 
2. Along with working code, we care about the quality of the code which will be heavily assessed i.e comments, structure, clear variables names, avoiding magic numbers, etc.   
3. The solution is implemented using Page object pattern and use optimized CSS selector strategy. 
4. Bonus points if user scenario 3 is implemented.
5. More bonus points if the code is written in es6 standard. 
