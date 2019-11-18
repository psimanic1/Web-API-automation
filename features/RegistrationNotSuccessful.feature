#features/RegistrationNotSuccessful.feature

Feature: Registration not successful
        This test case will cover
        testing user creation and
        verification that Sign Out button does not exist
        if required fields are not populated

Scenario Outline: Registration not successful
    Given I navigate to automation practice home page
    And I open Sign In form
    When I enter email
    And I click on create account
    And I do not input "<field>" required field in "<field part>" part and click on register account
    Then I verify Sign Out button is not visible

Examples:
 |field        |field part|
 |state        |address   |
 |first name   |user info |
 |last name    |user info |
 |password     |user info |
 |zip code     |address   |
 |address      |address   |
 |city         |address   |
 |mobile phone |address   |
