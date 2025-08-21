describe("My radio button selection suit", ()=> {

    it("Select radio button", ()=> {

        cy.visit("https://practice.expandtesting.com/radio-buttons");
        cy.get("input[type='radio'][value='blue']").check();
        cy.get("input[type='radio'][value='red']").check();
        cy.get("#basketball").check();
    })
})