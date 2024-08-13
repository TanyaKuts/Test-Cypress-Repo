import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'

describe("log in", function() {

  const login = new MainPage()

  it("sign in", function() {
    
    cy.visit("https://portal.telnyx.com/#/login/sign-in")
  
    cy.location('protocol').should('eq', 'https:')

    login.email()
    .type(`${email}`)
    .should('have.value', 'gideoncenter@gmail.com')

    login.password()
    .type(`${password}`)
    .should('have.value', 'Gideon12345!')
    
    login.loginBtn()
    .click()
    
    login.resendBtn()
    .should('be.visible')
    .click()

    login.email()
    .type(`${email}`)
    .should('have.value', 'gideoncenter@gmail.com')

    login.submitBtn()
    .click()

  })
})