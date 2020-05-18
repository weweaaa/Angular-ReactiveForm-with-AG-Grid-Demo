import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCellObjectComponent } from './form-cell-object.component';

describe('FormCellObjectComponent', () => {
  let component: FormCellObjectComponent;
  let fixture: ComponentFixture<FormCellObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCellObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCellObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
