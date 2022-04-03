import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  public keyword: string = '';
  public todolist: Array<any> = [];
  public historyList: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  doAdd = (event:KeyboardEvent) => {
    if (event.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {

        this.todolist.push({
          title: this.keyword,
          status: 0,
        });
        this.keyword = '';
      } else {
        alert('already exists');
        this.keyword = '';
      }
    }
  };

  deleteHistory = (key: number) => {
    console.log(key);
    this.todolist.splice(key, 1); //从索引值开始，删除一个
  };
  //如果数组里面有keyword返回true，否则返回false
  todolistHasKeyword(todolist:Array<any>, keyword: string) {
    //异步，会存在问题， 而且value也得指定类型？
    // todolist.forEach(value => {
    //   if(value.title==keyword){
    //     return true
    //   }
    // });
    if (!keyword) return false;

    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }
}
