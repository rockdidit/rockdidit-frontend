describe('Header Courses Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main title', () => {
    cy.get('.title').should('be.visible', { timeout: 10000 }).contains('Main Title');
  });

  it('should display the secondary title', () => {
    cy.get('.secondaryTitle').should('be.visible', { timeout: 10000 }).contains('Secondary Title');
  });

  it('should display course images and titles', () => {
    cy.get('.containerImgsWeb')
      .should('have.length.gt', 0)
      .each(($el, index) => {
        cy.wrap($el)
          .find('.imgDimentionsForCourses')
          .should('be.visible', { timeout: 10000 })
          .and('have.attr', 'alt');

        cy.wrap($el)
          .find('.subTitleCourses')
          .should('be.visible', { timeout: 10000 })
          .then(($subtitle) => {
            if (index === 0) {
              expect($subtitle.text()).to.contain('Course Title Condition A');
            } else if (index === 1 || index === 3) {
              expect($subtitle.text()).to.contain('Course Title Condition B');
            } else if (index === 2) {
              expect($subtitle.text()).to.contain('Course Title Condition C');
            }
          });
      });
  });

  it('should display the "View All" button', () => {
    cy.get('.viewAll').should('be.visible', { timeout: 10000 }).contains('View All');
  });
});
