const firstNameLoc = '[id="FirstName"]'
const lastNameLoc = '[id="LastName"]'
const buisnesEmailLoc = '[id="Email"]'
const companyLoc = '[id="Company"]'
const phoneLoc = '[id="Form_Phone__c"]'
const partnerTypeDropListLoc = '[id="Partner_Type__c"]'
const TellAsFormLoc = '[id="Form_Additional_Information__c"]'
const checkBoxLoc = '[class="mktoFieldWrap"]>[class*="mktoLogicalField"]'
const applyNowButtLoc = '[type="submit"]'

class partnerPage {
    firstNameFill(value) {
        cy.get(firstNameLoc, { timeout: 80000 }).type(value)
    }
    lastNameFill(value) {
        cy.get(lastNameLoc).type(value)
    }
    buisnesEmailFill(value) {
        cy.get(buisnesEmailLoc).type(value)
    }
    phoneFill(value) {
        cy.get(phoneLoc).type(value)
    }
    companyFill(value) {
        cy.get(companyLoc).type(value)
    }
    TellAsFormFill(value) {
        cy.get(TellAsFormLoc).type(value)
    }
    partnerTypeDropListSelect(value) {
        cy.get(partnerTypeDropListLoc).select(value)
    }
    applyNowButtClick() {
        cy.get(applyNowButtLoc).click()
    }
    checkBoxLocClick() {
        cy.get(checkBoxLoc).click()
    }
    get messageAfterRegist() {
        return cy.get()
    }
}
export default new partnerPage();