import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzasAdminPageRoutingModule } from './pizzas-admin-routing.module';

import { PizzasAdminPage } from './pizzas-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzasAdminPageRoutingModule
  ],
  declarations: [PizzasAdminPage]
})
export class PizzasAdminPageModule {}
