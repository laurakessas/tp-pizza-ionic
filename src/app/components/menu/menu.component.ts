import { Component, OnInit, Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() forAdmin: boolean;

  constructor(
    private menu: MenuController,
    public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }
  async openMenu() {
    await this.menu.open();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
