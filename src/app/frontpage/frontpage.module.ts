import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UIFormsModule} from '../ui/forms/forms.module';

import {FrontpageRoutingModule} from './frontpage-routing.module';
import {FrontpageComponent} from './frontpage.component';


@NgModule({
  declarations: [
    FrontpageComponent,
  ],
  imports: [
    CommonModule,
    FrontpageRoutingModule,
    UIFormsModule,
  ],
})
export class FrontpageModule {
}
