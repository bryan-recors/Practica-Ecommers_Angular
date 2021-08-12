import { Component, OnInit } from '@angular/core';
import {CartService} from './../../../core/services/cart.service';
//pipe 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(
    private cartService:CartService
  ) { 
    /*con un sibscribe
    this.cartService.cart$.subscribe(products =>{
      console.log(products);
      this.total = products.length;
    });
    */
    //***con un  pipe
    this.total$ = this.cartService.cart$.pipe(
      map(products=> products.length)
    );
    
  }

  ngOnInit(): void {
  }

}
