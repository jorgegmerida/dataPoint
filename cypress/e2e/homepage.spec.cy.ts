describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/dashboard");

    cy.url().should("contains", "/dashboard");

    cy.get("#dashboardButton").should("be.enabled");

    cy.get("#graphycButton").click();

    cy.get("#toggleDinero").click();
    cy.get("body").contains("Dinero");

    cy.get("#toggleCashback").click();
    cy.get("body").contains("Cashback");
  });
});
