#comment
Feature: Angular Task List
  As a basic user
  I should be able to add and remove tasks from the task list
  So that I can keep track of my tasks

  Scenario: Protractor and Cucumber Test
    Given I go to "https://angularjs.org/"
    When I add "Be Awesome" in the task field
    And I click the add button
    Then I should see my new task in the list
