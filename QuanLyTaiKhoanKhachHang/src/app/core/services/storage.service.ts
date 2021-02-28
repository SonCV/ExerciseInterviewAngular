import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StorageService {

    constructor(private http: HttpClient) { }

    getDataFileJson() {
        const localStorageUrl = 'assets/data/accounts.json';
        return this.http.get(localStorageUrl);
    }

}