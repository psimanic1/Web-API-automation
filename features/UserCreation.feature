#features/UserCreation.feature

Feature: User creation
        This test case will cover
        testing user creation and
        verification that Sign Out button exists

Scenario: User creation
    Given I navigate to automation practice home page
    And I open Sign In form
    When I enter email
    And I click on create account
    And I input all the fields and register account
    Then I verify Sign Out button is visible