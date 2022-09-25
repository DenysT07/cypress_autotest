const firstNameLoc = '[id="FirstName"]'
const lastNameLoc = '[id="LastName"]'
const buisnesEmailLoc = '[id="Email"]'
const companyWebSiteLoc = '[id="Website"]'
const industryLoc = '[id="Industry"]'
const useCaseDropListLoc = '[id="Use_Case_Form__c"]'
const submiteButtLoc = '[type="submit"]'
const confirmMessageLoc = '[style*="58"]' //Thanks for your interest!
const registrationFormLoc = '[class*=" dUmVJF"]'

class integrationPage {
    skrollToRegForm() {
        cy.get(registrationFormLoc).scrollIntoView()
    }

    firstNameFill(value) {
        cy.get(firstNameLoc, { timeout: 80000 }).type(value)
    }
    lastNameFill(value) {
        cy.get(lastNameLoc).type(value)
    }
    buisnesEmailFill(value) {
        cy.get(buisnesEmailLoc).type(value)
    }
    indastryFill(value) {
        cy.get(industryLoc).type(value)
    }
    companyWebSiteFill(value) {
        cy.get(companyWebSiteLoc).type(value)
    }
    useCaseDropListSelect(value) {
        cy.get(useCaseDropListLoc).select(value)
    }
    submitClick() {
        cy.get(submiteButtLoc).click()
    }
    get messageAfterRegist() {
        return cy.get(confirmMessageLoc)
    }
}
export default new integrationPage();