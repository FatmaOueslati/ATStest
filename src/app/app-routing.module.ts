import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeProductComponent} from './liste-product/liste-product.component';


const routes: Routes = [
  {
    path: '',
    component: ListeProductComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule {}
