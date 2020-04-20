import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPizzaPage } from './detail-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPizzaPageRoutingModule {}
