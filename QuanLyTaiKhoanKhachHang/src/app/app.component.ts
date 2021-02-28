import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/assets/data/accounts2';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Account Customer Management';
  dataStorage = Accounts;
  
  constructor(private storageService: StorageService) {

  }

  ngOnInit() {
    if(localStorage.getItem("listAccountCustomer") == null) {
      localStorage.setItem("listAccountCustomer", JSON.stringify(this.dataStorage));
    }
    
  }
}
