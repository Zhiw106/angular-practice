import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id: string = '';
  name: string = '';
  year: string = '';
  constructor() {}

  ngOnInit(): void {}
  onSubmit = (form: NgForm) => {
    console.log({
      form,
      formValue: form.value,
      formValid: form.valid,
      id: form.value.id,
      name: form.value.name,
      year: form.value.year,
      formTouched: form.touched,
      formDirty: form.dirty,
    });
  };
}
