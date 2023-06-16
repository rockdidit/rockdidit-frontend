import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDidItComponent } from './i-did-it.component';

describe('IDidItComponent', () => {
  let component: IDidItComponent;
  let fixture: ComponentFixture<IDidItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDidItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDidItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
