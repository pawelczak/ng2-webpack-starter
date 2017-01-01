Feature: Application navigation


    Scenario: User should see all links in navigation
        Given user goes to home page
        Then user should see home link
        And user should see repos link
        And user should see contact link
        And user should see github link

    Scenario: The user should be able to navigate on app

        Given user goes to home page
        When user clicks on navigation link
        Then user should be redirected to correct page

