webpackJsonp([0],{

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/*
 * Lazy-Loaded Module & Component
 *  You can see that it wasn't referenced anywhere in the app / modules
 *  Except for in the app.routes.ts file
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
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(59);
var app_1 = __webpack_require__(21);
var faq_component_1 = __webpack_require__(631);
var FAQModule = (function () {
    function FAQModule() {
    }
    FAQModule = __decorate([
        core_1.NgModule({
            imports: [
                app_1.BaseSharedModule,
                router_1.RouterModule.forChild([
                    { path: '', component: faq_component_1.FAQComponent }
                ])
            ],
            declarations: [
                faq_component_1.FAQComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FAQModule);
    return FAQModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FAQModule;
//# sourceMappingURL=faq.module.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(2);
var FAQComponent = (function () {
    // Use "constructor"s only for dependency injection
    function FAQComponent() {
    }
    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    FAQComponent.prototype.ngOnInit = function () {
        console.log('\n\nFAQ Component lazy-loaded!!\n\n');
    };
    FAQComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'app-faq',
            template: "\n    <h1>FAQ</h1>\n    <blockquote>\n      Note: <strong>This component was Lazy-loaded!</strong>\n    </blockquote>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FAQComponent);
    return FAQComponent;
}());
exports.FAQComponent = FAQComponent;
//# sourceMappingURL=faq.component.js.map

/***/ }

});
//# sourceMappingURL=0.js.map