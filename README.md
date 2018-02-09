# Nightwatch Sample Testing framework

## Requirements
First thing you need to do is to install [Node.js](https://nodejs.org/en/) if you don’t yet have it in your local machine command-line terminal. You can find the installation instructions on the Node.js project page. Once you have node installed, you can take advantage of it’s package manager called `npm`.

You will also `need`:
- [Chrome Browser](https://www.google.com/chrome/)
- [Java v8](https://java.com/en/download/)
- [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

As they are all required for `Selenium` and `Nightwatch` to work properly.

## Installation

Before you will be able to run any tests you should install proper package in it's root directory. To do so just follow examples below:

```sh
$ cd nightwatch_sample_framework
$ npm install
$ npm run e2e-setup
```
Now you have installed all dependancies using `npm` and executed `node` script that installs selenium server, chromedriver, and make sure the location of these are correct, please check under `nightwatch.json` and under `cli_args` paramete.
NOTE: For this assignment test this project only run and tested using chromedriver at the moment.

## Framework and directory
This framework build with page-object concept in mind and all the page object can be found and reusable in the `pages` directory. As well the directory `test/e2e` design for only testing steps and feature, all the fail and/or error during test will be recorder and stored at `reports` directory.
- All necessary node package stored at `package.json`
- All nightwatch.js configuration stored at `nightwatch.json` and load using `nightwatch.conf.js`

### Notes on Node Version

Currently designed to run on v7.10.1

## How to run the test

To run all the test suites just type `npm test` in the shell command-line/terminal

To run one particular the test,  type `nightwatch test/e2e/<fileName>.js ` in the shell command-line/terminal

Question and or need more information please contact me (budisugianto777@gmail.com)

More feature test will add upon request.
