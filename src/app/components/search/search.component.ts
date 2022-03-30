import { Component, OnInit } from '@angular/core';
//import service
import { StorageService } from 'src/app/services/storage.service';

//不推荐使用这种方法
//let storage=new StorageService()

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public keyword: string = '';
  public historyList: any[] = [];

  constructor(public storage:StorageService) {
    console.log(this.storage);
    let res=console.log(this.storage.get());
    console.log(res);
    
    
  }

  ngOnInit(): void {}
  doSearch = () => {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);
    }
    console.log(this.keyword);
    this.keyword = '';
  };
  deleteHistory = (key: number) => {
    console.log(key);
    this.historyList.splice(key, 1); //从索引值开始，删除一个
  };
}
