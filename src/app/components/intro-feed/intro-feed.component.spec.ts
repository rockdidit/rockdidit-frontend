import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFeedComponent } from './intro-feed.component';

describe('IntroFeedComponent', () => {
  let component: IntroFeedComponent;
  let fixture: ComponentFixture<IntroFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
