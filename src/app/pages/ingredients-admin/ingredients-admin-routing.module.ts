import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsAdminPage } from './ingredients-admin.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsAdminPageRoutingModule {}
