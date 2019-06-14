import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNoteComponent } from './sub-note.component';

describe('SubNoteComponent', () => {
  let component: SubNoteComponent;
  let fixture: ComponentFixture<SubNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
