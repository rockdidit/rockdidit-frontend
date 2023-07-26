import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalHerbMineralComponent } from './natural-herb-mineral.component';

describe('NaturalHerbMineralComponent', () => {
  let component: NaturalHerbMineralComponent;
  let fixture: ComponentFixture<NaturalHerbMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalHerbMineralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalHerbMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
