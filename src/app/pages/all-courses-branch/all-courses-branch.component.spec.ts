import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesBranchComponent } from './all-courses-branch.component';

describe('AllCoursesBranchComponent', () => {
  let component: AllCoursesBranchComponent;
  let fixture: ComponentFixture<AllCoursesBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCoursesBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCoursesBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
