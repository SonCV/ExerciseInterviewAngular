import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountCustomerService } from 'src/app/core/services/account-customer.service';

@Component({
    selector: 'app-access-account-customer',
    templateUrl: './access-account-customer.html',
    styleUrls: ['./access-account-customer.scss']
})

export class AccessAccountCustomerComponent implements OnInit{
    title: string = "";
    nameButton: string = "";
    isUpdate: boolean = false;
    accessAccountForm: FormGroup;

    constructor(private router: Router,
         private route: ActivatedRoute,
         private fb: FormBuilder,
         private accountCustomerService: AccountCustomerService) {

    }

    ngOnInit() {
        if(this.route.snapshot.params.id) {
            this.title = "UPDATE ACCOUNT CUSTOMER"
            this.nameButton = "Update account";
            this.isUpdate = true;
            this.patchValueForm(this.route.snapshot.params.id);
        }else {
            this.isUpdate = false;
            this.title = "CREATE ACCOUNT CUSTOMER";
            this.nameButton = "Create account";
        }
        this.buildForm();
    }

    buildForm() {
        this.accessAccountForm = this.fb.group({
            account_number: '',
            balance: 0,
            firstname: '',
            lastname: '',
            age: 0,
            gender: '',
            address: '',
            employer: '',
            email: '',
            city: '',
            state: ''
        });
    }

    patchValueForm(id) {
        let dataStorage: any[] = JSON.parse(localStorage.getItem("listAccountCustomer"));
        let account = dataStorage.filter(account => account.id == id);
        console.log('account : ', account);
    }

    createAccountCustomer() {
        this.accountCustomerService.addAccount(this.accessAccountForm.value);
    }

    updateAccountCustomer() {

    }

    backToList() {
        this.router.navigate(['list-account-customer']);
    }
}