import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { StorageService } from './core/services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountCustomerService } from './core/services/account-customer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainLayoutModule
  ],
  providers: [StorageService, AccountCustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
