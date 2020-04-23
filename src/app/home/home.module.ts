import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PizzaService } from '../services/pizza.service';
import { CartModule } from '../components/cart/cart.module';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    CartModule,
    MenuModule
  ],

  declarations: [HomePage],
  providers: [PizzaService],
})
export class HomePageModule { }
