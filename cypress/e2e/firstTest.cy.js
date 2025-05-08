// ## ril : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// ## ril : https://example.cypress.io

describe("QA testing", () => {
  // it("first test", () => {
  //   cy.visit("https://example.cypress.io");
  //   cy.contains("type").click();
  //   cy.url().should("include", "/commands/actions");

  //   cy.get('#email1').type("fake@email.com").('#email1').should("have.value", "fake@email.com")

  // });

  it("localhost", () =>{
    cy.visit('http://localhost:61434/')
  })
});
