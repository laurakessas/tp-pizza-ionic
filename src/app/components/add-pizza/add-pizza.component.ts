import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import PizzaDto from 'src/app/models/pizza.dto';
import { PizzaService } from 'src/app/services/pizza.service';
import IngredientDto from 'src/app/models/ingredient.dto';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss'],
})
export class AddPizzaComponent implements OnInit {

  @Input() pizza: PizzaDto;
  newPizza: PizzaDto = { id: undefined, nom: undefined, prix: undefined, photo: undefined, ingredients: [] };
  ingredients: IngredientDto[];

  ingredientsWrapper: { ingredient: IngredientDto, isChecked: boolean }[] = [];


  constructor(
    private modalController: ModalController,
    private pizzaService: PizzaService,
    private ingredientService: IngredientService
  ) { }

  async ngOnInit() {
    if (this.pizza) {
      this.newPizza = this.pizza;
    }

    this.ingredients = await this.ingredientService.getAll().toPromise();
    for (const ingredient of this.ingredients) {
      this.ingredientsWrapper.push({ ingredient: ingredient, isChecked: this.newPizza.ingredients.findIndex(x => x === ingredient.id) !== -1 ? true : false });
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async addOrEditPizza() {
    this.newPizza.ingredients = [];
    for (const item of this.ingredientsWrapper) {
      if (item.isChecked) {
        this.newPizza.ingredients.push(item.ingredient.id);
      }
    }

    if (this.pizza) {
      await this.pizzaService.update(this.newPizza).toPromise();
    }
    else {
      await this.pizzaService.create(this.newPizza).toPromise();
    }
    location.reload();
  }
}
