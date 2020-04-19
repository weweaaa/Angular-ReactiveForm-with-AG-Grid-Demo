import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPartOfFormArrayComponent } from './grid-part-of-form-array.component';

describe('GridPartOfFormArrayComponent', () => {
  let component: GridPartOfFormArrayComponent;
  let fixture: ComponentFixture<GridPartOfFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPartOfFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPartOfFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
