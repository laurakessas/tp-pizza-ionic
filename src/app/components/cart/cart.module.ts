import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ],
    declarations: [CartComponent],
    providers: [],
    exports: [CartComponent],
    entryComponents: [CartComponent]
})
export class CartModule { }
