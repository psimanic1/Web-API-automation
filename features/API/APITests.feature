#features/API/APITests.feature

Feature: APITests
        This test case will cover
        testing all API calls

Scenario Outline: APITests
    When I create API call to "<endpoint>"
    Then I verify status code is "<statusCode>" and status message is "<statusMessage>"

Examples:
|endpoint             |statusCode|statusMessage|
|list users           |200       |OK           |
|register unsuccessful|400       |Bad Request  |
|delete               |204       |No Content   |
|delayed response     |200       |OK           |