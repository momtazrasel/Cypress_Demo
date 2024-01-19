import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
const locator = new locatorsPage();
const data = new allData();

Given("User open demoblaze website", () => {
    cy.visit(data.demoblaze_url);
    cy.viewport(1280, 720)
});

Then("Click on the sign up button", ()=> {
    cy.xpath(locator.signUpButton).click()
})
Then("Click on the username text field and insert the username", ()=> {
    cy.xpath(locator.userName).click()
    cy.wait(data.oneSecond)
    cy.xpath(locator.userName).type("momtazrasel")
    cy.wait(data.oneSecond)
})
Then("Click on the password text field and insert the password", ()=> {
   cy.xpath(locator.passwordField).click()
   cy.wait(data.oneSecond)
   cy.xpath(locator.passwordField).type("Test123##")
   cy.wait(data.oneSecond)
})
Then("Click on the sign up btn", ()=> {
   cy.xpath(locator.signupButton).click()
   cy.wait(data.oneSecond)
})
Then("Click on the login tab", ()=> {
   cy.xpath(locator.loginTab).click()
   cy.wait(data.oneSecond)
})

Then("Enter the username", ()=> {
    cy.xpath(locator.loginUsernmae).click()
    cy.xpath(locator.loginUsernmae).type("momtazrasel")
    cy.wait(data.oneSecond)
})
Then("Enter the password", ()=> {
    cy.xpath(locator.loginPassword).click()
    cy.xpath(locator.loginPassword).type("Test123##")
    cy.wait(data.oneSecond)
})
Then("Click on the login button", ()=> {
    cy.xpath(locator.loginButton).click()
    cy.wait(data.oneSecond)
})
