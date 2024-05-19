# playwright-demoqa

# For using playwright test: 
+ please add tests to folder Tests
+ Then run 'npx playwright test' in the CMD 

# For cucumber test: 
** Run all tests in the feature file ** 
+ Step 1: Add tests with detail steps in feature files
+ Step 2: Run ```npm test``` in the CMD and wait for cucumber to generate a missing scripts instruction
+ Step 3: Then create a step definition file in steps folder
+ Step 4: Rerun ```npm test``` and check for the result

** Run a specific test **
+ Add tests file path in to paths: [ "cucumber/test/features/" ] in cucumber.js
+ Run test using 'npm test' in the CMD

#Need to improve:
[] Add screenshot for failed test
[] Improve reports
[] Add logs for steps
[] Improve element actions 
