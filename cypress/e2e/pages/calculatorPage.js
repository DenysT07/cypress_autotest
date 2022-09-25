const messagingApiButtLoc = '[class*="fkuRxe"]>div:nth-child(1)'
const voiceApiButtLoc = '[class*="fkuRxe"]>div:nth-child(3)'
const continueButtLoc = '[class*="gMRGHv"]>div>button'
const localNumberFieldLoc = '[id="local-numbers"]'
const tollFreeNumberFieldLoc = '[id="toll-free-numbers"]'
const totalSavingResultLoc = '[class*="gBsjXt fdlLDD"]'

class calculatorPage {

    messagingApiButtClick() {
        cy.get(messagingApiButtLoc).click()
    }
    voiceApiButtClick() {
        cy.get(voiceApiButtLoc).click()
    }
    continueButtClick() {
        cy.get(continueButtLoc).click()
    }
    localNumberFieldFill(value) {
        cy.get(localNumberFieldLoc).type(value)
    }
    tollFreeNumberFieldClick(value) {
        cy.get(tollFreeNumberFieldLoc).type(value)
    }
    get totalSavingResult() {
        return cy.get(totalSavingResultLoc)
    }
}
export default new calculatorPage