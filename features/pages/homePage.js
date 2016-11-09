'use strict';
module.exports = {

  angularHomepage: {
    taskList: element(by.model('todoList.todoText')),
    taskButton: element(by.css('[value="add"]')),
    todoList: element.all(by.repeater('todo in todoList.todos'))
  },

  go: function(site) {
    browser.get(site);
  },

  addTask: function(task) {
    var angular = this.angularHomepage;
    angular.taskList.sendKeys(task);
  },

  submitTask: function() {
    var angular = this.angularHomepage;
    angular.taskButton.click();
  }

};
