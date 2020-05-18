import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFormArrayObjectComponent } from './grid-form-array-object.component';

describe('GridFormArrayObjectComponent', () => {
  let component: GridFormArrayObjectComponent;
  let fixture: ComponentFixture<GridFormArrayObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFormArrayObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFormArrayObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
