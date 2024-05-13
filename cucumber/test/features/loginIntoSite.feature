Feature: Login into BookStore Page test

    Scenario: Login into BookStore successfully
        Given I visit login page
        When I login with "<username>" and "<password>"
        Then Verify player login successfully with "<username>"

    Examples: 
        |username|password|
        |anhlet7|Te5t1ng!|