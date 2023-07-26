import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBranchComponent } from './blog-branch.component';

describe('BlogBranchComponent', () => {
  let component: BlogBranchComponent;
  let fixture: ComponentFixture<BlogBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
