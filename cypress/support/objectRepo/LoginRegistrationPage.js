class LoginRegistrationPage{

    getWeiterZurRegistrierungBtn(){
       return cy.get('#registerAccount')
    }

    getNewAccountQuestionText(){
        return cy.get('.newAccount__question')
    }

    getWillkommenZuruckTxt(){
        return cy.get('.existingAccount__headline')
    }

    getLoginEmailTxtFld(){
        return cy.get('#loginEmail')
    }

    getPasswortTxtFld(){
        return cy.get('#loginPassword')
    }

    getPasswortVergessenLnk(){
        return cy.get('.existingAccount__forgotten')
    }

    getAnmeldenBtn(){
        return cy.get('#login-submit')
    }

    getNeuRegistrierenTxt(){
        return cy.get('.accountNew__headline')
    }

    getAnredeDrpDwn(){
        return cy.get('#salutation')
    }
    
    getVornameTxtFld(){
        return cy.get('#firstName')
    }

    getNachnameTxtFld(){
        return cy.get('#lastName')
    }

    getEmailAdresseTxtFld(){
        return cy.get('#email')
    }

    getPasswortTxtFld(){
        return cy.get('#password')
    }

    getPasswortWiederholenTxtFld(){
        return cy.get('#password2')
    }

    getyaChxBox(){
        return cy.get('.checkbox__checkbox.checkbox__checkbox--alignTop')
    }

    getWeiterBtn(){
        return cy.get('#register-submit')
    }


}
export default LoginRegistrationPage;