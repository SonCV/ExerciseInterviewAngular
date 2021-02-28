import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessAccountCustomerComponent } from './access-account-customer/access-account-customer';
import { DetailAccountCustomerComponent } from './detail-account-customer/detail-account-customer';
import { ListAccountCustomerComponent } from './list-account-customer/list-account-customer';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'list-account-customer',
      pathMatch: 'full'
  },
  {
      path: 'list-account-customer',
      component: ListAccountCustomerComponent
  },
  {
      path: 'detail-account-customer/:id',
      component: DetailAccountCustomerComponent
  },
  {
      path: 'create-account-customer',
      component: AccessAccountCustomerComponent
  },
  {
    path: 'update-account-customer/:id',
    component: AccessAccountCustomerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountCustomerRoutingModule { }
