import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private proServ:ProductService) { }

  ngOnInit() {
    this.products=this.proServ.getAll();
  }
  delete(productId:number){
    if(confirm(`Are you sure of deleting Product#${productId}`)){
      this.proServ.delete(productId);
    }
  }

}
