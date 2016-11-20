// https://github.com/angular/universal/blob/master/examples/playground/src/server.ts

import "../universal/polyfills/polyfills.node";

import { enableProdMode } from '@angular/core';

enableProdMode();

var documentHtml = `
<!doctype>
  <html lang="en">
  <head>
    <title>Angular 2 Universal Starter</title>
    <meta charset="UTF-8">
    <meta name="description" content="Angular 2 Universal">
    <meta name="keywords" content="Angular 2, Universal">
    <meta name="author" content="PatrickJS">
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <base href="/">
  <body>
    <app>
      Loading...
    </app>
    <another-component></another-component>
    <script src="dist/public/browser-bundle.js"></script>
  </body>
  </html>
`;

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











export function calculateSomething(num1, num2) {
    return num1 + num2;
}