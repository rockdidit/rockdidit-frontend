describe('OurProjectsComponent', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the main title correctly', () => {
    const mainTitle = 'Welcome to our projects';
    cy.get('.fontWeb').should('contain', mainTitle);
  });

  it('should display project images and titles correctly', () => {
    const projects = [
      {
        img: 'img_url_1',
        title: 'Project 1',
        detail: 'Details of Project 1',
      },
      {
        img: 'img_url_2',
        title: 'Project 2',
        detail: 'Details of Project 2',
      },
      {
        img: 'img_url_3',
        title: 'Project 3',
        detail: 'Details of Project 3',
      },
    ];

    cy.get('app-our-projects').invoke(
      'attr',
      'projArr',
      JSON.stringify(projects)
    );

    cy.get('.projectsTitle h3').each((titleElement, index) => {
      expect(titleElement).to.contain(projects[index].title);
    });

    cy.get('.allImgDiv img').each((imgElement, index) => {
      expect(imgElement).to.have.attr('src', projects[index].img);
    });
  });
});
