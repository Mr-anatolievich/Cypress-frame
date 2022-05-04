export class LoginPage{ 
    login(username, password){
        cy.login(username, password)
    }

    clickForgotPassword(){
        cy.contains('Forgot your password ?').click()
    }

    displayErrorMessage(){
        // cy.get('.alert-error').should('be.visible')
        cy.isVisible('.alert-error')
    }

}

export const onLoginPage = new LoginPage()