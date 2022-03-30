import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  username:Array<string> = ["zhiwei","Sophia"]
  item: string = "parentItem"
  items=["Television","item2"]
  studentPhotos: Array<string> = ["https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d1/Matt_Damon_%28cropped%29.jpg"]


addItem(newItem:string){
  this.items.push(newItem)
}}
const fun = () => {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  let y: any = 'abc';
  let x: number = 1;
  let s: string = 'test';
  let a1: number[] = [1, 2, 3];
  let a2: string[] = ['a', 'b', 'c'];
  let a3: any[] = ['abc', 222, true];

  // let obj:any
  console.log(y);
  console.log(x);
  console.log(s);
  console.log(a1[0]);
  console.log(a3[1]);
};
// fun();

