/// <reference types="Cypress" />
import LoginRegistrationPage from '../../../support/objectRepo/LoginRegistrationPage'
import HomeDashboardPage from '../../../support/objectRepo/HomeDashboardPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

// Instance Creation for Object Repos
const homeDashboardPage = new HomeDashboardPage()
const loginRegistrationPage = new LoginRegistrationPage()

let emailAdresse
Given('I open DeinBett WebApplication',()=>{
    cy.visit(Cypress.env('url'))
    cy.acceptCookieEinstellungenAlert()  
})

When('I click to procced to Registration', function(){
    homeDashboardPage.getAnmeldenLnk().click()
    loginRegistrationPage.getNewAccountQuestionText()
        .should('include.text',this.data.registerValidation.new_accountquestion)
    loginRegistrationPage.getWillkommenZuruckTxt().should('be.visible')
    loginRegistrationPage.getWeiterZurRegistrierungBtn().click()
    
})

And('enter all details for Registration',function(){

    let num = Math.floor(Math.random() * 900 + 100)
    emailAdresse = this.data.registrationDetails.emailAdresse+ num +"@gmail.com"
    cy.log(emailAdresse)

    loginRegistrationPage.getNeuRegistrierenTxt().should('be.visible')
    loginRegistrationPage.getAnredeDrpDwn().select('male')
        .should('include.text',this.data.registrationDetails.anrede)
    loginRegistrationPage.getVornameTxtFld().type(this.data.registrationDetails.vorname)
        .should('have.value',this.data.registrationDetails.vorname)
    loginRegistrationPage.getNachnameTxtFld().type(this.data.registrationDetails.nachname)
        .should('have.value',this.data.registrationDetails.nachname)
    loginRegistrationPage.getEmailAdresseTxtFld().type(emailAdresse)
        .should('have.value',emailAdresse)
    loginRegistrationPage.getPasswortTxtFld().type(this.data.registrationDetails.passwort)
    .should('have.value',this.data.registrationDetails.passwort)
    loginRegistrationPage.getPasswortWiederholenTxtFld().type(this.data.registrationDetails.passwort)
    .should('have.value',this.data.registrationDetails.passwort)
    loginRegistrationPage.getyaChxBox().eq(1).click()

})

And('click on continue', function(){
    loginRegistrationPage.getWeiterBtn().click()
    Cypress.config('defaultCommandTimeout', 20000)
})

Then('validate homedashboard dispalyed',function(){
    homeDashboardPage.getLogoLnk().should('be.visible')
    homeDashboardPage.getProfileIcon().click()
})

And('validate login profile',function(){
    homeDashboardPage.getProfileUserTxt().should('include.text',this.data.profileValidation.name)
    homeDashboardPage.getProfileWelcomeTxt().should('include.text',this.data.profileValidation.welcomeTxt)
})

And('logout from application',function(){
    homeDashboardPage.getLogoutLnk().click()
    loginRegistrationPage.getNewAccountQuestionText()
        .should('include.text',this.data.registerValidation.new_accountquestion)
    loginRegistrationPage.getWillkommenZuruckTxt().should('be.visible')
})