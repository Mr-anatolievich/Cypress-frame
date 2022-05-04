export class Navbar{

    clickOnLogo(){
        cy.get('.brand').click()
    }

    search(text){
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    displaySigninButton(){
        cy.isVisible('#signin_button')
    }

    clickSignIn(){
        cy.get('#signin_button').click()
    }

    clickOnSetting(){
        cy.contains('Settings').click()
    }

    logout(){
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }
}

export const onNavbar = new Navbar()