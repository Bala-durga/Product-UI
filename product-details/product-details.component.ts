import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product;

  constructor(
    private proServ:ProductService,
    private routeData:ActivatedRoute
  ) { }

  ngOnInit(){
    this.routeData.params.subscribe(
      (params)=>{
        let productId=params['id'];
        if(productId){
          this.product=this.proServ.get(productId);
        }
      }
    );
  }

}
