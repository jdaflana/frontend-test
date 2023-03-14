context('Given the user has the app running', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  beforeEach(() => {
    cy.wait(1700);
  });

  describe("when the user is on the home page", () => {
    it("then the autocomplete component should render", () => {
      cy.get("[data-cy=autocomplete-searchbox]").should("exist");
    });
  });

  describe("when the user types into the autocomplete input box", () => {
    it("then the suggestion list component should be visible and render", () => {
      cy.get("[data-cy=autocomplete-searchbox]").type("a")
      cy.get("[data-cy=suggestion-0]").should("exist");
    });
  })
})
