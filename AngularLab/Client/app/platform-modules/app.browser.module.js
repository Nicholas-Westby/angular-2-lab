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
var store_devtools_1 = require('@ngrx/store-devtools');
// for AoT we need to manually split universal packages (/browser & /node)
var browser_1 = require('angular2-universal/browser');
var app_common_module_1 = require('./app.common.module');
var app_1 = require('app');
// Universal : XHR Cache 
var app_shared_1 = require('app-shared');
exports.UNIVERSAL_KEY = 'UNIVERSAL_CACHE';
function getRequest() {
    return {};
}
exports.getRequest = getRequest;
function getResponse() {
    return {};
}
exports.getResponse = getResponse;
var AppBrowserModule = (function () {
    function AppBrowserModule(cache) {
        this.cache = cache;
        this.doRehydrate();
    }
    // Universal Cache "hook"
    AppBrowserModule.prototype.doRehydrate = function () {
        var defaultValue = {};
        var serverCache = this._getCacheValue(app_shared_1.CacheService.KEY, defaultValue);
        this.cache.rehydrate(serverCache);
    };
    // Universal Cache "hook
    AppBrowserModule.prototype._getCacheValue = function (key, defaultValue) {
        // Get cache that came from the server
        var win = window;
        if (win[exports.UNIVERSAL_KEY] && win[exports.UNIVERSAL_KEY][key]) {
            var serverCache = defaultValue;
            try {
                serverCache = JSON.parse(win[exports.UNIVERSAL_KEY][key]);
                if (typeof serverCache !== typeof defaultValue) {
                    console.log('Angular Universal: The type of data from the server is different from the default value type');
                    serverCache = defaultValue;
                }
            }
            catch (e) {
                console.log('Angular Universal: There was a problem parsing the server data during rehydrate');
                serverCache = defaultValue;
            }
            return serverCache;
        }
        else {
            console.log('Angular Universal: UNIVERSAL_CACHE is missing');
        }
        return defaultValue;
    };
    AppBrowserModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_1.AppComponent],
            imports: [
                // "UniversalModule" Must be first import.
                // ** NOTE ** : This automatically imports BrowserModule, HttpModule, and JsonpModule for Browser,
                // and NodeModule, NodeHttpModule etc for the server.
                browser_1.UniversalModule,
                app_common_module_1.AppCommonModule,
                // NgRx
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension()
            ],
            providers: [
                // Angular -Universal- providers below ::
                { provide: 'isBrowser', useValue: browser_1.isBrowser },
                { provide: 'isNode', useValue: browser_1.isNode },
                { provide: 'req', useFactory: getRequest },
                { provide: 'res', useFactory: getResponse }
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_shared_1.CacheService !== 'undefined' && app_shared_1.CacheService) === 'function' && _a) || Object])
    ], AppBrowserModule);
    return AppBrowserModule;
    var _a;
}());
exports.AppBrowserModule = AppBrowserModule;
//# sourceMappingURL=app.browser.module.js.map