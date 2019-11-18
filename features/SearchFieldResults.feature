#features/SearchFieldResults.feature

Feature: Search field results
        This test case will cover
        testing user creation and working of 
        search bar on home page and creating text doc with 
        search results

Scenario: Search field results
    Given I navigate to automation practice home page
    When I search for Printed dresses
    Then I verify correct dresses are shown and save it to text file