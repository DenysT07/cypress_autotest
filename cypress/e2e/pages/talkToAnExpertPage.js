const reasonForContactDropList = '[id="Reason_for_Contact__c"]'
const firstNameLoc = '[id="FirstName"]'
const lastNameLoc = '[id="LastName"]'
const buisnesEmailLoc = '[id="Email"]'
const phoneNumberWithOutCountryCodeLoc = '[id="Phone_Number_Base__c"]'
const countryCodLoc = '[id="Phone_Number_Extension__c"]'
const companyWebSiteLoc = '[id="Website"]'
const additionalInformationLoc = '[id="Form_Additional_Information__c"]'
const checkBoxLoc = '[id="mktoCheckbox_10173_0"]'
const submitButtLoc = '[type="submit"]'
const messageAfterRegistLoc = '[class*="cgMQXX"]'

class TalkToAnExpertPage {

    reasonDroplistSelect(value) {
        cy.get(reasonForContactDropList).select(value)
    }
    firstNameFill(value) {
        cy.get(firstNameLoc).type(value)
    }
    lastNameFill(value) {
        cy.get(lastNameLoc).type(value)
    }
    buisnesEmailFill(value) {
        cy.get(buisnesEmailLoc).type(value)
    }
    phoneNumberFill(value) {
        cy.get(phoneNumberWithOutCountryCodeLoc).type(value)
    }
    companyWebSiteFill(value) {
        cy.get(companyWebSiteLoc).type(value)
    }
    additionalInformationFill(value) {
        cy.get(additionalInformationLoc).type(value)
    }
    countryCodeSelect(value) {
        cy.get(countryCodLoc).select(value)
    }
    checkBoxClick() {
        cy.get(checkBoxLoc).click()
    }
    submitClick() {
        cy.get(submitButtLoc).click()
    }
    get messageAfterRegist() {
        return cy.get(messageAfterRegistLoc)
    }
}
export default new TalkToAnExpertPage();