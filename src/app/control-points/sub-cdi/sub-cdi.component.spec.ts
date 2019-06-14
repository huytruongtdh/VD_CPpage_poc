import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCdiComponent } from './sub-cdi.component';

describe('SubCdiComponent', () => {
  let component: SubCdiComponent;
  let fixture: ComponentFixture<SubCdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
