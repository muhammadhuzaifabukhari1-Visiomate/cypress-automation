const { it } = require("mocha");
const { WatchDirectoryFlags } = require("typescript");

describe("Hello this is my first code suit", ()=>{

it("first test script", ()=> {

   cy.visit("https://webinarceclasses.com/");

   cy.xpath("//a[normalize-space()='Login']").click();
   cy.get("#inputEmail").type("muhammadhuzaifabukhari1@gmail.com");
   cy.get("#password-input").type("Huzaifa@1234");
   
  // cy.get('.col-lg-5 > .form-horizontal > .btn').click();
   cy.get("button[type='submit']").first().click();
   cy.get("#newPagesDropdown").click();
   cy.xpath("//span[normalize-space()='Home Study CE Course']").first().click();
   cy.get("#Brochure").selectFile("cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf");
   cy.get('#seminar_AuthorName').scrollIntoView().type("Automation Script Course");
   cy.get('#seminar_Title').scrollIntoView().type("Automation Script Course Title");
   cy.get('#ProgramObjectivesClick > .material-icons').scrollIntoView().click();
   cy.get('#programObjective').type("Automation Scripts");
   cy.get("#addProgramObjective").click();
   cy.get('#addObjectivesBtn').click();
   cy.get('#webinarDescription').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
   cy.get('.align-items-start > :nth-child(1) > .form-group > .select2 > .selection > .select2-selection').click();
   //cy.get('#select2-seminar_WebinarTopics-result-bb7s-Addictions').select();
   cy.get('[id^="select2-seminar_WebinarTopics-result"]').contains('Addictions').click();
   cy.get('#seminar_Credit').type("32");
   cy.get('#seminar_Price').type("870");
   //cy.get('#select2-Test-container').contains('AUtomation').click();
   cy.get("#select2-Test-container").click();
   //cy.get("#select2-Test-result-po8y-AUtomation").click();
   cy.get('[id^="select2-Test-result"]').contains('AUtomation').click()
   cy.get('#select2-Evaluation-container').click();
   //cy.get('#select2-Evaluation-result-mmni-CBT\ Evaluation').click();
   cy.get('[id^="select2-Evaluation-result"]').contains('CBT Evaluation').click();
   cy.get('#homeStudyStep-1Next').click();
   cy.get('.swal-button').click();
   // Instead of:
// cy.get(".some-element").selectFile() ← Wrong
//cy.xpath('//form[@id="adrop" and contains(@class, "fileuploader")]')
  //.selectFile('cypress/fixtures/image.png')
// Do this:
//cy.get('input[type="file"]').first().selectFile('cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf');
  //cy.xpath("//i[normalize-space()='cloud_upload']").click({force:true}).selectFile('cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf');
  //cy.get('.dropzone').selectFile('cypress/fixtures/file.pdf', {
   //action: 'drag-drop',
   //force: true
//    cy.get('.dropzone', { timeout: 10000 })
//   .should('be.visible')
//   .selectFile('cypress/fixtures/file.pdf', { 
//     action: 'drag-drop',
//     force: true
  
 //});
//cy.xpath("/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[3]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/i[1]").selectFile("cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf");
// cy.get('iframe').then(($iframe) => {
//    if ($iframe.length) {
//      cy.wrap($iframe.contents().find('form#adrop'))
//        .selectFile('cypress/fixtures/image.png')
//    }
//  })
//cy.get('body > form#adrop').selectFile('cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf');
// 1. First verify the hidden field exists (if needed)
cy.get('#HomeStudyId').should('exist');

// 2. Target the actual file input (visible or hidden)
cy.get('input[type="file"]')
  .should('exist')
  .selectFile('cypress/fixtures/Dr-Franklin-Carvajal-Vitae-Inclusive.pdf', {
    force: true,
    timeout: 10000
  });

// 3. Verify upload completion
cy.get('#fileError').should('have.class', 'd-none');
cy.contains('.success-message', 'Upload complete').should('be.visible');


})




}) 