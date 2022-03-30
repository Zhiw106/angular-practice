import { Component, OnInit } from '@angular/core';
import { LogMessagesService } from 'src/app/services/log-messages.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    private data: StorageService,
    private LogMessage: LogMessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.data.getData().subscribe((userInfo) => {
      this.products = userInfo;
      console.log(this.products);
    });
  }
  onSelect(data: any) {
    this.LogMessage.addNewMsg(`Selected id=${data.id}`);
  }
  navTo($e: any, id: any) {
    this.router.navigate(['/product', id]);
  }
}
