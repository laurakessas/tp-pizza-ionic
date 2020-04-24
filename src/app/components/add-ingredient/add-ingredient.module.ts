import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ],
    declarations: [AddIngredientComponent],
    providers: [],
    exports: [AddIngredientComponent],
    entryComponents: [AddIngredientComponent]
})
export class AddIngredientModule { }
