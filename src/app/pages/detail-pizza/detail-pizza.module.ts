import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPizzaPageRoutingModule } from './detail-pizza-routing.module';

import { DetailPizzaPage } from './detail-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPizzaPageRoutingModule
  ],
  declarations: [DetailPizzaPage]
})
export class DetailPizzaPageModule {}
