//https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/master/Client/app/platform-modules/app.common.module.ts
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
/*
 * _Common_ NgModule to share between our "BASE" App.Browser & App.Server module platforms
 *
 *  If something belongs to BOTH, just put it Here.
 * - If you need something to be very "platform"-specific, put it
 *   in the specific one (app.browser or app.server)
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { EffectsModule } from '@ngrx/effects';
// Main "APP" Root Component
//import { BaseSharedModule, AppComponent, ROUTES, appReducer } from 'app';
// Component imports
//import { NavMenuComponent } from 'app-components';
// Container (aka: "pages") imports
/*import {
    HomeComponent,
    RestTestComponent,
    BootstrapComponent,
    LoginComponent,
    ExamplesComponent
} from 'app-containers';*/
// Provider (aka: "shared" | "services") imports
/*import {
    HttpCacheService, CacheService, // Universal : XHR Cache
    ApiGatewayService
} from 'app-shared';*/
//////////////////////////////////////////////////////////////////
// This imports the variable that, in a hot loading situation, holds
// a reference to the previous application's last state before
// it was destroyed.
//import { appState } from 'app';
var MODULES = [
    // Do NOT include UniversalModule, HttpModule, or JsonpModule here
    // This has ALL the "Common" stuff (CommonModule, FormsModule, ReactiveFormsModule, etc etc)
    // You would import this into your child NgModules so you don't need to duplicate so much code
    //BaseSharedModule,
    // Angular
    router_1.RouterModule,
];
var PIPES = [];
/*const COMPONENTS = [
    // put shared components here
    AppComponent,
    NavMenuComponent,
    RestTestComponent,
    HomeComponent,
    LoginComponent,
    BootstrapComponent,
    ExamplesComponent
];*/
/*const PROVIDERS = [
    // put shared services here
    CacheService,
    HttpCacheService,
    ApiGatewayService
];*/
var PROVIDERS = [];
var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        core_1.NgModule({
            // bootstrap: [AppComponent],
            imports: MODULES.slice(),
            declarations: PIPES.slice(),
            providers: PROVIDERS.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], AppCommonModule);
    return AppCommonModule;
}());
exports.AppCommonModule = AppCommonModule;
//# sourceMappingURL=app.common.module.js.map