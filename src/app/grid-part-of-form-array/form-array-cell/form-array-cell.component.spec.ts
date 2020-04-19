import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayCellComponent } from './form-array-cell.component';

describe('FormArrayCellComponent', () => {
  let component: FormArrayCellComponent;
  let fixture: ComponentFixture<FormArrayCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
