import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AccountCustomerService } from 'src/app/core/services/account-customer.service';

@Component({
    selector: 'app-detail-account-customer',
    templateUrl: './detail-account-customer.html',
    styleUrls: ['./detail-account-customer.scss']
})

export class DetailAccountCustomerComponent implements OnInit{
    title: string = "DETAIL ACCOUNT CUSTOMER";
    accountCustomer: any;
    detailAccountForm: FormGroup;

    constructor(private router: Router, 
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private accountCustomerService: AccountCustomerService,) {

    }

    ngOnInit() {
        this.buildForm();
        this.getDetailAccountCustomer(this.route.snapshot.params.id)
    }

    buildForm() {
        this.detailAccountForm = this.fb.group({
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

    getDetailAccountCustomer(id) {
        this.patchValueForm(id);
        console.log('id : ', id);
    }

    patchValueForm(id) {
        let dataTable = this.accountCustomerService.getAllAccount();
        let account = dataTable.filter(account => account.id == id)[0];
        this.detailAccountForm.patchValue(account);
    }

    backToList() {
        this.router.navigate(['list-account-customer']);
    }
}