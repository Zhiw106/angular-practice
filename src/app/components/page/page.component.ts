import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: number = 1

  constructor() {
  }

  ngOnInit(): void {
  }

  increasePage() {
    this.page = this.page + 1
  }

  decreasePage() {
    if (this.page > 1) {
      this.page = this.page - 1
    }
  }

}
