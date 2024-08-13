import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'
const firstName='First'
const lastName='Last'

describe("shop", function() {

 const login = new MainPage()

  it("sign in", function() {
    
    cy.visit("https://telnyx.com/products/phone-numbers")

    cy.location('protocol').should('eq', 'https:')

    cy.get('[id="4OUCcJcOg2kSavsiTfQfsM"]').click()
   
    login.coverageEmail()
    .type(`${email}`)
    .should('have.value', 'gideoncenter@gmail.com')

    login.coverageFirstName()
    .type(`${firstName}`)

    login.coverageLastName()
    .type(`${lastName}`)

    cy.get('.mktoButton').click()

   //  cy.get('[type="email"]').type(`${email}`)

    //login.subscribeBtn().click()
   

    // cy.get('#cart-icon-bubble > svg').should('be.visible').click()
    
    //.click()  
  
/*
    login.email()
    .type(`${email}`)
    .should('have.value', 'gideoncenter@gmail.com')
*/
  })
})

