import { Component, OnInit } from '@angular/core';
import IngredientDto from 'src/app/models/ingredient.dto';
import { IngredientService } from 'src/app/services/ingredient.service';
import { AddIngredientComponent } from 'src/app/components/add-ingredient/add-ingredient.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingredients-admin',
  templateUrl: './ingredients-admin.page.html',
  styleUrls: ['./ingredients-admin.page.scss'],
})
export class IngredientsAdminPage implements OnInit {
  ingredients: IngredientDto[];
  constructor(
    private ingredientService: IngredientService,
    public modalController: ModalController
  ) { }

  async ngOnInit() {
    this.ingredients = await this.ingredientService.getAll().toPromise();
  }

  async presentModal(ingredient?: IngredientDto) {
    const modal = await this.modalController.create({
      component: AddIngredientComponent,
      swipeToClose: true,
      componentProps: {
        'ingredient': ingredient,
      }
    });

    return await modal.present();
  }

  async deleteIngredient(id: number) {
    console.log("id ingredient", id);
    await this.ingredientService.delete(id).toPromise();
    location.reload();
  }
}
