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
var HomeComponent = (function () {
    // Use "constructor"s only for dependency injection
    function HomeComponent() {
    }
    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "\n\n<h1>Angular2 Universal & ASP.NET Core starter-kit</h1>\n\n<blockquote>\n    <strong>Enjoy the latest features from .NET Core & Angular2!</strong>\n    <br>\n    For more info check the repo here: <a href=\"https://github.com/MarkPieszak/aspnetcore-angular2-universal\">AspNetCore-Angular2-Universal repo</a>\n\n    <br><br>\n</blockquote>\n\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h2>What does this Starter offer? </h2>\n        <ul>\n            <li>ASP.NET Core 1.0.1</li>\n            <li>\n                Angular 2.* front-end UI framework\n                <ul>\n                    <li><a href=\"https://github.com/angular/universal\">Universal</a> - server-side rendering for SEO, deep-linking, and incredible performance.</li>\n                    <li>NgRx - Redux architecture</li>\n                    <li>HMR State Management - Don't lose your applications state during HMR!</li>\n                    <li>AoT (Ahead-of-time) production compilation for even faster prod builds. (UPCOMING)</li>\n                </ul>\n            </li>\n            <li>\n                The latest TypeScript 2.* features\n                <ul>\n                    <li>\n                        \"Path\" support example - create your own custom directory paths to avoid ............. directory diving.<br />\n                        Check the <a href=\"https://github.com/MarkPieszak/aspnetcore-angular2-universal/blob/master/tsconfig.json\">tsconfig</a> to see how they are setup.\n                    </li>\n                </ul>\n            </li>\n            <li>\n                Webpack 2 (current in Beta)\n                <ul>\n                    <li>TS2 aware path support</li>\n                    <li>Hot Module Reloading/Replacement for an amazing dev experience.</li>\n                    <li>Tree-shaking (UPCOMING)</li>\n                </ul>\n            </li>\n            <li>Bootstrap (ng2-bootstrap) : Bootstrap capable of being rendered even on the server.</li>\n            <li>Unit testing via karma & jasmine.</li>\n            <li>e2e testing via protractor.</li>\n        </ul>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h2>Having issues?</h2>\n\n        <ul>\n            <li><strong>Issues with this Starter?</strong> <br>Please post an issue here: <a href=\"https://github.com/MarkPieszak/aspnetcore-angular2-universal\">AspNetCore-Angular2-Universal repo</a><br><br></li>\n            <li><strong>Issues with <u>Universal</u> itself?</strong> <br>Please post an issue here: <a href=\"https://github.com/angular/universal\">Angular Universal repo</a></li>\n        </ul>\n    </div>\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
