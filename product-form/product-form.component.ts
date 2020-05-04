import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product:Product;
  public isNew:boolean;

  constructor(
    private proServ:ProductService,
    private routeData:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(){
    this.routeData.params.subscribe(
      (params)=>{
        let productId= params['pid'];

        if(productId==undefined){
          this.isNew=true;
          this.product=new Product();
          
        }else{
          this.product=this.proServ.get(productId);
          this.isNew=false;
          
        }
      }
    );
  }
  

  save(){
    if(this.isNew){
      this.proServ.add(this.product);
    }else{
      this.proServ.update(this.product);
    }
    this.router.navigateByUrl("/list");
  }

}

  
