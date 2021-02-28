import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit, AfterViewInit {

    dataSource;
    @Input() totalRecord = 0;
    @Input() headerTable: string = "List account customer";
    @Input() showHeader = true;
    @Input() isLoading: boolean = true;
    @Input() pageSizeOptions: number[] = [5, 10, 20, 50, 100];
    @Input() dataTable: any = [];
    @Input() displayedColumns: string[] = [];
    @Input() buildColumns: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private router: Router) {

    }
    
    ngOnInit() {
        this.dataSource = new MatTableDataSource<any>(this.dataTable);
    }

    detailItem(item) {
        this.router.navigate(['detail-account-customer', item.id]);
    }

    updateItem(item) {
        this.router.navigate(['update-account-customer', item.id]);
    }

    deleteItem(item) {

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
