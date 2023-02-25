describe("App", () => {
  it("loads", () => {
    cy.visit("/");

    cy.get("button").click();

    cy.get("[data-testid=\"counter\"]").should(
      "have.text",
      "1 navigation events"
    );
  });
});
