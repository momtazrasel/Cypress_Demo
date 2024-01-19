Feature: Automate the Demoblaze Website

    Background:
        Given User open demoblaze website

    Scenario: User able to register successfully.
        When Click on the sign up button
        And Click on the username text field and insert the username
        And Click on the password text field and insert the password
        And Click on the sign up btn
    
    Scenario: User able to login successfully.
        When Click on the login tab
        And Enter the username
        And Enter the password
        And Click on the login button