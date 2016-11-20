// https://github.com/angular/universal/blob/master/examples/playground/src/server.ts
"use strict";
require("../universal/polyfills/polyfills.node");
var core_1 = require('@angular/core');
core_1.enableProdMode();
var documentHtml = "\n<!doctype>\n  <html lang=\"en\">\n  <head>\n    <title>Angular 2 Universal Starter</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"description\" content=\"Angular 2 Universal\">\n    <meta name=\"keywords\" content=\"Angular 2, Universal\">\n    <meta name=\"author\" content=\"PatrickJS\">\n    <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\">\n    <base href=\"/\">\n  <body>\n    <app>\n      Loading...\n    </app>\n    <another-component></another-component>\n    <script src=\"dist/public/browser-bundle.js\"></script>\n  </body>\n  </html>\n";
var arr = new Array(3).fill(null);
function createApp(num) {
    //return main(documentHtml, {id: num, time: true});
}
/*
var promises = arr.reduce((memo, wat, num) => {
    return memo.then(() => {
        return createApp(num).then(() => {
        });
    });
}, Promise.resolve());

promises
    .then(html => {
        return html;
    });
*/
function calculateSomething(num1, num2) {
    return num1 + num2;
}
exports.calculateSomething = calculateSomething;
