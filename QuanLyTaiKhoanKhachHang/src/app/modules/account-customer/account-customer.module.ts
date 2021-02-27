import { NgModule } from '@angular/core';
import { AccessAccountCustomerComponent } from './access-account-customer/access-account-customer';
import { AccountCustomerRoutingModule } from './account-customer.routing';
import { DetailAccountCustomerComponent } from './detail-account-customer/detail-account-customer';
import { ListAccountCustomerComponent } from './list-account-customer/list-account-customer';

@NgModule({
    declarations: [
        ListAccountCustomerComponent,
        DetailAccountCustomerComponent,
        AccessAccountCustomerComponent
    ],
    imports: [
        AccountCustomerRoutingModule
    ],
    exports: [

    ]
})

export class AccountCustomerModule {

}