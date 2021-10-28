import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersItemComponent } from './numbers-item.component';

describe('NumbersItemComponent', () => {
  let component: NumbersItemComponent;
  let fixture: ComponentFixture<NumbersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
