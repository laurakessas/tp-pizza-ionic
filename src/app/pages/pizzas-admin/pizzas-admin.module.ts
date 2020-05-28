import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzasAdminPageRoutingModule } from './pizzas-admin-routing.module';

import { PizzasAdminPage } from './pizzas-admin.page';
import { AddPizzaModule } from 'src/app/components/add-pizza/add-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzasAdminPageRoutingModule,
    AddPizzaModule
  ],
  declarations: [PizzasAdminPage]
})
export class PizzasAdminPageModule { }
