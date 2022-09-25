const iFrameLoc = '[name="intercom-messenger-frame"]'
const searchResultTabLoc = '[class="intercom-w3z09b e11hrsmw1"]'
const liveChatButtLoc = '[id="intercom_launcher"]'
const serchFieldLiveChatButtLoc = '[class*="15hp"]'
const serchFieldLiveChatLoc = '[class*="17f"]'
const entryTitleLoc = '[class*="eq193l70"]>div>div>div:nth-child(1)>div>div>div:nth-child(2)>div'
const lefMenuLoc = '[class*="erLUQr"]'
const serchFieldLeftMenuLoc = '[class*="cMZxuK"]>div>form'
const mainEntryTitleLoc = '[id="voice-api-services-in-europe"]'

class devDocsPage {
    liveChatButtclick() {
        cy.get(liveChatButtLoc).click()
    }
    serchFieldLiveChatButtClick() {
        cy.get(iFrameLoc).its('0.contentDocument.body').then(cy.wrap).find(serchFieldLiveChatButtLoc).click()
    }
    serchFieldLiveChatFill(value) {
        cy.get(iFrameLoc).its('0.contentDocument.body').then(cy.wrap).find(serchFieldLiveChatLoc).type(value)
    }
    findEntryAndClick(value) {
        cy.get(iFrameLoc).its('0.contentDocument.body').then(cy.wrap).find(searchResultTabLoc).contains(value).click()
    }
    get entryTitle() {
        return cy.get('[name="intercom-messenger-frame"]').its('0.contentDocument.body').then(cy.wrap).find(entryTitleLoc)
    }
    lefMenuClick() {
        cy.get(lefMenuLoc).click()
    }
    serchFieldLeftMenuFill(value) {
        cy.get(serchFieldLeftMenuLoc).click().type(value)
    }
    get mainEntryTitle() {
        return cy.get(mainEntryTitleLoc)
    }
}
export default new devDocsPage();