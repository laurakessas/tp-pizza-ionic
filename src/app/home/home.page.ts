import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { ModalController, MenuController } from '@ionic/angular';
import { CartComponent } from '../components/cart/cart.component';
import PizzaDto from '../models/pizza.dto';
import CartItemDto from '../models/cart.dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() menuAdmin: boolean = true;
  pizza: PizzaDto[];

  constructor(
    private pizzaService: PizzaService,
    public modalController: ModalController,
    private menu: MenuController,
  ) { }

  async ngOnInit() {
    this.pizza = await this.pizzaService.getAll().toPromise();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }

  addToCart(id: number) {
    let cart: CartItemDto[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    const index = cart.findIndex(x => x.pizza.id === id);
    if (index === -1) {
      cart.push({ pizza: this.pizza.find(x => x.id === id), quantity: 1 });
    }
    else {
      cart[index].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
