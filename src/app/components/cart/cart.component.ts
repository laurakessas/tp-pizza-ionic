import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import PizzaDto from 'src/app/models/pizza.dto';
import Pizza from 'src/app/models/pizza';
import CartItemDto from 'src/app/models/cart.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cart: CartItemDto[];

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  closeModal() {
    this.modalController.dismiss();
  }

  removeFromCart(id: number) {
    this.cart.splice(this.cart.findIndex(x => x.pizza.id === id), 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.ngOnInit();
  }

  removeQuantity(item: CartItemDto) {
    if (item.quantity === 1) {
      this.removeFromCart(item.pizza.id);
    }
    else {
      item.quantity--;
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addQuantity(item: CartItemDto) {
    item.quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
