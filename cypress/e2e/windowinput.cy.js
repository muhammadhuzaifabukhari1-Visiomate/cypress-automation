describe("MY practice suit", ()=> {

    it(" My test cases for input fields", ()=> {

        cy.visit("https://practice.expandtesting.com/");
        cy.get('#examples > :nth-child(2) > :nth-child(1) > .card > .card-footer > div > .btn').click();
        //cy.get('.input-box', { timeout: 10000 }).scrollIntoView().should('exist'); // Not .should('be.visible')
        //cy.get('.input-box').scrollIntoView().should('exist');

        cy.get("#input-number").type("111244622");
        cy.get("#input-text").type("Dhoom");
        cy.get("#input-password").type("1112sdfljk");
        cy.get("#input-date").type("2025-06-12");  // ✅ correct format
        cy.get('#btn-display-inputs').click();



        
    })
})