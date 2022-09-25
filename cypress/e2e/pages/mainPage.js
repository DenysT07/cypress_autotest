const acceptCoockeButtonLoc = '[data-icon="times"]'
const singUpButtLoc = '[class*="psuoP"]>[class*="eKznVb"]'
const talkToAnExpertButtLoc = '[class*=" ZtAzC mchNoDecorate"]'
const rightMenueLoc = '[width="28"]'
const companyButtLoc = '[class="sc-6ef4e600-19 ievftS"] > div:nth-child(5) > button'
const integrationButtLoc = '[class*="ievftS"]>div>a[href="/integrations"]'
const partnersButtLoc = '[class*="ievftS"]>div>a[href="/company/partnerships"]'
const productsButtLoc = '[class="sc-6ef4e600-19 ievftS"] > div:nth-child(1) > button'
const storageButtLoc = '[class*="ievftS"]>div>[href*="storage"]'
const seeAllProductsButtLoc = '[class*="ievftS"]>div>[href="/products"]'
const resourcesButtLoc = '[class="sc-6ef4e600-19 ievftS"] > div:nth-child(4) > button'
const devDocsButtLoc = '[class*="ievftS"]>div>[href*="v2"]'
const blogeButtLoc = '[class*="ievftS"]>div>[href="/resources"]'
const CalculatorButtLoc = '[class*="ievftS"]>div>[href*="calculator"]'

class MainPage {


    visitSite() {
        cy.visit('https://telnyx.com')
    }
    ClickCross() {
        cy.get(acceptCoockeButtonLoc).click()
    }
    singUpClick() {
        cy.get(singUpButtLoc).click()
    }
    talkToAnExpertButt() {
        cy.get(talkToAnExpertButtLoc).click()
    }
    rightMenueClick() {
        cy.get(rightMenueLoc).click()
    }
    companyButtclick() {
        cy.get(companyButtLoc).click()
    }
    integrationButtClick() {
        cy.get(integrationButtLoc).click()
    }
    partnerButtClick() {
        cy.get(partnersButtLoc).click()
    }
    productsButtcClick() {
        cy.get(productsButtLoc).click()
    }
    storageButtClock() {
        cy.get(storageButtLoc).click()
    }
    seeAllProductsButtClick() {
        cy.get(seeAllProductsButtLoc).click()
    }
    resourcesButtclick() {
        cy.get(resourcesButtLoc).click()
    }
    devDocsButtclick() {
        cy.get(devDocsButtLoc).click()
    }
    blogeButtClick() {
        cy.get(blogeButtLoc).click()
    }
    CalculatorButtClick() {
        cy.get(CalculatorButtLoc).click()
    }
}
export default new MainPage();