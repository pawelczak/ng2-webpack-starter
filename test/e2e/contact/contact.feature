Feature: Contact page


    Scenario Outline: User should be able to add message
        Given user goes to home page
        And goes to contact page
        And types title '<title>'
        And types email '<email>'
        And types message '<message>'
        When user clicks add message
        Then message should be validated '<valid>'

        Examples:
        | title              | email         | message     | valid |
        | Awesome message    | test@test.com | Lorem ipsum | true  |
        |                    |               |             | false |
        | Awesome message    |               |             | false |
        |                    | test@test.com |             | false |
        | Awesome message    | test@test.com |             | false |
        |                    |               | Lorem ipsum | false |
        | Awesome message    |               | Lorem ipsum | false |
        |                    | test@test.com | Lorem ipsum | false |
        | Awesome message    | badpassword   | Lorem ipsum | false |
