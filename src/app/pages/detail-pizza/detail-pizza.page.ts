import { Component, OnInit } from '@angular/core';
import PizzaDto from 'src/app/models/pizza.dto';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import IngredientDto from 'src/app/models/ingredient.dto';
import CartItemDto from 'src/app/models/cart.dto';
import { ModalController } from '@ionic/angular';
import { CartComponent } from 'src/app/components/cart/cart.component';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage implements OnInit {

  pizza: PizzaDto;
  pizzaId: number;
  ingredients: IngredientDto[] = [];
  pizzaIngredient: IngredientDto[];

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private ingredientService: IngredientService,
    public modalController: ModalController, ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pizzaId = params.id;
      this.load();

    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }


  async load() {
    this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
    console.log("pizza", this.pizza);
    this.ingredients = await this.ingredientService.getAll().toPromise();
    if (this.pizza.ingredients && this.pizza.ingredients.length > 0) {
      this.pizzaIngredient = [];

      for (const ingredient of this.pizza.ingredients) {
        this.pizzaIngredient.push(this.ingredients.find(x => x.id === ingredient))
      }
    }
  }

  addToCart() {
    let cart: CartItemDto[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }

    const index = cart.findIndex(x => x.pizza.id === this.pizza.id);
    if (index === -1) {
      cart.push({ pizza: this.pizza, quantity: 1 });
    }
    else {
      cart[index].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
