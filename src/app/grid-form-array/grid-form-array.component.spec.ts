import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFormArrayComponent } from './grid-form-array.component';

describe('GridFormArrayComponent', () => {
  let component: GridFormArrayComponent;
  let fixture: ComponentFixture<GridFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
