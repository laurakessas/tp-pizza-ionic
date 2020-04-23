import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPizzaPageRoutingModule } from './detail-pizza-routing.module';

import { DetailPizzaPage } from './detail-pizza.page';
import { CartModule } from 'src/app/components/cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPizzaPageRoutingModule,
    CartModule
  ],
  declarations: [DetailPizzaPage]
})
export class DetailPizzaPageModule { }
