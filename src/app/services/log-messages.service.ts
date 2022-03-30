import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogMessagesService {
  msg: string[] = [];

  constructor() {}

  addNewMsg(message: string) {
    this.msg.push(message);
    console.log(this.msg);
    
  }
  clearMsg(){
    console.log('clear');
    this.msg=[]
    console.log(this.msg);
  
    
  }
}
