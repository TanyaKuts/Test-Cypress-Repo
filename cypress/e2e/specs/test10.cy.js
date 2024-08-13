import MainPage from '../PageObject/mainPage'

const email='gideoncenter@gmail.com'
const password='Gideon12345!'
const firstName='First'
const lastName='Last'

describe("Get in touch with Expert", function() {

    const login = new MainPage()

    it("Expert Form", () => {
        cy.visit('https://telnyx.com/products')
        cy.viewport(1920, 1080)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[class="c-khZXrc c-cXPFLv c-PJLV c-khZXrc-fvDRxk-direction-ltr c-cXPFLv-cChyXO-dark-true c-cXPFLv-bgECgi-lead-true"]').click()

        cy.get('#Reason_for_Contact__c').select(['Sales-Inquiry'])
    

        login.expertFirstName()
        .type(`${firstName}`)

        login.expertLasttName()
        .type(`${lastName}`)

        login.expertEmail()
        .type(`${email}`)
        
        cy.get('#Phone_Number_Extension__c').select(['+1684'])

        cy.get('[id="Phone_Number_Base__c"]').type('666666')

        cy.get('#Website').type('www.travelwithus.com')

        cy.get('[id="Use_Case_Form__c"]').select(['Storage']) 

        cy.get('[id="Form_Budget__c"]').select(['Less than $500']) 

        cy.get('[id="Form_Additional_Information__c"]').type('for my travelling company')

        cy.get('[id="How_did_you_hear_about_Telnyx_Open__c"]').type('google ad')

        cy.get('[class="mktoButton"]').click()

    });
})