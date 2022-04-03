import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() item = ''
 
  @Output() newItemEvent = new EventEmitter<string>()

  counter: number = 0
  eventValue: any = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  show(event: any) {
    this.counter = this.counter + 1
    this.eventValue = event.target.value
    console.log(this.item);
 
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value)
    
  }
}
