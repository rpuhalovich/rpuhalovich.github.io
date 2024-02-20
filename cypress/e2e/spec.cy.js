describe(
  "spec",
  {
    viewportHeight: 1920,
    viewportWidth: 1080,
  },
  () => {
    it("screenshots", () => {
      // loading stuff
      Cypress.Screenshot.defaults({ capture: "fullPage", overwrite: true });
      cy.visit("http://localhost:3000");

      // font loading (screenshots can happen before fonts are loaded)
      cy.document().its("fonts.status").should("equal", "loaded");
      cy.wait(1000); // eslint-disable-line

      // get rid of css fade in
      cy.get("#appContainer").invoke("css", "opacity", "1");

      // screenshots
      cy.viewport(1920, 1080).wait(100); // eslint-disable-line
      cy.screenshot("1920x1080");

      cy.viewport(1550, 1080).wait(100); // eslint-disable-line
      cy.screenshot("1550x1080");

      cy.viewport(1040, 1080).wait(100); // eslint-disable-line
      cy.screenshot("1040x1080");

      cy.viewport(740, 1080).wait(100); // eslint-disable-line
      cy.screenshot("740x1080");

      cy.viewport(420, 1080).wait(100); // eslint-disable-line
      cy.screenshot("420x1080");
    });
  }
);
