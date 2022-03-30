import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  name: string = '';
  product: any = null;
  products: Array<any> = [];

  constructor(private route: ActivatedRoute, private data: StorageService) {
    console.log(route);
    //params
    this.id = Number(this.route.snapshot.params['id']);
    console.log(this.id);
    // this.product=this.products.find(x=>x.id===this.id)
    // console.log(this.product)
  }

  ngOnInit(): void {
    // this.products=this.data.getData()

    this.data.getDataById(this.id).subscribe((data) => {
      this.product = data;
    });

    //query
    console.log(this.route.queryParams.subscribe());
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
