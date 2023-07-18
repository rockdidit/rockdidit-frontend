import { ComponentFixture } from '@angular/core/testing';
import { HomeBranchComponent } from 'src/app/pages/home-branch/home-branch.component';

// Queda pendiente preguntar como se hacen las pruebas unitarias,
// vinculando los componentes con angular.

describe('HomeBranchComponent', () => {
  let component: HomeBranchComponent;
  let fixture: ComponentFixture<HomeBranchComponent>;
  it('HomeBranchComponent', () => {
    cy.visit('/');
  });
});
