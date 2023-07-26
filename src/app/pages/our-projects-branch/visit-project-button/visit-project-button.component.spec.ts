import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitProjectButtonComponent } from './visit-project-button.component';

describe('VisitProjectButtonComponent', () => {
  let component: VisitProjectButtonComponent;
  let fixture: ComponentFixture<VisitProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitProjectButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
