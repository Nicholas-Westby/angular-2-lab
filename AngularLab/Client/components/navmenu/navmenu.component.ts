import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, LOGOUT_USER } from '../../app';

@Component({
    selector: 'app-nav-menu',
    template: `

<ul class="nav">
    <li [routerLinkActive]="['link-active']">
        <a [routerLink]="['/home']">
            <span class="glyphicon glyphicon-home"></span> Home
        </a>
    </li>
    <li [routerLinkActive]="['link-active']">
        <a [routerLink]="['/examples']">
            <span class="glyphicon glyphicon-education"></span> Platform Examples
        </a>
    </li>
    <li [routerLinkActive]="['link-active']">
        <a [routerLink]="['/bootstrap']">
            <span class="glyphicon glyphicon-education"></span> Bootstrap Demo
        </a>
    </li>
    <li [routerLinkActive]="['link-active']">
        <a [routerLink]="['/rest-test']">
            <span class="glyphicon glyphicon-education"></span> RestAPI Demo
        </a>
    </li>
    <li [routerLinkActive]="['link-active']">
        <a [routerLink]="['/faq']">
            <span class="glyphicon glyphicon-education"></span> FAQ
        </a>
    </li>
    <li *ngIf="!loggedIn$" [routerLinkActive]="['link-active']">
        <a [routerLink]="['/login']">
            <span class="glyphicon glyphicon-user"></span> Login
        </a>
    </li>
    <li *ngIf="loggedIn$" (click)="logout()">
        <a [routerLink]="['/']">
            <span class="glyphicon glyphicon-user"></span> Welcome, {{ user$.username }} - Logout
        </a>
    </li>
</ul>

`
})
export class NavMenuComponent implements OnInit {
    
    loggedIn$: {};
    user$: {};

    // Use "constructor"s only for dependency injection
    constructor(private store: Store<AppState>) {}

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit () {
        this.store.select('loggedIn').subscribe(loggedIn => {
            this.loggedIn$ = loggedIn;  
        });

        this.store.select('loggedInUser').subscribe(user => {
            this.user$ = user;
        }); 
    }

    logout() {
        this.store.dispatch({ type: LOGOUT_USER });
    }
}
