describe("My suit for drag n drop circle", ()=> {

    it("My drag n drop case", ()=> {
        
        cy.visit("https://practice.expandtesting.com/drag-and-drop-circles");
        cy.get("div[class='red']").drag("#target");
        cy.get("div[class='green']").drag("#target");
        cy.wait(2000);
        cy.get("div[class='blue']").drag("#target");
    })
})