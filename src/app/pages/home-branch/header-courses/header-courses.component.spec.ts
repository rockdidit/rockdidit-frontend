import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoursesComponent } from './header-courses.component';

describe('HeaderCoursesComponent', () => {
  let component: HeaderCoursesComponent;
  let fixture: ComponentFixture<HeaderCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
