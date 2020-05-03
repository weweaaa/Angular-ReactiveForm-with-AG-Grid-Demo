import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListCellEditComponent } from './drop-down-list-cell-edit.component';

describe('DropDownListCellEditComponent', () => {
  let component: DropDownListCellEditComponent;
  let fixture: ComponentFixture<DropDownListCellEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownListCellEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListCellEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
