describe("My API testing suit", ()=> {

    it("API Test-Case 1", ()=>{

        cy.visit("https://fakestoreapi.com/docs#tag/Products");
        cy.intercept("Get","https://fakestoreapi.com/docs#tag/Products").as("getproducts");

    })
})