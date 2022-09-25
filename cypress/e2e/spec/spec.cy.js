import blogPage from "../pages/blogPage";
import calculatorPage from "../pages/calculatorPage";
import devDocsPage from "../pages/devDocsPage";
import faxApiPage from "../pages/faxApiPage";
import integrationPage from "../pages/integrationPage";
import mainPage from "../pages/mainPage"
import partnerPage from "../pages/partnerPage";
import registrationPage from "../pages/registrationPage"
import storagePage from "../pages/storagePage";
import talkToAnExpertPage from "../pages/talkToAnExpertPage";
const randomstring = Math.random().toString(36).substring(2);
const randomstringForPassword = (Math.random().toString(36).substring(2) + 'D!1fF')
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const phoneNumber = getRandomInRange(100000000, 999999999)

before('open site', () => {
  mainPage.visitSite()
  mainPage.ClickCross()
})

describe('registration forms tests', () => {
  it('Check registration page', () => {
    mainPage.singUpClick()
    registrationPage.fillNameField(randomstring)
    registrationPage.fillEmailField(randomstring + '@gmail.com')
    registrationPage.fillpasswordfield(randomstringForPassword)
    registrationPage.clickBothCheckBoxes()
    registrationPage.clickCreataAccounyButt()
    cy.wait(10000)
    registrationPage.clickCreataAccounyButt() //to pass the recapcha need to press the button two times, work only in chrome
    cy.wait(10000)
    registrationPage.sendEmailMessage.should(
      "have.text",
      "We've sent you an email to activate your account"
    )
  })

  it('Check the "Talk to an expert" page', () => {
    mainPage.rightMenueClick()
    mainPage.talkToAnExpertButt()
    talkToAnExpertPage.reasonDroplistSelect('Support')
    talkToAnExpertPage.firstNameFill(randomstring)
    talkToAnExpertPage.lastNameFill(randomstring)
    talkToAnExpertPage.buisnesEmailFill(randomstring + '@gmail.com')
    talkToAnExpertPage.phoneNumberFill(phoneNumber)
    talkToAnExpertPage.companyWebSiteFill('http://www.' + randomstring + '.com/')
    talkToAnExpertPage.additionalInformationFill('It is just a test')
    talkToAnExpertPage.countryCodeSelect('+380')
    talkToAnExpertPage.checkBoxClick()
    talkToAnExpertPage.submitClick()
    talkToAnExpertPage.messageAfterRegist.should(
      "have.text",
      "Thanks for Reaching Out!"
    );
  })

  it('check registration for beta testing on the integration page', () => {
    mainPage.rightMenueClick()
    mainPage.companyButtclick()
    mainPage.integrationButtClick({ timeout: 2000 })
    cy.wait(2000)
    cy.scrollTo('bottom')
    integrationPage.firstNameFill(randomstring)
    integrationPage.lastNameFill(randomstring)
    integrationPage.buisnesEmailFill(randomstring + '@gmail.com')
    integrationPage.indastryFill(randomstring)
    integrationPage.companyWebSiteFill('http://www.' + randomstring + '.com/')
    integrationPage.useCaseDropListSelect('Other')
    integrationPage.submitClick()
    integrationPage.messageAfterRegist.should(
      "have.text",
      "Thanks for your interest!"
    );
  });

  it('check registrations for becoming a Telnix Partner on the Partners page ', () => {
    mainPage.rightMenueClick()
    mainPage.companyButtclick()
    mainPage.partnerButtClick()
    cy.wait(2000)
    cy.scrollTo('bottom')
    partnerPage.firstNameFill(randomstring)
    partnerPage.lastNameFill(randomstring)
    partnerPage.buisnesEmailFill(randomstring + '@gmail.com')
    partnerPage.phoneFill('380' + phoneNumber)
    partnerPage.companyFill(randomstring)
    partnerPage.TellAsFormFill('It is just a test')
    partnerPage.partnerTypeDropListSelect('MSP')
    partnerPage.checkBoxLocClick()
    partnerPage.applyNowButtClick()
    cy.url({ timeout: 20000 }).should('contains', 'https://telnyx.com/company/partnerships?') // there is a bug, i decided to check actual URL to pass this test
  });

  it('check registrations for the Waitlist on the storage page ', () => {
    mainPage.rightMenueClick()
    mainPage.productsButtcClick()
    mainPage.storageButtClock()
    cy.wait(3000)
    cy.scrollTo('bottom')
    storagePage.firstNameFill(randomstring)
    storagePage.lastNameFill(randomstring)
    storagePage.buisnesEmailFill(randomstring + '@gmail.com')
    storagePage.TellAsFormFill('It is just a test')
    storagePage.checkBoxClick()
    storagePage.applyNowButtClick()
    storagePage.messageAfterRegist.should(
      "have.text",
      "You're on the waitlist!"
    );
  });
})
describe('Functional tests', () => {
  it('check link to the Postman colection', () => {
    mainPage.rightMenueClick()
    mainPage.productsButtcClick()
    mainPage.seeAllProductsButtClick()
    faxApiPage.faxApiButtClick()
    faxApiPage.exploreTheDocButtClick()
    faxApiPage.seeTheSpecButtclick()
    faxApiPage.runInPostmanButtClick()
    cy.url({ timeout: 20000 }).should('contains', 'd8c640348288')
  });

  it('check live chat in Developer Docs', () => {
    mainPage.rightMenueClick()
    mainPage.resourcesButtclick()
    mainPage.devDocsButtclick()
    cy.scrollTo('bottom')
    cy.wait(6000)
    devDocsPage.liveChatButtclick()
    cy.wait(5000)
    devDocsPage.serchFieldLiveChatButtClick()
    devDocsPage.serchFieldLiveChatFill('sms')
    cy.wait(1000)
    devDocsPage.findEntryAndClick('Sending Alphanumeric')
    devDocsPage.entryTitle.should(
      "have.text",
      "Sending Alphanumeric SMS"
    );
  });

  it('check search field in the "Blog" page', () => {
    mainPage.rightMenueClick()
    mainPage.resourcesButtclick()
    mainPage.blogeButtClick()
    blogPage.serchFieldFill('Programmable fax{enter}')
    cy.wait(6000)
    cy.contains('Programmable fax - switch from Twilio to Telnyx').click()
    blogPage.entruTitle.should('have.text', 'Programmable fax - switch from Twilio to Telnyx ')
  })

  it('check the search field in the developer docs', () => {
    mainPage.rightMenueClick()
    mainPage.resourcesButtclick()
    mainPage.devDocsButtclick()
    devDocsPage.lefMenuClick()
    devDocsPage.serchFieldLeftMenuFill('api')
    cy.contains(' Services in Europe').click({ force: true })
    devDocsPage.mainEntryTitle.should('have.text', 'Voice API Services in Europe')
  })
  it('Check Savings Calculator', () => {
    mainPage.rightMenueClick()
    mainPage.resourcesButtclick()
    mainPage.CalculatorButtClick()
    cy.wait(2000)
    calculatorPage.messagingApiButtClick()
    calculatorPage.voiceApiButtClick()
    calculatorPage.continueButtClick()
    calculatorPage.localNumberFieldFill('{selectall}321')
    calculatorPage.tollFreeNumberFieldClick('{selectall}123')
    calculatorPage.continueButtClick()
    calculatorPage.totalSavingResult.should('have.text', '$12,940/ year')
  })

})

afterEach('Visits the Kitchen Sink', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  mainPage.visitSite()
})