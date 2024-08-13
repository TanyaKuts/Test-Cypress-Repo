import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'

describe("shop", function() {

 const login = new MainPage()

  it("search", function() {
    
    cy.visit("https://telnyx.com/solutions")
    cy.get('[id="onetrust-accept-btn-handler"]').click()
    cy.scrollTo('bottom')
    cy.get('[aria-describedby="go-to-next-page"]').click()


  })
})