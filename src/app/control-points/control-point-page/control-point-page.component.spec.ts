import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointPageComponent } from './control-point-page.component';

describe('ControlPointPageComponent', () => {
  let component: ControlPointPageComponent;
  let fixture: ComponentFixture<ControlPointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPointPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
