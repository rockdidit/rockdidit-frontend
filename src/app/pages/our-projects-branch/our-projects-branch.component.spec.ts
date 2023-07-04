import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectsBranchComponent } from './our-projects-branch.component';

describe('OurProjectsBranchComponent', () => {
  let component: OurProjectsBranchComponent;
  let fixture: ComponentFixture<OurProjectsBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProjectsBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProjectsBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
