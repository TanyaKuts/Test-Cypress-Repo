import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'

describe("shop", function() {

 const login = new MainPage()

  it("search", function() {
    
    cy.visit("https://portal.telnyx.com/#/login/")
    //cy.get('[id="onetrust-accept-btn-handler"]').click()
    cy.get('.frontend-customer-portal-vbr75o').click()
   // cy.get('#\:r2\:').click()
    login.email().type(`${email}`)
    cy.get('.MuiButtonBase-root').click()
    // cy.get('#onetrust-accept-btn-handler').click()
    // cy.scrollTo('bottom')
   // cy.get('[aria-describedby="go-to-next-page"]').click()

    // cy.get('[class="c-ZqGqb"]').click()
    //cy.get('#Search-In-Modal').type('hat {enter}')

  })
})
