import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountCustomerService } from 'src/app/core/services/account-customer.service';

@Component({
    selector: 'app-list-account-customer',
    templateUrl: './list-account-customer.html',
    styleUrls: ['./list-account-customer.scss']
})

export class ListAccountCustomerComponent implements OnInit {

    buildColumns = [
        {
            column: "account_number",
            name: "Account number"
        },
        {
            column: "balance",
            name: "Balance"
        },
        {
            column: "firstname",
            name: "First name"
        },
        {
            column: "lastname",
            name: "Last name"
        },
        {
            column: "age",
            name: "Age"
        },
        {
            column: "address",
            name: "Address"
        },
        {
            column: "employer",
            name: "Employer"
        },
        {
            column: "email",
            name: "Email"
        }
    ];
    dataTable: any;
    totalRecord: number = 0;
    displayedColumns = ['firstname', 'lastname', 'account_number', 'balance', 'age', 'address', 'employer', 'email', 'action'];

    constructor(private router: Router,
        private accountCustomerService: AccountCustomerService) {

    }
    ngOnInit() {
        this.getAllAccountCustomer();
    }

    getAllAccountCustomer() {
        this.dataTable =  this.accountCustomerService.getAllAccount();
        this.totalRecord = this.dataTable.length;
    }

    createAccountCustomer() {
        this.router.navigate(['create-account-customer']);
    }
    
}


const ELEMENT_DATA: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];