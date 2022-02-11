class HomeDashboardPage{
    
    getAnmeldenLnk(){
        return cy.get('.headerElement__link.headerElement__link--login')
    }

    getLogoLnk(){
        return cy.get('.logo__link')
    }

    getProfileIcon(){
        return cy.get('.headerElement__link.headerElement__link--login>.headerElement__text.headerElement__text--login')
        //.headerElement__suffix
    }

    getProfileUserTxt(){
        return cy.get('.titleHeadline')
    }

    getProfileWelcomeTxt(){
        return cy.get('.simpleText.simpleText--grey.simpleText--regularFont.simpleText--size14')
    }

    getLogoutLnk(){
        return cy.get('.sidebarNavigation__rootChild')
    }
}

export default HomeDashboardPage;