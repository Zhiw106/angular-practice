import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() child: Array<string> =[]
  @Input() photos: Array<string> = [];
  currentPhoto: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleImage($event: MouseEvent) {
    this.currentPhoto = (this.currentPhoto == this.photos.length - 1) ? 0 : this.currentPhoto + 1;
  }
}
