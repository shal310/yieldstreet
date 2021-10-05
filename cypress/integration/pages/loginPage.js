class loginPage {

    usernameInput() {
        return cy.get('#user-name')
    }

    passwordInput() {
        return cy.get('#password')
    }

    loginBtn() {
        return cy.get('#login-button')
    }
}
export default loginPage