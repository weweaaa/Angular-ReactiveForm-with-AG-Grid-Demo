import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditDropdownlistComponent } from './grid-edit-dropdownlist.component';

describe('GridEditDropdownlistComponent', () => {
  let component: GridEditDropdownlistComponent;
  let fixture: ComponentFixture<GridEditDropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEditDropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEditDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
