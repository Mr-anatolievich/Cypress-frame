import { onNavbar } from '../page-objects/component/Navbar'
import { onLoginPage } from '../page-objects/page/Loginform'
import { login_username, login_password } from '../../../config'

describe('Login Failed Test', () => {
    before(()=> {
        cy.visit('/')
        onNavbar.clickSignIn()
    })

    it('should try to login with invalid credentials', () => {
        onLoginPage.login('invalid', 'invalid')
    })

    it('should display error message', () => {
        onLoginPage.displayErrorMessage()
    })
})

describe('Login Success Test', () => {
    before(()=> {
        cy.visit('/')
        onNavbar.clickSignIn()
    })

    it('should login into application', () => {
        onLoginPage.login(login_username, login_password)
    })

    it('should logout from application', () => {
        onNavbar.logout()
        onNavbar.displaySigninButton()
    })
})