import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ISubControlPointComponent } from 'src/app/_models/isub-control-point-component';

@Component({
  selector: 'app-sub-note',
  templateUrl: './sub-note.component.html',
  styleUrls: ['./sub-note.component.css']
})
export class SubNoteComponent implements OnInit, ISubControlPointComponent {
  cpData: any;
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  getFormData() {
    return this.profileForm.value;
  }
  loadData(): void {
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }
}
