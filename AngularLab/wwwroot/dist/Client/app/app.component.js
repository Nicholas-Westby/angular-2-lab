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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(req, res) {
        console.log('req', req);
        console.log('res', res);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <div class=\"container-fluid\">\n            <app-nav-menu></app-nav-menu>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            styles: [require('./app.component.css')],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Inject('req')),
        __param(1, core_1.Inject('res')), 
        __metadata('design:paramtypes', [Object, Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map