"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var app_1 = require('../../app');
var NavMenuComponent = (function () {
    // Use "constructor"s only for dependency injection
    function NavMenuComponent(store) {
        this.store = store;
    }
    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('loggedIn').subscribe(function (loggedIn) {
            _this.loggedIn$ = loggedIn;
        });
        this.store.select('loggedInUser').subscribe(function (user) {
            _this.user$ = user;
        });
    };
    NavMenuComponent.prototype.logout = function () {
        this.store.dispatch({ type: app_1.LOGOUT_USER });
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            template: "\n\n<ul class=\"nav\">\n    <li [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/home']\">\n            <span class=\"glyphicon glyphicon-home\"></span> Home\n        </a>\n    </li>\n    <li [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/examples']\">\n            <span class=\"glyphicon glyphicon-education\"></span> Platform Examples\n        </a>\n    </li>\n    <li [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/bootstrap']\">\n            <span class=\"glyphicon glyphicon-education\"></span> Bootstrap Demo\n        </a>\n    </li>\n    <li [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/rest-test']\">\n            <span class=\"glyphicon glyphicon-education\"></span> RestAPI Demo\n        </a>\n    </li>\n    <li [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/faq']\">\n            <span class=\"glyphicon glyphicon-education\"></span> FAQ\n        </a>\n    </li>\n    <li *ngIf=\"!loggedIn$\" [routerLinkActive]=\"['link-active']\">\n        <a [routerLink]=\"['/login']\">\n            <span class=\"glyphicon glyphicon-user\"></span> Login\n        </a>\n    </li>\n    <li *ngIf=\"loggedIn$\" (click)=\"logout()\">\n        <a [routerLink]=\"['/']\">\n            <span class=\"glyphicon glyphicon-user\"></span> Welcome, {{ user$.username }} - Logout\n        </a>\n    </li>\n</ul>\n\n"
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
