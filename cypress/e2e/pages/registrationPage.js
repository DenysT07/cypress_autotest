const nameFieldLoc = '[type="text"]'
const emailFieldLoc = '[type="email"]'
const passwordFieldLoc = '[type="password"]'
const bothCheckBoxesLoc = '[fill="white"]'
const createAccounyBittLoc = '[type="submit"]'
const messageLoc = '.sc-81d2e95d-1'

class RegistrationPage {
    fillEmailField(value) {
        cy.get(emailFieldLoc).type(value)
    }
    fillNameField(value) {
        cy.get(nameFieldLoc).type(value)
    }
    fillpasswordfield(value) {
        cy.get(passwordFieldLoc).type(value)
    }
    clickBothCheckBoxes() {
        cy.get(bothCheckBoxesLoc).click({ multiple: true })
    }
    clickCreataAccounyButt() {
        cy.get(createAccounyBittLoc).click()
    }
    get sendEmailMessage() {
        return cy.get(messageLoc)
    }

}
export default new RegistrationPage();