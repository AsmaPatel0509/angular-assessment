import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: product = new product();
  id:number;
  name:String;
  description:String;
  price:number;
  errMessage:String;
  products: Array<product> = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(){
    console.log("Add product");
    if (this.product.id === null || this.product.name === '') {
      this.errMessage = "Required fields";
    }
    console.log("In addProduct()" + this.product);
    this.products.push(this.product);
    this.productService.addProduct(this.product).subscribe((data) => {
    },
      error => {
        this.errMessage = error.message;
        console.log(this.errMessage);
        this.products.pop();
      });
      this.product.id = null;
      this.product.name = '';
      this.product.description = '';
      this.product.price = null;
      
    // console.log(this.note.text);

  }

}
