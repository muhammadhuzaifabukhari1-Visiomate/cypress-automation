describe("My drag n drop selection suit", ()=> {

    it("Drag N Drop case", ()=> {

        cy.visit("https://practice.expandtesting.com/drag-and-drop");
        cy.get("#column-a").drag("#column-b");
    })
})