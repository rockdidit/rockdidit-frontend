describe('App testing components web version', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('NavBarComponent navigation routes in web version', () => {
    cy.get('[routerlink="/all-courses"]').click();
    cy.url().should('eq', 'http://localhost:4200/all-courses');

    cy.get('[routerlink="/our-projects"]').click();
    cy.url().should('eq', 'http://localhost:4200/our-projects');

    cy.get('[routerlink="/blog"]').click();
    cy.url().should('eq', 'http://localhost:4200/blog');

    cy.get('[routerlink="/contact"]').click();
    cy.url().should('eq', 'http://localhost:4200/contact');
  });
});
