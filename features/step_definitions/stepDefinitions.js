// features/step_definitions/stepDefinitions.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var angularPage = require('../pages/homePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given('I go to {stringInDoubleQuotes}', function (site, next) {
    angularPage.go(site);
    expect(browser.getTitle()).to.eventually.equal('AngularJS — Superheroic JavaScript MVW Framework').and.notify(next);
  });
       
  When('I add {stringInDoubleQuotes} in the task field', function (task, next) {
    angularPage.addTask(task);
    next();
  });
  
  When('I click the add button', function (next) {
    angularPage.submitTask();
    next();
  });
       
  Then('I should see my new task in the list', function (next) {
    var todoList = angularPage.angularHomepage.todoList;
    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome').and.notify(next);
  });
});
