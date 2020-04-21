import { Component, OnInit } from '@angular/core';
import PizzaDto from 'src/app/models/pizza.dto';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import IngredientDto from 'src/app/models/ingredient.dto';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage implements OnInit {
  pizza: PizzaDto;
  pizzaId: number;
  ingredients: IngredientDto[] = [];
  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private ingredientService: IngredientService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pizzaId = params.id;
      console.log("DetailPizzaPage -> ngOnInit -> pizzaId", this.pizzaId)
      this.load();

    })
  }

  async load() {
    this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
    console.log("pizza", this.pizza);
    this.ingredients = await this.ingredientService.getAll().toPromise();
    console.log("DetailPizzaPage -> load -> this.ingredients", this.ingredients);

    for (const ingredient of this.pizza.ingredients) {
      this.ingredients.push(this.ingredients.find(x => x.id === ingredient))
    }




  }





}
