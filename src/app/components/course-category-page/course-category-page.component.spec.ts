import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoryPageComponent } from './course-category-page.component';

describe('CourseCategoryPageComponent', () => {
  let component: CourseCategoryPageComponent;
  let fixture: ComponentFixture<CourseCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
