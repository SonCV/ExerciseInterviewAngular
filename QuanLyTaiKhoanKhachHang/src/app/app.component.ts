import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/assets/data/accounts2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Account Customer Management';
  
  constructor() {

  }

  ngOnInit() {
    
  }
}
