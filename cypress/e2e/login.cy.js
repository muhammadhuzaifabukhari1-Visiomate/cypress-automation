describe("Login suit", ()=> {

    it("Login test cases 1", ()=> {

        cy.visit("https://practice.expandtesting.com/login");
        cy.get("#username").type("pratice");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get("button[type='submit']").click();
        //cy.contains("You logged into a secure area!").should('visible');
        cy.contains("You logged into a secure area!").should('be.visible'); // ✅ correct


    })
})