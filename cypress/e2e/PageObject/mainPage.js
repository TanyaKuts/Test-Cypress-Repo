class MainPage {

    //login

email() {
    return cy.get('input[name="email"]')
}

password() {
    return cy.get('input[name="password"]')
}

loginBtn() {
    return cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth frontend-customer-portal-1ksoys"]').click()
}

resendBtn() {
    return cy.contains('Resend')
}

submitBtn() {
    return cy.get('[type="submit"]')
}

// subscribe

subscribeBtn() {
    return cy.get('[id="Subscribe"]')
}

cartImg() {
    return cy.get('[class="icon icon-cart"]')
}


// signup

firstName() {
    return cy.get('#first_name')
}

lastName() {
    return cy.get('#last_name')
}

// Global Coverage

coverageFirstName() {
    return cy.get('#FirstName')
}

coverageLastName() {
    return cy.get('#LastName')
}

coverageEmail() {
    return cy.get('#Email')
}

// Expert form

expertFirstName() {
    return cy.get('#FirstName')
}

expertLasttName() {
    return cy.get('[id="LastName"]')
}

expertEmail() {
    return cy.get('[id="Email"]')
}

}

export default MainPage