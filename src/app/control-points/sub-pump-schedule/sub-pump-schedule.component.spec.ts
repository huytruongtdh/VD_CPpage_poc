import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPumpScheduleComponent } from './sub-pump-schedule.component';

describe('SubPumpScheduleComponent', () => {
  let component: SubPumpScheduleComponent;
  let fixture: ComponentFixture<SubPumpScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPumpScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPumpScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
