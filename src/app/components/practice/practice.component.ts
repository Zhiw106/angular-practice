import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  public keywords: any = 'default';
  constructor() {}

  ngOnInit(): void {}

 changeKeywords=()=>{
   this.keywords="already changed"
 }
 getKeywords=()=>{
   console.log(this.keywords);
   
 }
}
