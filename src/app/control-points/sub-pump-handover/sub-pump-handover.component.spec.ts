import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPumpHandoverComponent } from './sub-pump-handover.component';

describe('SubPumpHandoverComponent', () => {
  let component: SubPumpHandoverComponent;
  let fixture: ComponentFixture<SubPumpHandoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPumpHandoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPumpHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
