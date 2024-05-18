Feature: Login into BookStore Page test

    Scenario Outline: Login into BookStore successfully
        Given I visit login page
        When I login with "<username>" and "<password>"
        Then Verify player login successfully with "<username>"

    Examples: 
        |username|password|
        |anhlet7|Te5t1ng!|
        |anhlet6|Te5t1ng!|