import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIcemDesignComponent } from './sub-icem-design.component';

describe('SubIcemDesignComponent', () => {
  let component: SubIcemDesignComponent;
  let fixture: ComponentFixture<SubIcemDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubIcemDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubIcemDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
