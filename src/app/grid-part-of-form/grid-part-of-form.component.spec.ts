import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPartOfFormComponent } from './grid-part-of-form.component';

describe('GridPartOfFormComponent', () => {
  let component: GridPartOfFormComponent;
  let fixture: ComponentFixture<GridPartOfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPartOfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPartOfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
