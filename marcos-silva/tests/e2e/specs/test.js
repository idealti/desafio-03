// https://docs.cypress.io/api/table-of-contents

describe("When visiting the route '/'", () => {
  beforeEach(() => cy.visit('/'));

  it('You are redirected to /home', () => {
    cy.url().should('include', '/home');
  });

  it('Redirects to /search when clicking on a category card', () => {
    cy.get('[data-cy=nav-link]').should('have.length', 5);
  });
});
