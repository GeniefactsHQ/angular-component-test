import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';



@NgModule({
    declarations: [
        InputTextComponent,
    ],
    exports: [
        InputTextComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class UIFormsModule { }
