import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddPizzaComponent } from './add-pizza.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [AddPizzaComponent],
    providers: [],
    exports: [AddPizzaComponent],
    entryComponents: [AddPizzaComponent]
})
export class AddPizzaModule { }
