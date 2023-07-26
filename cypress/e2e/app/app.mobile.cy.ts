describe('App component mobile version', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(760, 480);
    cy.get('#btnToggle').click();
  });
  it('Should be redirect to the "Home" page', () => {
    cy.get('.principalListElementDropDown').first().click();
    cy.get('.textTransitionColor').eq(1).click();
    cy.url().should('eq', 'http://localhost:4200/');
  });

  it('Should be redirect to the "All Courses" page', () => {
    cy.get('.principalListElementDropDown').eq(1).click();
    cy.get('.textTransitionColor').eq(3).click();
    cy.url().should('eq', 'http://localhost:4200/all-courses');
  });

  it('Should be redirect to the "Our Projects" page', () => {
    cy.get('.principalListElementDropDown').eq(2).click();
    cy.get('.textTransitionColor').eq(5).click();
    cy.url().should('eq', 'http://localhost:4200/our-projects');
  });

  it('Should be redirect to the "Blog" page', () => {
    cy.get('.principalListElementDropDown').eq(3).click();
    cy.get('.textTransitionColor').eq(7).click();
    cy.url().should('eq', 'http://localhost:4200/blog');
  });

  it('Should be redirect to the "Contact" page', () => {
    cy.get('.principalListElementDropDown').eq(4).click();
    cy.get('.textTransitionColor').eq(9).click();
    cy.url().should('eq', 'http://localhost:4200/contact');
  });
  afterEach(() => {
    cy.get('#btnToggle').click();
    cy.visit('/');
  });
});
