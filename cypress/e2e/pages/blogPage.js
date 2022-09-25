const searchFieldLoc = '[id="search"]'
const entruTitleLoc = '[class*="dGPsA-d"]'

class blogPage {

    serchFieldFill(value) {
        cy.get(searchFieldLoc).type(value)
    }
    get entruTitle() {
        return cy.get(entruTitleLoc)
    }
}
export default new blogPage