context('Given the user has the app and server running', () => {
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

    it("then the list of suggestions should be empty", () => {
      cy.get("[data-cy=suggestion-0]").should("not.exist");
    });
  });

  describe("when the user types into the autocomplete input box", () => {
    it("then the suggestion list component should be visible and render", () => {
      cy.get("[data-cy=autocomplete-searchbox]").type("a")
      cy.get("[data-cy=suggestion-0]").should("exist");
    });
  })

  describe("when the user clicks onto a suggestion from the autocomplete input box", () => {
    it("then the image and component should be visible and render", () => {
      cy.get("[data-cy=suggestion-0]").click()
      cy.get("[data-cy=product-img]").should("exist");
      cy.get("[data-cy=product-title]").should("exist");
      cy.get("[data-cy=product-description]").should("exist");
      cy.get("[data-cy=product-price]").should("exist");
    });

    it("then the list of suggestions should be empty", () => {
      cy.get("[data-cy=suggestion-0]").should("not.exist");
    });
  })



  
})
