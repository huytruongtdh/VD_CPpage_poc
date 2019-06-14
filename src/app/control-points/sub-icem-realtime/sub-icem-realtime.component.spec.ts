import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIcemRealtimeComponent } from './sub-icem-realtime.component';

describe('SubIcemRealtimeComponent', () => {
  let component: SubIcemRealtimeComponent;
  let fixture: ComponentFixture<SubIcemRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubIcemRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubIcemRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
