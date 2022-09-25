const faxApiButtLoc = '[class*="cyeF"]>[href*="fax"]'
const exploreTheDocButtLoc = 'div>span>a[href*="e-fax"]'
const seeTheSpecButtLoc = '[class*="ewCCKw"]'
const runInPostmanButtLoc = '[alt="Run in Postman"]'

class faxApiPage {
    faxApiButtClick() {
        cy.get(faxApiButtLoc).click()
    }
    exploreTheDocButtClick() {
        cy.get(exploreTheDocButtLoc).click()
    }
    seeTheSpecButtclick() {
        cy.get(seeTheSpecButtLoc).click()
    }
    runInPostmanButtClick() {
        cy.get(runInPostmanButtLoc).click()
    }
}
export default new faxApiPage();