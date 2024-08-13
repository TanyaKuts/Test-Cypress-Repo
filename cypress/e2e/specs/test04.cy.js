import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'

describe("shop", function() {

 const login = new MainPage()

  it("sign in", function() {
    
    cy.visit("https://shop.telnyx.com/")

    cy.location('protocol').should('eq', 'https:')

    cy.get('[type="email"]').type(`${email}`)

    login.subscribeBtn().click()
   

    // cy.get('#cart-icon-bubble > svg').should('be.visible').click()
    
    //.click()  
  
/*
    login.email()
    .type(`${email}`)
    .should('have.value', 'gideoncenter@gmail.com')
*/
  })
})
