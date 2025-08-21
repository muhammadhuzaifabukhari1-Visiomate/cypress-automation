Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore specific error if you want
  if (err.message.includes("Cannot set properties of null")) {
    return false;
  }
  // Otherwise let it fail
});


describe("My practice work", ()=> {

it("Test Cases 1", ()=> {

    cy.visit("https://dev.nurturefulpsychology.com/", {
        onBeforeLoad(win) {
        // Stub grecaptcha
        win.grecaptcha = {
          execute: () => {
            return new Promise(resolve => resolve("fake-recaptcha-token"));
          }
        };
      }
    });
    cy.get(".menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-31.ng-tns-c3428817591-1.ng-star-inserted").click();
cy.get("#email").type("k@visiomate.com",{force:true});
cy.get("#pass").debug().type("Huzaifa@1234",{force:true});
cy.contains("button","Sign In",{force:true}).click({force:true});


})



})