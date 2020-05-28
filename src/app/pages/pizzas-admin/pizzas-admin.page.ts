import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { ModalController } from '@ionic/angular';
import PizzaDto from 'src/app/models/pizza.dto';
import { AddPizzaComponent } from 'src/app/components/add-pizza/add-pizza.component';

@Component({
  selector: 'app-pizzas-admin',
  templateUrl: './pizzas-admin.page.html',
  styleUrls: ['./pizzas-admin.page.scss'],
})
export class PizzasAdminPage implements OnInit {

  pizzas: PizzaDto[];

  constructor(private pizzaService: PizzaService,
    public modalController: ModalController) { }

  async ngOnInit() {
    this.pizzas = await this.pizzaService.getAll().toPromise();
  }

  async presentModal(pizza?: PizzaDto) {
    const modal = await this.modalController.create({
      component: AddPizzaComponent,
      swipeToClose: true,
      componentProps: {
        'pizza': pizza,
      }
    });
    return await modal.present();
  }
  async deletePizza(id: number) {
    await this.pizzaService.delete(id).toPromise();
    location.reload();
  }
}
