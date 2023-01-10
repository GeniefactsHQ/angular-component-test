import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FourzerofourComponent} from './fourzerofour/fourzerofour.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./frontpage/frontpage.module').then(m => m.FrontpageModule),
  },
  {path: '**', component: FourzerofourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
