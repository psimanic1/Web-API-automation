# Web-API-automation
----------------------------------README--------------------------------------------------------------------------------------------------
Steps to configure project
------------------------------------------------------------------------------------------------------------------------------------------
1.) Pull or download project from this repository
2.) Install Node.js
3.) Navigate to project folder that contains protractor.conf.js
4.) Open command prompt in that folder
5.) Run npm install -g
6.) Run npm install protractor -g //if needed
7.) Run npm install protractor-cucumber-framework //if needed
8.) Run webdriver-manager update

------------------------------------------------------------------------------------------------------------------------------------------
Project is downloaded and ready to use
------------------------------------------------------------------------------------------------------------------------------------------
To run test cases follow next steps:
------------------------------------------------------------------------------------------------------------------------------------------
1.) Navigate to project folder containing protractor.conf.js
2.) Open command promt
3.)
  - Run command protractor .\protractor.conf.js to run all tests and scenarios from all feature files
  - Run command protractor .\protractor.conf.js --specs features/API/*.feature or --specs features/API/APITests.feature to run API        specific test case which is covering all 4 endpoints 
  - Run command protractor .\protractor.conf.js --specs features/*.feature to run all tests and scenarios covering web automation
  - Run command protractor .\protractor.conf.js --specs features/FEATURE_NAME to run specific web automation test case with FEATURE_NAME being changed with one of the following tests:
      - NumberOfProduts.feature
      - UserCreation.feature
      - SearchFieldResults.feature
      - RegistrationNotSuccessful.feature

------------------------------------------------------------------------------------------------------------------------------------------
NOTE: After running SearchFieldResults.feature, text file with name printedDresses.txt will be created in same folder.
------------------------------------------------------------------------------------------------------------------------------------------
  
