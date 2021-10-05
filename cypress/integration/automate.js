import loginPage from './pages/loginPage.js'
const authenticate = new loginPage();

context('Login as a standard user and checkout T-shirts', () => {
    it('login scenario', () => {
        cy.visit("https://www.saucedemo.com/")    

        cy.fixture('loginData').then(function (loginData) {
            authenticate.usernameInput().type(loginData.username)
            authenticate.passwordInput().type(loginData.password, { sensitive: true })
            authenticate.loginBtn().click()

            cy.url().should('contain', loginData.inventory_url_path)
        })

        //TODO: Break this down into reusable functions
        cy.fixture('inventoryData').then(function (inventoryData) {
            
            //TODO: Replace with a helper method that would filter out by Alt-Text or some other attribute that gives list of all T-Shirts, so that this is not hardcoded
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click()
        cy.get('.shopping_cart_badge').click()
        cy.get('[data-test=checkout]').click()

        //TODO: move all fixtures to initializer
        cy.fixture('checkoutData').then(function(checkoutData) {
            cy.get('#first-name').type(checkoutData.firstName)
            cy.get('#last-name').type(checkoutData.lastName)
            cy.get('#postal-code').type(checkoutData.zip)

            cy.get('#continue').click()

            cy.url().should('contain', '/checkout-step-two.html')
            cy.get('#finish').click()

            cy.url().should('contain', '/checkout-complete.html')

            })
        })
    })

})