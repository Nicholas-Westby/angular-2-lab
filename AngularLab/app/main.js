"use strict";
//import * as blah from 'zone.js';
//import * as blah2 from 'reflect-metadata';
require('angular2-universal-polyfills/node');
var core_1 = require('@angular/core');
var angular2_universal_1 = require('angular2-universal');
// Grab the (Node) server-specific NgModule
var app_server_module_1 = require('./app.server.module');
var app_module_1 = require('./app.module');
var platform = angular2_universal_1.platformNodeDynamic();
platform.bootstrapModule(app_module_1.AppModule);
core_1.enableProdMode();
function default_1(params) {
    var doc = "\n        <!DOCTYPE html>\n        <html>\n            <head></head>\n            <body>\n                <app></app>\n            </body>\n        </html>\n    ";
    // hold platform reference
    var platformRef = angular2_universal_1.platformNodeDynamic();
    var platformConfig = {
        ngModule: app_server_module_1.AppServerModule,
        document: doc,
        preboot: false,
        baseUrl: '/',
        requestUrl: params.url,
        originUrl: params.origin
    };
    // defaults
    var cancel = false;
    var _config = Object.assign({
        get cancel() { return cancel; },
        cancelHandler: function () { return Zone.current.get('cancel'); }
    }, platformConfig);
    // for each user
    var zone = Zone.current.fork({
        name: 'UNIVERSAL request',
        properties: _config
    });
    return Promise.resolve(zone.run(function () {
        return platformRef.serializeModule(Zone.current.get('ngModule'));
    })).then(function (html) {
        if (typeof html !== 'string') {
            return { html: doc };
        }
        return { html: html };
    }).catch(function (err) {
        console.log(err);
        return { html: doc };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=main.js.map