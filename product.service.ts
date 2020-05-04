import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[];

  constructor() { 
    this.products=[
      {productId:1,productName:"Mobile",productDescription:"brand new smart ph",price:40000},
      {productId:2,productName:"ipod",productDescription:"ffdfnkn",price:99999},
      {productId:3,productName:"lmklmsdm",productDescription:"kncckdfn",price:88888}
    ]
  }
  getAll():Product[]{
    return this.products;
  }

  get(id:number){
    return this.products.find((p)=>(p.productId==id));
  }

  add(product:Product){
    this.products.push(product);
  }

  update(product:Product){
    let index = this.products.findIndex((p)=>(p.productId===product.productId));
    if(index>-1){
      this.products[index]=product;
    }
  }

  delete(id:number){
    let index= this.products.findIndex((product)=>(product.productId===id));
    if(index>-1){
      this.products.splice(index,1);
    }
  }

}
