import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'
const firstName='First'
const lastName='Last'

describe("sign up", function() {

  const login = new MainPage()

    it("Assert Test Web", () => {
        cy.visit('https://telnyx.com/sign-up')
        cy.viewport(1920, 1080)
        cy.location('protocol').should('eq', 'https:')

        login.email()
        .type(`${email}`)
        .should('have.value', 'gideoncenter@gmail.com')

        login.firstName()
        .type(`${firstName}`)

        login.lastName()
        .type(`${lastName}`)

        login.password()
        .type(`${password}`)
        .should('have.value', 'Gideon12345!')

        cy.get(':nth-child(6) > .c-bwSdyA').click()

        // cy.get('[id="onetrust-accept-btn-handler"]').click()
       // cy.get('[aria-hidden="false"]').should('be.visible').click()
        cy.get('[class="c-kDQqQr c-kDQqQr-fwzCzT-background-light c-kDQqQr-cOvXws-cv c-ddSKil"]').click()
        
    });
})

