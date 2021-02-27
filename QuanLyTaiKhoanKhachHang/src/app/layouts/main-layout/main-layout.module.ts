import { NgModule } from '@angular/core';
import { MainLayoutComponent } from "./main-layout.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        MatSidenavModule,
        MatDividerModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [

    ]
})

export class MainLayoutModule {

}