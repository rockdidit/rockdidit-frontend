describe('Header Courses Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('courses designed for you imgs', () => {
    cy.get('img').should(($img) => {
      expect($img).to.have.attr('src');
      const srcValue = $img.attr('src');
      expect(srcValue).to.not.be.empty;
    });
  });
});
