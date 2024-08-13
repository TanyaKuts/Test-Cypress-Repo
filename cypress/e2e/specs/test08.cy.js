describe("Assertion", function() {

    it("Assert Test Web", () => {
        cy.visit('https://telnyx.com/products/sms-api')
        cy.viewport(1920, 1080)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.scrollTo('bottom')
        cy.get('.c-ejcPbY').click()
        //cy.get('input[[type="email"]').type('gideoncenter@gmail.com')
    });
})