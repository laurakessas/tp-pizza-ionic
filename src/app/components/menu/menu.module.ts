import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CartModule } from '../cart/cart.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        CartModule
    ],
    declarations: [MenuComponent],
    providers: [],
    exports: [MenuComponent],
    entryComponents: [MenuComponent]
})
export class MenuModule { }
