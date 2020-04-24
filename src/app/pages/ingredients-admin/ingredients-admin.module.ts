import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IngredientsAdminPageRoutingModule } from './ingredients-admin-routing.module';
import { IngredientsAdminPage } from './ingredients-admin.page';
import { AddIngredientModule } from 'src/app/components/add-ingredient/add-ingredient.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsAdminPageRoutingModule,
    AddIngredientModule
  ],
  declarations: [IngredientsAdminPage]
})
export class IngredientsAdminPageModule { }
