import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
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
        AccountCustomerRoutingModule,
        MatCardModule,
        SharedModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [

    ]
})

export class AccountCustomerModule {

}