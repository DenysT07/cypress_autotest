const firstNameLoc = '[id="FirstName"]'
const lastNameLoc = '[id="LastName"]'
const buisnesEmailLoc = '[id="Email"]'
const whatWouldYouLikeToDoFieldLoc = '[id="Form_Additional_Information__c"]'
const checkBoxLoc = '[style*="150"]'
const applyNowButtLoc = '[type="submit"]'
const confirmMessage = '[class*="CGKsC"]>span'

class storagePage {
    firstNameFill(value) {
        cy.get(firstNameLoc, { timeout: 80000 }).type(value)
    }
    lastNameFill(value) {
        cy.get(lastNameLoc).type(value)
    }
    buisnesEmailFill(value) {
        cy.get(buisnesEmailLoc).type(value)
    }
    TellAsFormFill(value) {
        cy.get(whatWouldYouLikeToDoFieldLoc).type(value)
    }
    checkBoxClick() {
        cy.get(checkBoxLoc).click()
    }
    applyNowButtClick() {
        cy.get(applyNowButtLoc).click()
    }
    get messageAfterRegist() {
        return cy.get(confirmMessage)
    }
}
export default new storagePage();