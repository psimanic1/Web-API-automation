#features/NumberOfProducts.feature

Feature: Number of products
        This test case will cover
        testing user creation and
        verification that number of two different product groups
        is correct

Scenario Outline: Number of products
    Given I navigate to automation practice home page
    And I open Sign In form
    When I enter email
    And I click on create account
    And I input all the fields and register account
    And I navigate back to home page
    Then I verify "<productType>" has 7 products

Examples:
 |productType|
 |popular    |
 |best seller|