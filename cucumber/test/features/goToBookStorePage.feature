Feature: Go To BookStore Page test

    Scenario: Go to BookStore successfully
        Given User navigate to the application
        When User navigate to BookStore page
        Then Verify user is in BookStore page