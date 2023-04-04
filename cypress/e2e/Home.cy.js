describe("Home", () => {
  it("visit Home", () => {
    cy.visit("http://localhost:3000");
  });

  it("should open the dialog", () => {
    cy.get("button").contains("Abrir Dialog").click();
  });
});