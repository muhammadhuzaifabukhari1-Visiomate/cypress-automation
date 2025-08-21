describe("My test suit", ()=> {

    it("OTP verification test cases", ()=> {

        cy.visit("https://practice.expandtesting.com/otp-login");
        cy.get("#email").type("practice@expandtesting.com");
        cy.get("button[type='submit']").click();
        cy.contains("We've sent an OTP code to your email:").should("be.visible");
        cy.get("#otp").type("214365");
        cy.contains("Verify OTP Code").click();

        //assertion
        cy.contains("You logged into a secure area!").should("be.visible");


    })
})