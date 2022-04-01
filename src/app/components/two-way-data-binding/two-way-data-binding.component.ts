import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

export class Student {
  constructor(
    public name: string,
    public email: string,
    public city:string,
    public street:string
  ) {}
}

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
})
export class TwoWayDataBindingComponent implements OnInit {

  cities = ['Toronto', 'Los Angeles', 'Ottawa', 'Vancouver'];

  //address = new FormControl({ city: this.cities[0], street: '' });

  student = new Student('Zhiwei', '222@888.com',  this.cities[0], '');

  student_submitted = new Student('', '', this.cities[0],'');
  
  showData() {
    return JSON.stringify(this.student);
  }

  onSubmit(form: NgForm) {
    this.student_submitted.name = form.value.name;
    this.student_submitted.email = form.value.email;
    this.student_submitted.city = form.value.address.city;
    this.student_submitted.street = form.value.address.street;
    console.log(this.student_submitted);
  }
  constructor() {}

  ngOnInit(): void {}
}
