import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  viewFlag:boolean = false;
  productsData: Array<product> = [];

  constructor(private productService: ProductService) { }
  ngOnInit() {
  }

  viewProduct(){
    console.log("View Product");
    this.viewFlag=true;

     this.productService.viewproduct().subscribe(
      data=>{
        this.productsData = data;
        console.log("Fetch array: " + this.productsData);
      }
    )
  }

  deleteProduct(id){
    console.log("In delete");
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log("deleted!");
      }
    );
    this.viewProduct();
  }
}
