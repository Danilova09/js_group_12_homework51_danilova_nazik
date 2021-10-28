import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryBlockComponent } from './main-gallery-block.component';

describe('MainGalleryBlockComponent', () => {
  let component: MainGalleryBlockComponent;
  let fixture: ComponentFixture<MainGalleryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGalleryBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGalleryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
