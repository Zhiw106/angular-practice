import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css'],
})
export class Test4Component implements OnInit {

  student: any[] = [
    {
      name: 'Lynne Funkhouser',
      major: 'Psychology',
    },
    {
      name: 'Irene Wolfgram',
      major: 'Business',
    },
    {
      name: 'Kalyn Damewood',
      major: 'Economics',
    },
    {
      name: 'Ingeborg Cavins',
      major: 'Business',
    },
    {
      name: 'Lashawn Martin',
      major: 'computer science',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
