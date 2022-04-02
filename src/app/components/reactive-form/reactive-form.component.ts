import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  bridgeForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    year: new FormControl('', [
      Validators.required,
      Validators.pattern('s*[0-9]{4}s*'),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit(): void {
    const form = this.bridgeForm;
    console.log('submit', {
      value: form.value,
      dirty: form.dirty,
      valid: form.valid,
    });
  }
}
