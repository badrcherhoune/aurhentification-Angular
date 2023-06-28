import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public autService: AuthentificationService){}

  public products : Array<any> | undefined;
  ngOnInit(): void {
    this.products = [
      {id:UUID.UUID() , name:"pro1", price: 123},
      {id:UUID.UUID() , name:"pro1", price: 123},
      {id:UUID.UUID() , name:"pro1", price: 123},
      {id:UUID.UUID() , name:"pro2", price: 123},
      {id:UUID.UUID() , name:"pro3", price: 123}
    ]
  }

  deleteProduct(p:any){

  }

}
