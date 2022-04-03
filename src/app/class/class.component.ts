import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  name: string = ''
  age: number = 18

  constructor() {

  }
  ngOnInit(): void {
  }

}
