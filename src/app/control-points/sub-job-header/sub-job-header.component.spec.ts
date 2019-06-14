import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubJobHeaderComponent } from './sub-job-header.component';

describe('SubJobHeaderComponent', () => {
  let component: SubJobHeaderComponent;
  let fixture: ComponentFixture<SubJobHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubJobHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubJobHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
