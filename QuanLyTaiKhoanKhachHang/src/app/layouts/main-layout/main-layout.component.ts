import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent {

    sideBarOpen = true;

    constructor() { }

    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
}