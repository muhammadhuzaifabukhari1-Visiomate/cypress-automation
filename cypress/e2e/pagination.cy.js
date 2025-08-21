describe("My pagination suit", ()=> {

    it("Pagination test cases", ()=> {

        cy.visit("https://practice.expandtesting.com/dynamic-pagination-table");
        cy.get(".pagination li").contains("2").click();
        cy.get(".pagination li").contains("Next").click();

        cy.get("select[name='example_length']").select("10");

        cy.get("input[type='search']").type("John Doe");
        cy.get("input[type='search']").clear();

        //getting total acount of items in table

        cy.get("#example tbody tr").should('have.length', 10);

        //don't know total count getting and saving count and displaying it
        cy.get("#example tbody tr").then((rows)=>{

            const count = rows.length;
            cy.log("Total count is ${count}");
        })


        // selecting sorting

        cy.get("th[aria-label^='Student Name']").click();
    })
})