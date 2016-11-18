//https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/a0cb1ac2bf4224b14ea8efd503badf5841ee8a06/Client/app/platform-modules/app.server.module.ts
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
//import { RouterModule } from '@angular/router';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { Store, StoreModule } from '@ngrx/store';
// for AoT we need to manually split universal packages (/browser & /node)
var node_1 = require('angular2-universal/node');
var app_common_module_1 = require('./app.common.module');
var app_component_1 = require('./app.component');
// Universal : XHR Cache
var universal_cache_1 = require('./universal-cache');
var AppServerModule = (function () {
    function AppServerModule(cache) {
        var _this = this;
        this.cache = cache;
        /** Universal Cache "hook"
         * We need to use the arrow function here to bind the context as this is a gotcha
         * in Universal for now until it's fixed
         */
        this.universalDoDehydrate = function (universalCache) {
            console.log('universalDoDehydrate ****');
            universalCache[universal_cache_1.CacheService.KEY] = JSON.stringify(_this.cache.dehydrate());
        };
        /** Universal Cache "hook"
         * Clear the cache after it's rendered
         */
        this.universalAfterDehydrate = function () {
            _this.cache.clear();
        };
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                // "UniversalModule" Must be first import.
                // ** NOTE ** : This automatically imports BrowserModule, HttpModule, and JsonpModule for Browser,
                // and NodeModule, NodeHttpModule etc for the server.
                node_1.UniversalModule,
                app_common_module_1.AppCommonModule
            ],
            providers: [
                // Can be used inside Components within the app to declaritively run code
                // depending on the platform it's in
                { provide: 'isBrowser', useValue: node_1.isBrowser },
                { provide: 'isNode', useValue: node_1.isNode }
            ]
        }), 
        __metadata('design:paramtypes', [universal_cache_1.CacheService])
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map