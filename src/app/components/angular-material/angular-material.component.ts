import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
})
export class AngularMaterialComponent implements OnInit {
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
