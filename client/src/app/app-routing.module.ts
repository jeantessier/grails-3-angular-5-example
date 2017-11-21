import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
