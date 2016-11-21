/*
 * _Common_ NgModule to share between our "BASE" App.Browser & App.Server module platforms
 *
 *  If something belongs to BOTH, just put it Here.
 * - If you need something to be very "platform"-specific, put it
 *   in the specific one (app.browser or app.server)
 */
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
var router_1 = require('@angular/router');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
// Main "APP" Root Component
var _1 = require('../');
// Component imports
var components_1 = require('../../components');
// Container (aka: "pages") imports
var containers_1 = require('../../containers');
// Provider (aka: "shared" | "services") imports
var shared_1 = require('../../shared');
//////////////////////////////////////////////////////////////////
// This imports the variable that, in a hot loading situation, holds
// a reference to the previous application's last state before
// it was destroyed.
var _2 = require('../');
var MODULES = [
    // Do NOT include UniversalModule, HttpModule, or JsonpModule here
    // This has ALL the "Common" stuff (CommonModule, FormsModule, ReactiveFormsModule, etc etc)
    // You would import this into your child NgModules so you don't need to duplicate so much code
    _1.BaseSharedModule,
    // Angular
    router_1.RouterModule,
    // NgRx
    store_1.StoreModule.provideStore(_1.appReducer, _2.appState),
    effects_1.EffectsModule,
    // Bootstrap
    ng2_bootstrap_1.Ng2BootstrapModule,
    // Routing
    router_1.RouterModule.forRoot(_1.ROUTES)
];
var PIPES = [];
var COMPONENTS = [
    // put shared components here
    _1.AppComponent,
    components_1.NavMenuComponent,
    containers_1.RestTestComponent,
    containers_1.HomeComponent,
    containers_1.LoginComponent,
    containers_1.BootstrapComponent,
    containers_1.ExamplesComponent
];
var PROVIDERS = [
    // put shared services here
    shared_1.CacheService,
    shared_1.HttpCacheService,
    shared_1.ApiGatewayService
];
var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        core_1.NgModule({
            // bootstrap: [AppComponent],
            imports: MODULES.slice(),
            declarations: PIPES.concat(COMPONENTS),
            providers: PROVIDERS.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], AppCommonModule);
    return AppCommonModule;
}());
exports.AppCommonModule = AppCommonModule;
