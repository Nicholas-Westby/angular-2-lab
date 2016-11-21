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
var BootstrapComponent = (function () {
    // Use "constructor"s only for dependency injection
    function BootstrapComponent() {
        this.oneAtATime = true;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    }
    BootstrapComponent.prototype.addItem = function () {
        this.items.push("Items " + (this.items.length + 1));
    };
    BootstrapComponent = __decorate([
        core_1.Component({
            selector: 'app-bootstrap',
            template: "\n<h1>Ng2-bootstrap Demo:</h1>\n\n<blockquote>\n    <strong>Here we're using Bootstrap via <a href=\"https://github.com/valor-software/ng2-bootstrap\">ng2-bootstrap</a>, which can even be rendered on the server!</strong>\n    <br>\n</blockquote>\n\n<hr>\n<br><br>\n\n<h3>Bootstrap Accordion demo:</h3>\n\n<p>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\"\n            (click)=\"group.isOpen = !group.isOpen\">\n        Toggle last panel\n    </button>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\"\n            (click)=\"status.isFirstDisabled = ! status.isFirstDisabled\">\n        Enable / Disable first panel\n    </button>\n</p>\n\n<div class=\"checkbox\">\n    <label>\n        <input type=\"checkbox\" [(ngModel)]=\"oneAtATime\">\n        Open only one at a time\n    </label>\n</div>\n\n\n<accordion [closeOthers]=\"oneAtATime\">\n    <accordion-group heading=\"Static Header, initially expanded\"\n                     [isOpen]=\"status.isFirstOpen\"\n                     [isDisabled]=\"status.isFirstDisabled\">\n        This content is straight in the template.\n    </accordion-group>\n    <accordion-group *ngFor=\"let group of groups\" [heading]=\"group.title\">\n        {{ group?.content }}\n    </accordion-group>\n    <accordion-group heading=\"Dynamic Body Content\">\n        <p>The body of the accordion group grows to fit the contents</p>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addItem()\">Add Item</button>\n        <div *ngFor=\"let item of items\">{{item}}</div>\n    </accordion-group>\n    <accordion-group #group [isOpen]=\"status.open\">\n        <div accordion-heading>\n            I can have markup, too!\n            <i class=\"pull-right glyphicon\"\n               [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\n        </div>\n        This is just some content to illustrate fancy headings.\n    </accordion-group>\n</accordion>"
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());
exports.BootstrapComponent = BootstrapComponent;
