import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'detail-pizza/:id',
    loadChildren: () => import('./pages/detail-pizza/detail-pizza.module').then(m => m.DetailPizzaPageModule)
  },
  {
    path: 'ingredients-admin',
    loadChildren: () => import('./pages/ingredients-admin/ingredients-admin.module').then(m => m.IngredientsAdminPageModule)
  },
  {
    path: 'pizzas-admin',
    loadChildren: () => import('./pages/pizzas-admin/pizzas-admin.module').then(m => m.PizzasAdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
