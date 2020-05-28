import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzasAdminPage } from './pizzas-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PizzasAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzasAdminPageRoutingModule {}
