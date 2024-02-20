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
      cy.visit("http://localhost:3001");

      // font loading (screenshots can happen before fonts are loaded)
      cy.document().its("fonts.status").should("equal", "loaded");
      cy.wait(1000); // eslint-disable-line

      // get rid of css fade in
      cy.get("#appContainer").invoke("css", "opacity", "1");

      // screenshots
      for (const res of [1920, 1550, 1040, 740, 420]) {
        cy.viewport(res, 1080).wait(100); // eslint-disable-line
        cy.screenshot(`${res}`);
      }
    });
  }
);
