import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountCustomerService } from 'src/app/core/services/account-customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-access-account-customer',
    templateUrl: './access-account-customer.html',
    styleUrls: ['./access-account-customer.scss']
})

export class AccessAccountCustomerComponent implements OnInit{
    title: string = "";
    idAccount: any;
    nameButton: string = "";
    isUpdate: boolean = false;
    accessAccountForm: FormGroup;

    constructor(private router: Router,
         private route: ActivatedRoute,
         private fb: FormBuilder,
         private accountCustomerService: AccountCustomerService,
         private toastr: ToastrService) {
    }

    ngOnInit() {
        this.buildForm();
        if(this.route.snapshot.params.id) {
            this.title = "UPDATE ACCOUNT CUSTOMER"
            this.nameButton = "Update account";
            this.isUpdate = true;
            this.idAccount = this.route.snapshot.params.id;
            this.patchValueForm(this.route.snapshot.params.id);
        }else {
            this.isUpdate = false;
            this.title = "CREATE ACCOUNT CUSTOMER";
            this.nameButton = "Create account";
        }
       
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
        let dataTable = this.accountCustomerService.getAllAccount();
        let account = dataTable.filter(account => account.id == id)[0];
        this.accessAccountForm.patchValue(account);
    }

    assestAccountCustomer() {
        if(this.idAccount) {
            this.accountCustomerService.updateAccount(this.idAccount, this.accessAccountForm.value);
            this.toastr.success('Update account customer success!');
            this.router.navigate(['list-account-customer']);
            
        } else {
            this.accountCustomerService.addAccount(this.accessAccountForm.value);
            this.toastr.success('Create account customer success!');
            this.router.navigate(['list-account-customer']);
        }
        
    }

    backToList() {
        this.router.navigate(['list-account-customer']);
    }
}