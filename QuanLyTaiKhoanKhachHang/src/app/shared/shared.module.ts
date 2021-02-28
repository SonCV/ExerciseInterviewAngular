import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';  
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        DataTableComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatListModule,
        FlexLayoutModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        DataTableComponent
    ]
})

export class SharedModule {

}
