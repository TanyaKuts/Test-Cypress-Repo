import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'

describe("shop", function() {

 const login = new MainPage()

  it("search", function() {
    
    cy.visit("https://shop.telnyx.com/")
    cy.get('[class="modal__toggle-open icon icon-search"]').click()
    cy.get('#Search-In-Modal').type('hat {enter}')

  })
})
