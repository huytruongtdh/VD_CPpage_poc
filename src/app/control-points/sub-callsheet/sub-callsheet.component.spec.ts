import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCallsheetComponent } from './sub-callsheet.component';

describe('SubCallsheetComponent', () => {
  let component: SubCallsheetComponent;
  let fixture: ComponentFixture<SubCallsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCallsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCallsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
