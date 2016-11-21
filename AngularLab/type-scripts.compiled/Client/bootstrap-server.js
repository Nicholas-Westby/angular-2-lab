"use strict";
require('./__2.1.1.workaround');
require('angular2-universal-polyfills/node');
var core_1 = require('@angular/core');
var angular2_universal_1 = require('angular2-universal');
// Grab the (Node) server-specific NgModule
var app_server_module_1 = require('./app/platform-modules/app.server.module');
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
        // Something went wrong, return the original blank document at least
        if (typeof html !== 'string') {
            return { html: doc };
        }
        /*  Successfully serialized Application
         *  You can pass "Globals" here if you want to pass some data to every request
         *  (also you could pass in params.data if you want to pass data from the server that came through the Views/Index.cshtml page
         *   inside of the asp-prerender-data="" attribute
         *      globals: params.data
         */
        return { html: html /*, globals: someObject */ };
    }).catch(function (err) {
        console.log(err);
        return { html: doc };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
