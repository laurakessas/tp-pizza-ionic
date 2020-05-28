import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IngredientService } from 'src/app/services/ingredient.service';
import IngredientDto from 'src/app/models/ingredient.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {

  @Input() ingredient: IngredientDto;
  newIngredient: IngredientDto = { id: undefined, nom: undefined };

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private ingredientService: IngredientService,
  ) { }

  async ngOnInit() {
    if (this.ingredient) {
      this.newIngredient = this.ingredient;
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async addOrEditIngredient() {
    if (this.ingredient) {
      await this.ingredientService.update(this.newIngredient).toPromise();
    }
    else {
      await this.ingredientService.create(this.newIngredient).toPromise();
    }
  }
}
