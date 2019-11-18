# Web-API-automation
----------------------------------README--------------------------------------------------------------------------------------------------
Steps to configure project
------------------------------------------------------------------------------------------------------------------------------------------
- Pull or download project from this repository
- Install Node.js
- Navigate to project folder that contains protractor.conf.js
- Open command prompt in that folder
- Run npm install -g
- Run npm install protractor -g //if needed
- Run npm install protractor-cucumber-framework //if needed
- Run webdriver-manager update

------------------------------------------------------------------------------------------------------------------------------------------
Project is downloaded and ready to use
------------------------------------------------------------------------------------------------------------------------------------------
To run test cases follow next steps:
------------------------------------------------------------------------------------------------------------------------------------------
- Navigate to project folder containing protractor.conf.js
- Open command promt
- Run command:
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
  
