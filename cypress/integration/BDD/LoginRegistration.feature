@Registration
Feature: Registering a User in DeinBett WebApplication & Email Confirmation

    Scenario: Registering a User
    Given I open DeinBett WebApplication
    When I click to procced to Registration
    And enter all details for Registration
    And click on continue
    Then validate homedashboard dispalyed
    And validate login profile
    And logout from application


