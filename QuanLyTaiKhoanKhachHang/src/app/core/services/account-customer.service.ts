import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AccountCustomerService {
    constructor(private http: HttpClient) {

    }

    searchAccount() {

    }

    addAccount(data) {
        console.log('data : ', data);
    }

    updateAccount() {

    }

    deleteAccount() {
        
    }
}