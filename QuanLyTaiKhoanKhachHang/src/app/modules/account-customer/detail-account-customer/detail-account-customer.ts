import { from } from "rxjs";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-detail-account-customer',
    templateUrl: './detail-account-customer.html',
    styleUrls: ['./detail-account-customer.scss']
})

export class DetailAccountCustomerComponent implements OnInit{
    title: string = "DETAIL ACCOUNT CUSTOMER";
    accountCustomer: any;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getDetailAccountCustomer(this.route.snapshot.params.id)
    }

    getDetailAccountCustomer(id) {
        console.log('id : ', id);
    }

    backToList() {
        this.router.navigate(['list-account-customer']);
    }
}