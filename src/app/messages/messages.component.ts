import { Component, OnInit } from '@angular/core';
import { LogMessagesService } from 'src/app/services/log-messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = [];
  
  constructor(public LogMessage: LogMessagesService) {
  }
  ngOnInit(): void {
    this.messages = this.LogMessage.msg;
   
  }
}
