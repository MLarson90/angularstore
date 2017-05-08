import { Component } from '@angular/core';
import { Product } from 'app/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router){}

  products: Product[] = [
     new Product('Nut Cracker', 'St. Nick', 9.99,1),
     new Product('Cheese Grater', 'Florentine', 10.32,2),
     new Product('Kite', 'Kite9D3', 15.99,3),
     new Product('Bicycle', 'Trek', 200.00,4),
     new Product('Time', 'Present', 300.99,5),
     new Product('Watch', 'Time Master', 24.99,6)
   ];
   goToDetailPage(clickedProduct: Product) {
     this.router.navigate(['products', clickedProduct.id]);
   };

}
