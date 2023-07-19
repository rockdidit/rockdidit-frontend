describe('Home Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display courses with images', () => {
    cy.get('app-header-courses')
      .should('have.class', 'fade-in-element')
      .should('have.class', 'visible')
      .find('.course-item')
      .should('have.length.gt', 0);
  });

  it('should display introduction content', () => {
    cy.get('app-intro-feed')
      .should('have.class', 'fade-in-element')
      .should('have.class', 'visible')
      .find('.intro-item')
      .should('have.length.gt', 0);
  });

  it('should display our projects with images', () => {
    cy.get('app-our-projects')
      .should('have.class', 'fade-in-element')
      .should('have.class', 'visible')
      .find('.project-item')
      .should('have.length.gt', 0);
  });
});
